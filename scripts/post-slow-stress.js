import http from "k6/http";
import { check, sleep } from "k6";

// The setup cycle will be called only once per test at the start the whole test life cycle.
export function setup() {
    const authUrl = "http://localhost:3001/authorize";
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
        'The get token request status is 200': r => r.status === 200,
        'The token is returned successfully': r => r.body.includes("token")
    })
    return responseBody.token
}

export let options = {
    stages: [
        { duration: "30s", target: 500 },
        { duration: "1m", target: 200 },
        { duration: "30s", target: 200 },
        { duration: "1m", target: 300 },
        { duration: "1m", target: 400 },
        { duration: "1m", target: 0 }
    ],
    thresholds: {
        http_req_failed: ['rate<0.01'],
        http_req_duration: ['p(99)<3001'],
        checks: ['rate==1'],
    }
};

// The entry point for the VU code, 
// It is run over and over for as long as the test is running.
export default function (authToken) {
    const headers = {
        Authorization: `Bearer ${authToken}`,
    };

    let response = http.post('http://localhost:3001/create-joke-slow', { headers });
    const responseBody = JSON.parse(response.body)
    check(response, {
        "The create joke request returns 200": response => response.status == 200,
        'The joke created message is returned': response => response.body.includes("Joke created successfully")
    });
    if(response.status !== 200)
        console.log(responseBody)

    if(response.status === 200)
        console.log(responseBody.message)
    sleep(1);
}