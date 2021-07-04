<template>
    <nav>
        <div>
            <router-link to="/">Twitter</router-link>
            <div>
                <ul>
                    <template v-if="user.loggedIn">
                        <router-link to="Home">
                            Inicio
                        </router-link>
                        <li>
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
                        </li>
                    </template>
                    <template v-else>
                        <li>
                            <router-link to="login"
                            >Ingresar</router-link>
                        </li>
                        <li>
                            <router-link to="register" 
                            >Registrar</router-link>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    computed: {
        // map `this.user` to `this.$store.getters.user`
        ...mapGetters({
            user: "user",
            theme: "theme",
        })
    },
    methods: {
        ...mapActions([
            'fetchLogout',
        ]),
    }
};
</script>