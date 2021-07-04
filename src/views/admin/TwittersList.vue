<template>
    <div>
        <div>
            <div v-if="twitters.fetchingData">
                Cargando...
            </div>
            <div v-else>
                <div v-for="(value, index) in twitters.data.data" :key="index">
                    <div>
                        {{ value.text }}
                    </div>
                    <div>
                        {{ value.created_by }}
                    </div>
                    <br/>
                </div>
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
        // map `this.theme` to `this.$store.getters.theme`
        ...mapState([
            'twitters',
        ]),
    },
    /*
    watch: {
        ['twitters.data'] (newTwitters) {
            if(newTwitters){
                console.log('newTwitters',newTwitters)
                
                const twitters = [...Object.values(this.twitters.data.data)];

                const proudsReduce = twitters.reduce((old,curr) => {
                    return [...old, {
                        id: curr.id,
                        icon: curr.icon,
                        title: curr.title,
                        description: curr.description,
                    }];
                },[]);

                this.data = proudsReduce;
            }
        },
    },
    */
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
