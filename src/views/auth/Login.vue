<template>
    <div :class="'container theme-'+[theme]+'-400'">
        <div :class="'card theme-'+[theme]+'-200'">
            <div class="card-header">
                
            </div>
            <div class="card-body ">
                <div v-if="user?.error">{{ user.error }}</div>
                <form class="form" action="#" @submit.prevent="loginEvent">
                    <h1 class="center">Ingresa a Twitter</h1>

                    <div class="center">
                        <input type="email" class="inputtext" v-model="form.email" placeholder="Correo">
                    </div>
                    <div class="center">
                        <input type="password" class="inputtext"  v-model="form.password" placeholder="Contraseña">
                    </div>

                    <div class="center">
                        <button
                            type="submit"
                            :class="'button-submit ' + (user.fetchingData ? '' : 'active')"
                        >
                            <div v-if="user.fetchingData">
                                <loading/>
                            </div>
                            <div v-else>
                                Iniciar
                            </div>
                        </button>
                    </div>
                </form>
            </div>
            <div class="card-footer">
                
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Loading from '../../components/Loading.vue'

export default {
    data() {
        return {
            form: {
                email: "pacg1991@gmail.com",
                password: "123456",
            },
        };
    },
    components:{
        Loading,
    },
    computed: {
        // map `this.theme` to `this.$store.getters.theme`
        ...mapState([
            'user',
        ]),
    },
    methods:{
        ...mapActions([
            'login',
        ]),
        loginEvent() {
            this.login({
                password: this.form.password,
                user: this.form.email,
            });
        },
    },
};
</script>

<style scoped>

</style>