import endpoint from '../endpoint/settings'

export default {

    login({ user, password }){
        return endpoint.post({
            url: 'login',
            params: { user, password },
        })
    },
    register({ email, password, name, nickname }){
        return endpoint.post({
            url: 'register',
            params: { email, password, name, nickname },
        })
    },
    logout(){
        return endpoint.get({
            url: 'logout',
        })
    },

    getTwitters(){
        return endpoint.get({
            url: 'tweets',
        })
    },
    saveTwitter( { text } ){
        return endpoint.post({
            url: 'tweets/new_tweet',
            params: { text },
        })
    },
}

export const getError = response => {
    const err = response?.status ? response.status : null

    if(err){
        let res = {
            message: '',
        }

        console.log('err',err)
        console.log('response',response)

        if(err===422){
            res.message = response?.data?.errors ? response.data.errors.join('<br/>') : ''
        }else if(err===401){
            res.message = response?.data?.errors ? response.data.errors.join('<br/>') : ''
        }else{
            res.message = response?.statusText ? response.statusText : null
        }

        return res
    }
}
