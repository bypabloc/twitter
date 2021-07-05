<template>
    <div class="timelime">
        <div v-if="twitters.fetchingData">
            Cargando...
        </div>
        <div v-else>
            <br/>
            <div class="timelime-item" v-for="(value, index) in twitters.data.data" :key="index">
                <div 
                    class="timelime-item-title flex"
                >
                    <div
                        v-if="value?.created_by?.name"
                    >
                        {{ value.created_by.name }}
                        <span>@{{ value.created_by.nickname }}</span>
                    </div>
                    <div
                        v-else
                    >
                        Anónimo
                    </div>
                    <span>- {{ moment(value.created_at).fromNow(true) }}</span>
                </div>
                <div
                    class="timelime-item-content"
                >
                    <div
                        v-if="value?.text"
                    >
                        {{ value.text }}
                    </div>
                    <div
                        v-else
                    >
                        Anónimo
                    </div>
                </div>
                <div
                    class="timelime-item-footer"
                >
                    <i class="far fa-comment"></i>
                    <i class="fas fa-retweet"></i>
                    <i class="far fa-heart"></i>
                    <i class="fas fa-share-alt"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import moment from 'moment';
moment.locale('es');

export default {
    name: 'Home',
    data() {
        return {
        };
    },
    computed: {
        ...mapState([
            'twitters',
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
        this.fetchTwitters();
        this.moment = moment;
    },
};
</script>
