import Vue from 'vue'
import * as types from './mutations-types'
import router from '@/router'

export default {

    [types.USER_LOGGED_IN] (state, value){
        state.user.loggedIn = value;
    },
    [types.USER_REGISTER_FAILURE] (state, error ){
        state.user.data = null;
        state.user.loggedIn = null;
        state.user.register.error = error;
        localStorage.removeItem('user')
    },
    [types.USER_LOGIN_FAILURE] (state, error ){
        state.user.data = null;
        state.user.loggedIn = null;
        state.user.error = error;
        state.user.register.error = null;

        localStorage.removeItem('user')
    },
    [types.USER_LOGIN] (state, { displayName, email, img, nickname } ){
        const data = { displayName, email, img, nickname };
        state.data.config.data = data;
        state.user.error = null;
        state.user.register.error = null;
        state.user.data = data;
        state.user.loggedIn = true;
        localStorage.setItem('user', JSON.stringify(data))
        localStorage.setItem('config', JSON.stringify(data))
        router.push({ name: "dashboard" });
    },
    [types.USER_LOGOUT] (state){
        state.user.error = null;
        state.user.register.error = null;
        state.user.data = null;
        state.user.loggedIn = null;
        // router.push('/')
        localStorage.removeItem('user')
        router.push({ name: "/" });
    },
    [types.USER] (state, data){
        state.user.data = data;
        state.data.config.data = data;
        localStorage.setItem('user', JSON.stringify(data))
    },
    [types.FETCH_CONFIG_REQUEST] (state){
        state.data.config.fetchingData = true;
        state.data.config.err = null;
    },
    [types.FETCH_CONFIG_SUCCESS] (state, data ){
        state.data.config = {
            fetchingData: false,
            err: null,
            data,
        }
    },
    [types.FETCH_CONFIG_FAILURE] (state, { error }){
        state.data.config = {
            fetchingData: false,
            err: error,
            data: null,
        }
    },
    [types.CREATE_CONFIG] (state, { id }){
        state.data.config = {
            fetchingData: false,
            data: {
                id,
                img: null,
            },
        }
    },
    [types.SAVE_CONFIG] (state, data ){
        state.data.config.fetchingData = false;
        for (const key in data) {
            state.data.config.data[key] = data[key];
        }
    },

    // fetching prouds
    [types.FETCH_PROUDS_REQUEST] (state){
        state.fetchingData = true
        state.error = null
    },
    [types.FETCH_PROUDS_SUCCESS] (state, { prouds }){
        state.fetchingData = false
        state.error = null

        const proudsNews = Object.values(prouds).reduce((old,curr) => {
            return [...old, {
                id: curr.id,
                icon: curr.icon,
                title: curr.title,
                description: curr.description,
                idx: curr.idx,
            }];
        },[]);

        state.prouds = proudsNews;
    },
    [types.FETCH_PROUDS_FAILURE] (state, { error }){
        state.fetchingData = false
        state.error = error
    },

    // fetching educations
    [types.FETCH_EDUCATIONS_REQUEST] (state){
        state.fetchingData = true
        state.error = null
    },
    [types.FETCH_EDUCATIONS_SUCCESS] (state, { educations }){
        state.fetchingData = false
        state.error = null
        state.educations = { ...educations }
    },
    [types.FETCH_EDUCATIONS_FAILURE] (state, { error }){
        state.fetchingData = false
        state.error = error
    },

    // fetching skills
    [types.FETCH_SKILLS_REQUEST] (state){
        state.fetchingData = true
        state.error = null
    },
    [types.FETCH_SKILLS_SUCCESS] (state, { skills }){
        state.fetchingData = false
        state.error = null
        state.skills = { ...skills }
    },
    [types.FETCH_SKILLS_FAILURE] (state, { error }){
        state.fetchingData = false
        state.error = error
    },

    [types.ADD_PROUD] (state, proud ){
        state.prouds = [ ...Object.values(state.prouds) , {
            ...proud,
            editing: false,
        }]
    },
    [types.SAVE_PROUD] ( state, proud ){
        const prouds = Object.values(state.prouds)

        const index = prouds.findIndex(e => {
            return e.id == proud.id
        });
        prouds[index] = {
            ...proud,
            editing: false,
        };
        state.prouds = prouds;
    },
    [types.UPDATE_PROUD] ( state, prouds ){
        console.log('mutations')

        const proudsOld = Object.values(state.prouds)

        console.log('proudsOld',proudsOld)
        console.log('prouds to update',prouds)

        const proudsNews = proudsOld.reduce((old,curr) => {

            const item = prouds.find(e => {
                return e.id==curr.id
            });
            console.log('item',item)

            return [...old, {
                id: item?.id ?? curr.id,
                icon: item?.icon ?? curr.icon,
                title: item?.title ?? curr.title,
                description: item?.description ?? curr.description,
                idx: item?.idx ?? curr.idx,
            }];
        },[]);
        console.log('proudsNews',proudsNews)

        const proudsSort = proudsNews.sort((a,b)=> (a.idx > b.idx ? 1 : -1))
        console.log('proudsSort',proudsSort)

        state.prouds = proudsNews;
    },
    [types.EDITING_PROUD] ( state, {id, status} ){
        const prouds = Object.values(state.prouds)

        const index = prouds.findIndex(e => {
            return e.id == id
        });
        prouds[index]['editing'] = status;

        state.prouds = prouds;
    },
    [types.REM_PROUD] ( state, proud_id ){
        state.prouds = Object.values(state.prouds)
            .filter(proud => proud.id !== proud_id)
    },

    [types.ADD_EDUCATION] (state, { education }){
        Vue.set(state.educations, education.id, education )
    },
    [types.ADD_SKILL] (state, { skill }){

        Vue.set(state.skills, skill.id, skill )
    },
    
}
