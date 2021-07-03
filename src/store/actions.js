import * as types from './mutations-types'
import endpoint from '../endpoint'

export default {

    login({ commit }, { user, password } ) {

        commit( types.FETCH_LOGIN_REQUEST )

        endpoint.login({ user, password })
            .then( response => {
                response.json().then(function(data) {
                    const { token, name, email, nickname } = data
                    commit( types.USER_LOGIN, { token, name, email, nickname } )
                });
            } )
            .catch(err => {
                    commit(types.USER_LOGIN_FAILURE, err.message ) 
            } )
    },
    register({ commit }, data ) {
        endpoint.register(data)
            .then(res => {
                endpoint.createConfig(data.email)
                commit( types.USER_LOGIN, res.user )
            } )
            .catch(err => {
                    commit(types.USER_REGISTER_FAILURE, err.message ) 
            } )
    },

    fetchLogout({commit} ){
        endpoint.logout()
            .then(() => {
                commit( types.USER_LOGOUT )
            } )
    },

    fetchUser({ commit }, user) {
        commit("USER_LOGGED_IN", user !== null);
        console.log('fetchUser',user)
        if (user) {
            commit("USER", {
                displayName: user.displayName,
                email: user.email,
                img: user.img,
                nickname: user.nickname,
            });
        } else {
            commit("USER", null);
        }
    },

    fetchConfig({commit}){
        commit(types.FETCH_CONFIG_REQUEST)
        endpoint.getConfig()
            .then( snap => { 
                const configs = [];
                console.log('snap',snap);
                snap.forEach(data => {
                    configs.push({
                        id: data.id,
                        ...data.data(),
                    });
                });
                commit( types.FETCH_CONFIG_SUCCESS, configs[0] )
            })
            .catch( err => {
                commit( types.FETCH_CONFIG_FAILURE, err.message ) 
            })
    },
    createConfig({commit}, email){
        endpoint.createConfig(email)
            .then( res => {
                commit(types.CREATE_CONFIG, res )
            } )
            .catch(err => {
                console.log('err',err)
            })
    },
    saveConfig({commit}, data ){

        const dataNew = Object.keys(data).reduce((old,curr) => {
            return {
                ...old,
                ...{
                    [curr]: data[curr],
                }
            };
        },{});

        endpoint.saveConfig( dataNew )
            .then( () => {
                commit(types.SAVE_CONFIG, dataNew )
            } )
            .catch(err => {
                console.log('err',err)
            })
    },
    saveImg({commit}, { img } ){
        commit == 1;
        endpoint.saveImg( { img } )
            .then( res => {
                this.dispatch('saveConfig', {img:res.img});
                // saveConfig({img:res})
            } )
            .catch(err => {
                console.error('err',err)
            })
    },

    fetchProuds({commit}){
        commit(types.FETCH_PROUDS_REQUEST)

        endpoint.getListAllProuds()
            .then(snap => { 
                const prouds = [];
                snap.forEach(data => {
                    prouds.push({
                        id: data.id,
                        ...data.data(),
                    });
                });
                commit(types.FETCH_PROUDS_SUCCESS, { prouds: prouds })
            })
            .catch(err => {
                console.log('err',err)
                    commit(types.FETCH_PROUDS_FAILURE, { err }) 
                }
            )
    },
    addProud({commit}, {title, description, icon }){
        endpoint.postProud(title, description, icon )
            .then(proud => {
                commit(types.ADD_PROUD, {
                    id: proud.id,
                    title, description, icon
                } )
            } )
    },
    saveProud({commit}, saveProud ){
        const id = saveProud?.id
        if(id){
            endpoint.saveProud( saveProud )
                .then(() => {
                    commit(types.SAVE_PROUD, {
                        ...saveProud,
                        id,
                    } )
                } )
        }else{
            endpoint.postProud( saveProud )
                .then(proud => {
                    commit(types.ADD_PROUD, {
                        ...saveProud,
                        id: proud.id,
                    } )
                } )
                .catch(err => {
                        console.log('error',err)
                    }
                )
        }
    },
    updateProud({commit}, prouds ){
        console.log('actions->updateProud')
        endpoint.updateProud( prouds )
            .then( () => {
                console.log('actions->then')
                commit(types.UPDATE_PROUD, prouds )
            } )
            .catch(err => {
                    console.log('actions->catch')
                    console.log('error',err)
                }
            )
    },
    editingProud({commit}, {id, status}){
        commit(types.EDITING_PROUD, {id, status} )
    },
    remProud({commit}, id ){
        endpoint.remProud(id)
            .then(() => {
                commit(types.REM_PROUD, id )
            } )
            .catch(err => {
                console.log(err)
            } )
    },
    
    fetchEducations({commit}){
        commit(types.FETCH_EDUCATIONS_REQUEST)

        endpoint.getListAllEducations()
            .then(snap => commit(types.FETCH_EDUCATIONS_SUCCESS, { educations: snap.val() }))
            .catch(error => commit(types.FETCH_EDUCATIONS_FAILURE, { error }) )
    },
    
    fetchSkills({commit}){
        commit(types.FETCH_SKILLS_REQUEST)

        endpoint.getListAllSkills()
            .then(snap => commit(types.FETCH_SKILLS_SUCCESS, { skills: snap.val() }))
            .catch(error => commit(types.FETCH_SKILLS_FAILURE, { error }) )
    },

    addEducation({commit}, {title, description, start, end, finished }){
        endpoint.postEducation(title, description, start, end, finished )
            .then(education => commit(types.ADD_EDUCATION, { education } ) )
    },
    postSkill({commit}, { text, percentage, icon }){
        endpoint.postSkill( text, percentage, icon )
            .then(skill => commit(types.ADD_SKILL, { skill } ) )
    },

    deleteProud({commit},{proudId}){
        endpoint.deleteProud(proudId)
            .then( () => commit(types.DELETE_PROUD), {proudId} )
    }
}