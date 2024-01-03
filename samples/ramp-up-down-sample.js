import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 }, // In 30s loads 20 VU
    { duration: '1m30s', target: 10 }, // The next 90s reduces the VU by 10
    { duration: '20s', target: 0 }, // The last 20 reduces the las 10 VU
  ],
};

export default function () {
  const res = http.get('https://httpbin.test.k6.io/');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}
