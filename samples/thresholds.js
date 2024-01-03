/**
 * Thresholds are the pass/fail criteria that you define for your test metrics. 
 * If the performance of the system under test (SUT) does not meet the conditions of your threshold, the test finishes with a failed status.
 * Often, testers use thresholds to codify their SLOs. For example, you can create thresholds for any combination of the following expectations:
    
    Less than 1% of requests return an error.
    95% of requests have a response time below 200ms.
    99% of requests have a response time below 400ms.
    A specific endpoint always responds within 300ms.
 */

/**
 * 99% of requests should be successful
 * 99% of requests should have a latency of 1000ms or less
 */

import { check } from "k6";
import http from "k6/http";

export const options = {
    thresholds: {
        http_req_failed: ['rate<0.01'],      // http errors should be less than 1%
        http_req_duration: ['p(99)<1000']   // 99% of requests should be below 1s
    }
}

export default function () {
    const url = "https://test-api.k6.io/auth/basic/login/";
    const payload = JSON.stringify({
        username: "test_case",
        password: "1234",
    });
    const params = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const res = http.post(url, payload, params);

    // check that response is 200
    check(res, {
        "login response was 200": (res) => res.status == 200,
    });
}