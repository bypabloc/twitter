<template>
    <div>
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

<style lang="scss" scoped>
    .main-screen {
        min-height: 100vh;
    }
</style>