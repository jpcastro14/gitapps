import axios from 'axios';

export const Api = axios.create({
    baseURL: "https://reqres.in/api/",
    headers: {
        'x-api-key': 'reqres-free-v1'
    }
})

//Erros observados: Nas primeiras vezes a api retorna OK 200, porém após diversas tentativas, a api solicita API KEY, que foi setada acima nos headers.