import http from "k6/http";
import { check, sleep } from "k6";
import { SharedArray } from 'k6/data';

// The setup cycle will be called only once per test at the start the whole test life cycle.
export function setup() {
    const authUrl = "http://localhost:3000/authorize";
    const payload = JSON.stringify({
        username: "jdoe25",
        password: "iIsInR5cCI6IkpXVCJ9",
    });
    const params = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const response = http.post(authUrl, payload, params);
    const responseBody = JSON.parse(response.body)
    check(response, {
        'is status 200': r => r.status === 200,
        'token returned check': r => r.body.includes("token")
    })
    return responseBody.token
}

export let options = {
    stages: [
        { duration: "10s", target: 10 },
        { duration: "20s", target: 20 },
        { duration: "30s", target: 30 },
        { duration: "5s", target: 0 }
    ],
    thresholds: {
        http_req_failed: ['rate<0.01'],
        http_req_duration: ['p(99)<3'],
        checks: ['rate==1'],
    }
};

var jokes = new SharedArray("jokes", function () {
    return JSON.parse(open('../test-data/jokes.json'));
});

var randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

// The entry point for the VU code, 
// It is run over and over for as long as the test is running.
export default function (authToken) {
    const headers = {
        Authorization: `Bearer ${authToken}`,
    };

    let response = http.get(`http://localhost:3000/v1/en/${randomJoke.id}`, { headers });
    check(response, {
        "Get joken returned 200": response => response.status == 200,
        'token returned check': response => response.body.includes("jokes")
    });
    sleep(2);
}