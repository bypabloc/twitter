<template>
    <div class="container">
        <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Register</div>
                <div class="card-body">
                    <div v-if="user?.register?.error" class="alert alert-danger">{{ user.register.error }}</div>
                    <form action="#" @submit.prevent="submit">
                        
                        <div class="mb-3 row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                            <div class="col-md-6">
                                <input
                                    id="name"
                                    type="name"
                                    class="form-control"
                                    name="name"
                                    value
                                    required
                                    autofocus
                                    v-model="form.name"
                                />
                            </div>
                        </div>

                        <div class="mb-3 row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                            <div class="col-md-6">
                                <input
                                    id="email"
                                    type="email"
                                    class="form-control"
                                    name="email"
                                    value
                                    required
                                    autofocus
                                    v-model="form.email"
                                />
                            </div>
                        </div>

                        <div class="mb-3 row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                            <div class="col-md-6">
                            <input
                                id="password"
                                type="password"
                                class="form-control"
                                name="password"
                                required
                                v-model="form.password"
                            />
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                            <button type="submit" class="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
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
                },
            );
        },
    },
};
</script>