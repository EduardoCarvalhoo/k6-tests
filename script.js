import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        { duration: '10s', target: 500 },
        { duration: '20s', target: 500 },
        { duration: '10s', target: 0 }

    ],
};

export default function () {
    const headers = {
        'Authorization': ``,
        'Content-Type': 'application/json',
    };

    const res = http.get('localhost:8080/api/pokemons/buscar', {headers});

    console.log(`Status: ${res.status}`);

    sleep(1)
}