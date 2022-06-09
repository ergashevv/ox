import { Config } from "../api/URL";
const URL = Config.TEST_URL;

export function GetData(endpoint, token, page) {
    console.log(page)
    return fetch(`${URL + endpoint}?page=${page}`, {
        method: "GET",
        headers: {
            "Authorization": 'Bearer ' + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(res => res.json())
}