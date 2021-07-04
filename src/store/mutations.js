import * as types from './mutations-types'
import router from '../router'

export default {

    [types.USER_LOGGED_IN] (state, value){
        state.user.loggedIn = value;
    },
    [types.FETCH_LOGIN_REQUEST] ( state ){
        state.user.fetchingData = true;
    },
    [types.USER_LOGIN_FAILURE] (state, { error } ){
        state.user.fetchingData = false;
        state.user.data = null;
        state.user.loggedIn = null;
        state.user.error = error;
        state.user.register.error = null;

        localStorage.removeItem('user')
    },
    [types.USER_LOGIN] (state, { token, name, email, nickname } ){
        state.user.fetchingData = false;
        const data = { token, name, email, nickname };
        state.user.error = null;
        state.user.register.error = null;
        state.user.data = data;
        state.user.loggedIn = true;
        localStorage.setItem('user', JSON.stringify(data))
        router.push({ name: "home" });
    },
    [types.USER_LOGOUT] (state){
        state.user.fetchingData = false;
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
        if(data){
            state.user.loggedIn = true;
            localStorage.setItem('user', JSON.stringify(data))
            router.push({ name: "home" });
        }else{
            state.user.loggedIn = false;
            localStorage.removeItem('user')
        }
    },
    [types.USER_REGISTER] (state){
        state.user.register.fetchingData = true;
        state.user.register.error = null;
    },
    [types.USER_REGISTER_FAILURE] (state, { error } ){
        state.user.register.fetchingData = false;
        state.user.register.error = error;
    },

    [types.FETCH_TWITTERS_REQUEST] (state){
        state.twitters.fetchingData = true;
        state.twitters.error = null;
    },
    [types.FETCH_TWITTERS_SUCCESS] (state, { meta, links, data } ){
        state.twitters.fetchingData = false;
        state.twitters.error = null;
        state.twitters.data = { meta, links, data };
    },
    [types.FETCH_TWITTERS_FAILURE] (state, { error }){
        state.twitters.fetchingData = true;
        state.twitters.error = error;
    },

    [types.FETCH_TWITTER_SAVE_REQUEST] (state){
        state.twitters.save.fetchingData = true;
        state.twitters.save.error = null;
    },
    [types.FETCH_TWITTER_SAVE_SUCCESS] (state, { text, created_by, created_at } ){
        state.twitters.save.fetchingData = false;
        state.twitters.save.error = null;
        state.twitters.save.data = { text, created_by, created_at };
        state.twitters.data.data = [ { text, created_by, created_at } , ...state.twitters.data.data ];
    },
    [types.FETCH_TWITTER_SAVE_FAILURE] (state, { error }){
        state.twitters.save.fetchingData = false;
        state.twitters.save.error = error;
    },
}
