import axios, { AxiosResponse } from "axios";

const config = {
    api: 'https://reqres.in/api',
    options: {
        headers: { 'content-type': 'application/json' },
    },
};


const GETREQ = async (endpoint: string) => {

   return  axios
        .get(`${config.api}${endpoint}`)
        .then((response) => {
          return response;
        })
        .catch((response) => {
           return  response ;
        })

};

const POSTREQ = async (endpoint: string, data: any) => {
   return  axios
        .post(
            `${config.api}${endpoint}`, data ? JSON.stringify(data) : null
        )
        .then((res) => { console.log(res) })
        .catch((err) => { console.error(err) });
};


export default { GETREQ, POSTREQ }


