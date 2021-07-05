<template>
    <div :class="'container-home theme-'+[theme]+'-200'">
        <twitter-new/>
        <twitters-list/>
    </div>
</template>

<script>

import TwittersList from './TwittersList.vue'
import TwitterNew from './TwitterNew.vue'

export default {
    name: 'Home',
    data() {
        return {
            form: {
                text: "",
            },
        };
    },
    components:{
        TwittersList,
        TwitterNew,
    },
};
</script>
