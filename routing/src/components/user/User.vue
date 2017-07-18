<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <!-- <p>Loaded id (with props): {{id}}</p> -->
        <button class="btn btn-primary" @click="navigateToHome">go to home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    /* props: ['id'],
    data() {
        return {
            id: this.$route.params.id
        }
    }, */
    /* watch: {
        '$route'(to, from){
            this.id = to.params.id;
        }
    }, */
    methods: {
        navigateToHome() {
            this.$router.push({
                path: '/'
            });
        }
    }
}
</script>
