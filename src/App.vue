<template>
    <div :class="'full-height theme-'+[theme]+'-200'">
        <navbar/>
        <main>
            <router-view></router-view>
        </main>
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