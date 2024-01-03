import http from 'k6/http';
import { sleep } from 'k6';
import { SharedArray } from 'k6/data';
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';

export let options = {
    vus: 5,
    duration: '5s',
    iterations: 5
}

var data = new SharedArray("pokemons", function () {
    return papaparse.parse(open('../test-data/pokemons.csv'), { header: true }).data;
});

var randomPokemon = data[Math.floor(Math.random() * data.length)];

export default function () {
    let res = http.get('https://pokeapi.co/api/v2/pokemon/'+ randomPokemon.name);
    let resBody = JSON.parse(res.body);
    console.log(`${randomPokemon.name} has ${resBody.base_experience} of base experience`);
    sleep(3);
} 