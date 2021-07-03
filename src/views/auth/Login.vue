<template>
    <div :class="'container theme--200'">
        <div :class="'row pt-5 justify-content-center theme--200'">
            <div class="col-auto">
                <main class="form-signin">
                    <form action="#" @submit.prevent="submit">
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
        <div :class="'row pt-5 pb-5 justify-content-center'">
            <div class="col-auto">
                <main class="form-signin">
                    <form action="#" @submit.prevent="submit">
                        <div class="divider"><span></span><span>OR</span><span></span></div>

                        <div class="d-flex">
                            <button class="m-3 btn btn-lg btn-secondary" type="button" @click="google">Google</button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
        <div :class="'row pt-5 pb-5 justify-content-center'">
            <div class="col-auto">
                <main class="form-signin">
                    <form @submit.prevent="submitPhone">
                        <div>
                            <label for="phonenumber" style="font:family:system-ui;font-size: x-large;">Phone Number</label>
                        </div>
                        <div>
                            <vue-tel-input v-model="phoneNumber" id="phonenumber" maxlength="50" mode="international"></vue-tel-input>
                        </div>
                        <br>
                        <div id="recaptcha-container" style="background-color:#1b1a1a;width:300px;margin:auto;">
                        </div>
                        <br>
                        <div>
                            <button class="btn btn-primary" id="log-in" type="submit">Login</button>
                        </div>
                    </form>
                    <br><br>        

                    <br><br>
                    <div v-if="smsSent" style="background-color:#1b1a1a;width:300px;height:180px;margin:auto; border-radius:10px;">
                        <div style="background-color:black">
                        <label style="font:family:system-ui;font-size: x-large;">Enter Otp</label>
                        </div>
                        <br>
                        <div>
                            <input type="text" 
                            id="otpField"
                            style="text-align:center;"
                            pattern="[0-9]{6}"
                            maxlength="6"
                            v-model="otpnum"
                            placeholder="Enter OTP"
                            required>
                        </div>
                        <br>
                        <div>
                            <button class="btn btn-primary" @click="verifyCode" id="otp-btn">Confirm</button>
                        </div>
                    </div>
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
                password: "12345678",
            },
            phoneNumber:'+51918490148', 
            confirmationResult:null,
            otpnum:null,
            recaptchaVerifier:null,
            recaptchaWidgetId:null,
            confirmResult:null,
            smsSent:false,
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
            'loginWithGoogle',
        ]),
        google() {
            this.loginWithGoogle({
                displayName: 'Pablo Contreras',
                email: 'pacg1991@gmail.com',
            });
        },
    },
};
</script>

<style scoped>
.divider {                /* minor cosmetics */
    display: table; 
    font-size: 24px; 
    text-align: center; 
    width: 75%;             /* divider width */
    margin: 40px auto;          /* spacing above/below */
}
.divider span { display: table-cell; position: relative; }
.divider span:first-child, .divider span:last-child {
    width: 50%;
    top: 13px;              /* adjust vertical align */
    -moz-background-size: 100% 2px;   /* line width */
    background-size: 100% 2px;      /* line width */
    background-position: 0 0, 0 100%;
    background-repeat: no-repeat;
}
.divider span:first-child {       /* color changes in here */
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(transparent), to(#000));
    background-image: -webkit-linear-gradient(180deg, transparent, #000);
    background-image: -moz-linear-gradient(180deg, transparent, #000);
    background-image: -o-linear-gradient(180deg, transparent, #000);
    background-image: linear-gradient(90deg, transparent, #000);
}
.divider span:nth-child(2) {
    color: #000; padding: 0px 5px; width: auto; white-space: nowrap;
}
.divider span:last-child {        /* color changes in here */
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#000), to(transparent));
    background-image: -webkit-linear-gradient(180deg, #000, transparent);
    background-image: -moz-linear-gradient(180deg, #000, transparent);
    background-image: -o-linear-gradient(180deg, #000, transparent);
    background-image: linear-gradient(90deg, #000, transparent);
}
</style>