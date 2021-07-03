import * as types from './mutations-types'
import API from '@/api'

export default {

    login({ commit }, data ) {
        API.login(data)
            .then(data => {
                commit( types.USER_LOGIN, data.user )
            } )
            .catch(err => {
                    commit(types.USER_LOGIN_FAILURE, err.message ) 
            } )
    },
    loginWithGoogle({ commit }, { displayName, email } ) {
        // displayName: 'Pablo Contreras',
        // email: 'pacg1991@gmail.com',
        API.loginWithGoogle({ displayName, email })
            .then(data => {
                commit( types.USER_LOGIN, data )
                // this.dispatch('fetchConfig');
            } )
            .catch(err => {
                commit(types.USER_LOGIN_FAILURE, err.message ) 
            } )
    },
    register({ commit }, data ) {
        API.register(data)
            .then(res => {
                API.createConfig(data.email)
                commit( types.USER_LOGIN, res.user )
            } )
            .catch(err => {
                    commit(types.USER_REGISTER_FAILURE, err.message ) 
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

    fetchLogout({commit} ){
        API.logout()
            .then(() => {
                commit( types.USER_LOGOUT )
            } )
    },

    fetchConfig({commit}){
        commit(types.FETCH_CONFIG_REQUEST)
        API.getConfig()
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
        API.createConfig(email)
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

        API.saveConfig( dataNew )
            .then( () => {
                commit(types.SAVE_CONFIG, dataNew )
            } )
            .catch(err => {
                console.log('err',err)
            })
    },
    saveImg({commit}, { img } ){
        commit == 1;
        API.saveImg( { img } )
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

        API.getListAllProuds()
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
        API.postProud(title, description, icon )
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
            API.saveProud( saveProud )
                .then(() => {
                    commit(types.SAVE_PROUD, {
                        ...saveProud,
                        id,
                    } )
                } )
        }else{
            API.postProud( saveProud )
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
        API.updateProud( prouds )
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
        API.remProud(id)
            .then(() => {
                commit(types.REM_PROUD, id )
            } )
            .catch(err => {
                console.log(err)
            } )
    },
    
    fetchEducations({commit}){
        commit(types.FETCH_EDUCATIONS_REQUEST)

        API.getListAllEducations()
            .then(snap => commit(types.FETCH_EDUCATIONS_SUCCESS, { educations: snap.val() }))
            .catch(error => commit(types.FETCH_EDUCATIONS_FAILURE, { error }) )
    },
    
    fetchSkills({commit}){
        commit(types.FETCH_SKILLS_REQUEST)

        API.getListAllSkills()
            .then(snap => commit(types.FETCH_SKILLS_SUCCESS, { skills: snap.val() }))
            .catch(error => commit(types.FETCH_SKILLS_FAILURE, { error }) )
    },

    addEducation({commit}, {title, description, start, end, finished }){
        API.postEducation(title, description, start, end, finished )
            .then(education => commit(types.ADD_EDUCATION, { education } ) )
    },
    postSkill({commit}, { text, percentage, icon }){
        API.postSkill( text, percentage, icon )
            .then(skill => commit(types.ADD_SKILL, { skill } ) )
    },

    deleteProud({commit},{proudId}){
        API.deleteProud(proudId)
            .then( () => commit(types.DELETE_PROUD), {proudId} )
    }
}