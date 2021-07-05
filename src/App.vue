<template>
    <div :class="'full-height theme-'+[theme]+'-200'">
        <navbar/>
        <div class="">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
    components: {
        Navbar
    },
};
</script>