<template>
    <nav :class="'topnav theme-'+[theme]+'-600'">
        <div class="logo">
            <router-link to="/">Twitter</router-link>
        </div>
        <div class="links">
            <template v-if="user.loggedIn">
                <router-link to="home">
                    Inicio
                </router-link>
                <a 
                    href="#" 
                    v-if="user.fetchingData"
                >
                    Cargando...
                </a>
                <a 
                    href="#" 
                    @click.prevent="fetchLogout"
                    v-else
                >
                    Salir
                </a>
            </template>
            <template v-else>
                <router-link to="login">
                    Ingresar
                </router-link>
                <router-link to="register">
                    Registrar
                </router-link>
            </template>
        </div>
    </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    computed: {
        ...mapGetters({
            user: "user",
        })
    },
    methods: {
        ...mapActions([
            'fetchLogout',
        ]),
    }
};
</script>