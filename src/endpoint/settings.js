const url_base = 'https://bypabloc-twitter-api.herokuapp.com/api/v1'

const device = `SO: ${navigator.platform} || Navegador: ${navigator.userAgent}`

export default {
    get({url,params}){
        console.log('get',params)
        return fetch(`${url_base}/${url}`, {
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
        });
    },
    post({url,params}){
        return fetch(`${url_base}/${url}`, {
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify({...params,device}) 
        });
    },
}