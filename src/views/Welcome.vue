<template>
    <div :class="'container theme-'+[theme]+'-200'">
        <div class="center">
            <GithubProfile width="width" user="bypabloc"></GithubProfile>

        </div>
    </div>
</template>

<script>

import GithubProfile from 'vue-github-profile'

export default {
    name: 'Welcome',
    components: {
        GithubProfile
    },
};
</script>