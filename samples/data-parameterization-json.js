import http from 'k6/http';
import { sleep } from 'k6';
import { SharedArray } from 'k6/data';

export let options = {
    vus: 5,
    duration: '5s',
    iterations: 5
}

var data = new SharedArray("pokemons", function () {
    return JSON.parse(open('../test-data/pokemons.json'));
});

var randomPokemon = data[Math.floor(Math.random() * data.length)];

export default function () {
    let res = http.get('https://pokeapi.co/api/v2/pokemon/'+ randomPokemon.name);
    let resBody = JSON.parse(res.body);
    console.log(`${randomPokemon.name} has ${resBody.base_experience} of base experience`);
    sleep(3);
} 