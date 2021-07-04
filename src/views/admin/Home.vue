<template>
    <div>
        <div class="container-fluid ">
            <div :class="'row theme-bg--600'">
                <main class="col-12">
                    <div class="row p-3">
                        <div :class="'col-12 col-sm-12 col-md-5 col-lg-4 col-xl-3 col-xxl-3 theme-bg--800 p-2'">
                            <div class="col-12">

                            </div>
                        </div>
                        <div :class="'col-12 col-sm-12 col-md-7 col-lg-8 col-xl-9 col-xxl-9 theme--100 p-2'">
                        </div>
                        List twits
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    name: 'Home',
    data() {
        return {
            form: {
                text: "",
            },
        };
    },
    computed: {
        // map `this.theme` to `this.$store.getters.theme`
        ...mapState([
            'twitter',
        ]),
    },
    methods:{
        ...mapActions([
            'fetchTwitters',
            'saveTwitter',
        ]),
        saveTwitterEvent() {
            this.saveTwitter({
                text: this.form.text,
            });
        },
    },
    created(){
        this.fetchTwitters()
    },
};
</script>
