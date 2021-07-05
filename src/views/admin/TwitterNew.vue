<template>
    <div class="container-tweet">
        <div v-if="twitters.save.error">
            {{ twitters.save.error }}
        </div>
        <form action="#" @submit.prevent="saveTwitterEvent">
            <textarea 
                class="tweet-input" 
                v-model="form.text" 
                @keydown.enter.exact.prevent
                @keyup.exact="messageCounter"
                placeholder="¿Que esta pasando?"
            ></textarea>

            <div class="flex-space-between">
                <span> {{ max }}</span>

                <button 
                    type="submit"
                    :class="'theme-'+[theme]+'-500 ' + 'button-submit ' + (twitters.save.fetchingData ? '' : 'active')"
                >
                    <div v-if="twitters.save.fetchingData">
                        Cargando...
                    </div>
                    <div v-else>
                        Twittear
                    </div>
                </button>
            </div>

        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    name: 'Home',
    data() {
        return {
            form : {
                text: '',
            },
            message: '',
            max: 250,
            less: 250,
        };
    },
    computed: {
        ...mapState([
            'twitters',
        ]),
    },
    methods:{
        ...mapActions([
            'saveTwitter',
        ]),
        saveTwitterEvent() {
            this.saveTwitter({
                text: this.form.text,
            });
            this.form.text = '';
            this.less = 250;
        },
        messageCounter(){
            this.max = this.less - this.form.text.length;
        },
    },
};
</script>

<style scoped>
    .tweet-input {
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
        font-size: 18px;
        padding: 15px 12px;
        outline: none;
        width: 100%;
    }
</style>