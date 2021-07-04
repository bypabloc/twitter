<template>
    <nav>
        <div>
            <router-link to="/">Twitter</router-link>
            <button type="button">
                <span ></span>
            </button>
            <div>
                <ul>
                    <template v-if="user.loggedIn">
                        <router-link to="Home"
                        >Home</router-link>
                        <li>
                            <a href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {{user.data.displayName}}
                            </a>
                            <ul>
                                <li>
                                    <router-link to="config"
                                    >Config</router-link>
                                </li>
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
                            </ul>
                        </li>
                    </template>
                    <template v-else>
                        <li>
                            <router-link to="login"
                            >Login</router-link>
                        </li>
                        <li>
                            <router-link to="register" 
                            >Register</router-link>
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