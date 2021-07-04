<template>
    <div>
        <div>Register</div>
        <div>
            <div v-if="user?.register?.error">{{ user.register.error }}</div>
            <form action="#" @submit.prevent="submit">
                
                <div>
                    <label for="name">Name</label>

                    <div>
                        <input
                            type="name"
                            name="name"
                            value
                            required
                            autofocus
                            v-model="form.name"
                        />
                    </div>
                </div>

                <div>
                    <label for="nickname">Alias</label>

                    <div>
                        <input
                            type="name"
                            name="nickname"
                            value
                            required
                            v-model="form.nickname"
                        />
                    </div>
                </div>

                <div>
                    <label for="email">Email</label>

                    <div>
                        <input
                            type="email"
                            name="email"
                            value
                            required
                            v-model="form.email"
                        />
                    </div>
                </div>

                <div>
                    <label for="password">Password</label>

                    <div>
                    <input
                        type="password"
                        name="password"
                        required
                        v-model="form.password"
                    />
                    </div>
                </div>

                <div>
                    <div>
                        <button type="submit">Register</button>
                    </div>
                </div>
            </form>
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