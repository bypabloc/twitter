<template>
    <div>
        <form action="#" @submit.prevent="saveTwitterEvent">
            
            <div>
                <label for="text">Texto</label>

                <div>
                    <input
                        type="text"
                        name="text"
                        autofocus
                        v-model="form.text"
                    />
                </div>
            </div>

            <button type="submit">Guardar</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: 'Home',
    data() {
        return {
            form : {
                text: '',
            }
        };
    },
    methods:{
        ...mapActions([
            'saveTwitter',
        ]),
        saveTwitterEvent() {
            this.saveTwitter({
                text: this.form.text,
            });
        },
    },
};
</script>
