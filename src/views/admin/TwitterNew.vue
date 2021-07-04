<template>
    <div>
        <div v-if="twitters.save.error">
            {{ twitters.save.error }}
        </div>
        <form action="#" @submit.prevent="saveTwitterEvent">
            
            <div>
                <label for="text">Contenido</label>

                <div>
                    <textarea
                        name="text"
                        autofocus
                        v-model="form.text" 
                    >
                    </textarea>
                </div>
            </div>
            <button 
                type="submit"
                :disabled="twitters.save.fetchingData"
            >
                <div v-if="twitters.save.fetchingData">
                    Cargando...
                </div>
                <div v-else>
                    Twitear
                </div>
            </button>
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
            }
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
        },
    },
};
</script>
