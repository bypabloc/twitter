<template>
    <div class="container-fluid vh-100 d-flex flex-column">
        <navbar/>
        <div class="row flex-grow-1">
            <main :class="'col p-4 flex-grow-1 content theme--200' ">
                <router-view></router-view>
            </main>
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

<style lang="scss" scoped>
    .main-screen {
        min-height: 100vh;
    }
</style>