<template>
    <div>
        Cargando...
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    computed: {
        // map `this.user` to `this.$store.getters.user`
        ...mapGetters({
            user: "user",
            theme: "theme",
        })
    },
    methods: {
        ...mapActions([
            'fetchLogout',
        ]),
    }
};
</script>