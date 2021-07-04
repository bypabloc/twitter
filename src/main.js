import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { mapState } from "vuex";

import './assets/style.scss'

const app = createApp(App)

const user = localStorage.getItem('user')
if(user){
    const { token, name, email, nickname } = JSON.parse(user)
    console.log('userData',{ token, name, email, nickname })
    store.dispatch('fetchUser',{ token, name, email, nickname })
}else{
    store.dispatch('fetchUser',null)
}

app.mixin({  
    computed: {
        // map `this.theme` to `this.$store.getters.theme`
        ...mapState([
            'theme',
        ]),
    },
})

app.use(store)
app.use(router)
app.mount('#app')
