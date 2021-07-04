<template>
    <div>
        <main>
            <div v-if="user?.error">{{ user.error }}</div>
            <form action="#" @submit.prevent="loginEvent">
                <h1>Por favor, inicia sesión</h1>

                <div>
                    <label>Usuario</label>
                    <input type="email" v-model="form.email" placeholder="name@example.com">
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" v-model="form.password" placeholder="Password">
                </div>

                <div>
                    <button
                        type="submit"
                        :disabled="user.fetchingData"
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
        </main>
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