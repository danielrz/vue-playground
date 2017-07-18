<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User age: {{userAge}}</p>
        <button @click='editAge'>Edit age</button>
    </div>
</template>

<script>
    import {eventBus} from '../main';
    export default {
        props: ['userAge'],
        methods: {
           editAge() {
                this.userAge = 45;
                //above is to emit the event to the parent only
                //this.$emit('onAgeReset', this.userAge);

                //eventBus.$emit('onAgeReset', this.userAge);
                eventBus.changeAge(this.userAge);
           }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
