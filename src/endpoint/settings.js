
// const url_base = 'https://bypabloc-twitter-api.herokuapp.com/api/v1'
const url_base = 'http://twitter-api.prueba/api/v1'

let headers = {
    'Content-Type' : 'application/json',
    'Accept' : 'application/json',
    device: `SO: ${navigator.platform} || Navegador: ${navigator.userAgent}`,
};
const user = localStorage.getItem('user')
if(user){
    const userData = JSON.parse(user)
    headers['Authorization'] = `Bearer ${userData.token}`
}    

export default {
    get({url,params}){
        console.log('get',params)
        return fetch(`${url_base}/${url}`, {
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache', 
            headers,
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
        });
    },
    post({url,params}){
        return fetch(`${url_base}/${url}`, {
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache', 
            headers,
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(params) 
        });
    },
}