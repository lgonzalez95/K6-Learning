import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 1,
    iterations: '1'
}

export default function () {
    let res = http.get('https://pokeapi.co/api/v2/pokemon/pikachu');
    console.log(res.status);
    check(res, {
        'is status 200': r => r.status === 200,
        'is not status 404': r => r.status !== 404,
        'has abilities': r => (JSON.parse(r.body)).abilities.length > 0,
        'body size is less than 1030': r => r.body.length <= 1030,
        'content check': r=> r.body.includes("id")
    })
    sleep(1)
} 