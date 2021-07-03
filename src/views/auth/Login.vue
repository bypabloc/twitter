<template>
    <div :class="'container theme--200'">
        <div :class="'row pt-5 justify-content-center theme--200'">
            <div class="col-auto">
                <main class="form-signin">
                    <form action="#" @submit.prevent="loginEvent">
                        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
                        <div class="divider"><span></span><span>Divider</span><span></span></div>

                        <div class="form-floating m-3">
                            <input type="email" v-model="form.email" class="form-control" id="floatingInput" placeholder="name@example.com">
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating m-3">
                            <input type="password" v-model="form.password" class="form-control" id="floatingPassword" placeholder="Password">
                            <label for="floatingPassword">Password</label>
                        </div>

                        <div class="d-flex justify-content-end">
                            <button class="m-3 btn btn-lg btn-primary" type="submit">Sign in</button>
                        </div>

                    </form>
                </main>
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
                email: "pacg1991@gmail.com",
                password: "123456",
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