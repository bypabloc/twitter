<template>
    <div>
        <div v-if="twitters.fetchingData">
            Cargando...
        </div>
        <div v-else>
            <br/>
            <div v-for="(value, index) in twitters.data.data" :key="index">
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
