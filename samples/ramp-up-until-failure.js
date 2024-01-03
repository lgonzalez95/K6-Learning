import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    thresholds: {
        http_req_failed: [{ threshold: "rate<0.01", abortOnFail: true }],
        http_req_duration: [{ threshold: "p(99)<120", abortOnFail: true }],
    },
    scenarios: {
        //arbitrary name of scenario:
        breaking: {
            executor: "ramping-vus",
            stages: [
                { duration: "5s", target: 10 },
                { duration: "10s", target: 20 },
                { duration: "15s", target: 40 },
                { duration: "10s", target: 60 },
                { duration: "15s", target: 80 },
                { duration: "20s", target: 100 },
                { duration: "25s", target: 120 },
                { duration: "30s", target: 140 },
                //....
            ],
        },
    },
}


export default function () {
    const res = http.get('https://httpbin.test.k6.io/');
    check(res, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
}
