<template>
    <div>
        <div :class="'container theme-'+[theme]+'-400'">
            <div :class="'card theme-'+[theme]+'-200'">
                <div class="card-header">
                    
                </div>
                <div class="card-body ">
                    <div 
                        v-if="user?.register?.error"
                        class="center bar error"
                        v-html="user?.register?.error"
                    >
                    </div>
                    <form class="form" action="#" @submit.prevent="submit">
                        <h1 class="center">Registrate en Twitter</h1>

                        <div class="center">
                            <input
                                type="text"
                                name="name"
                                value
                                required
                                autofocus
                                placeholder="Nombres"
                                v-model="form.name"
                                :class="'theme-'+[theme]+'-200'"
                            />
                        </div>
                        <div class="center">
                            <input
                                type="text"
                                name="nickname"
                                value
                                required
                                placeholder="Alias"
                                v-model="form.nickname"
                                :class="'theme-'+[theme]+'-200'"
                            />
                        </div>
                        <div class="center">
                            <input
                                type="email"
                                name="email"
                                value
                                required
                                placeholder="Correo"
                                v-model="form.email"
                                :class="'theme-'+[theme]+'-200'"
                            />
                        </div>
                        <div class="center">
                            <input
                                type="password"
                                name="password"
                                value
                                required
                                placeholder="Contraseña"
                                v-model="form.password"
                                :class="'theme-'+[theme]+'-200'"
                            />
                        </div>
                        
                        <div class="center">
                            <button
                                type="submit"
                                :class="'theme-'+[theme]+'-500 ' + 'button-submit ' + (user?.register?.fetchingData ? '' : 'active')"
                            >
                                <div v-if="user?.register?.fetchingData">
                                    Cargando...
                                </div>
                                <div v-else>
                                    Registrarse
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { mapState, mapActions } from "vuex";

export default {
    data() {
        return {
            form: {
                name: "Pablo Contreras",
                email: "pacg1991@gmail.com",
                password: "12345678",
                nickname: 'bypabloc',
            },
        };
    },
    computed: {
        // map `this.theme` to `this.$store.getters.theme`
        ...mapState([
            'user',
        ]),
    },
    methods:{
        ...mapActions([
            'register',
        ]),
        submit() {
            this.register(
                {
                    email: this.form.email,
                    password: this.form.password,
                    name: this.form.name,
                    nickname: this.form.nickname,
                },
            );
        },
    },
};
</script>