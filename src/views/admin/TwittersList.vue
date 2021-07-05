<template>
    <div class="timelime">
        <div v-if="twitters.fetchingData">
            Cargando...
        </div>
        <div v-else>
            <br/>
            <div class="timelime-item" v-for="(value, index) in twitters.data.data" :key="index">
                <div 
                    class="timelime-item-title"
                >
                    <div
                        v-if="value?.created_by?.name"
                    >
                        {{ value.created_by.name }}
                    </div>
                    <div
                        v-else
                    >
                        Anonimo
                    </div>
                </div>
                <div>
                    {{ value.text }}
                </div>
                <div>
                    {{ value.created_at }}
                </div>
                <div>
                    {{ value.created_by }}
                </div>
                <br/>
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
        this.fetchTwitters()
    },
};
</script>
