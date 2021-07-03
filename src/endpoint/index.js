import endpoint from '../endpoint/settings'

export default {

    login({ user, password }){
        return endpoint.post({
            url: 'login',
            params: { user, password },
        })
    },
    register({ email, password }){
        return { email, password }
    },

    logout(){
        return { }
    },

    getConfig(){
        return { }
    },
    createConfig( userEmail ){
        return { userEmail }
    },
    saveConfig( data ){
        return { data }
    },
    saveImg( { img } ){
        return { img }
    },

    getListAllProuds(){
        return { }
    },
    postProud( { title, description, icon, idx } ){
        return { title, description, icon, idx }
    },
    saveProud( { id, title, description, icon, idx } ){
        return { id, title, description, icon, idx }
    },
    updateProud ( prouds ){
        return { prouds }
    },
    remProud( proudId ){
        return { proudId }
    },

    getListAllEducations(){
        return { }
    },
    postEducation( { title, description, start, end, finished } ){
        return { title, description, start, end, finished }
    },

    getListAllSkills(){
        return { }
    },
    postSkill( text, percentage, icon ){
        return { text, percentage, icon }
    },
}
