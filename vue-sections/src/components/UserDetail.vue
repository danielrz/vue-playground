<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{reverseName()}}</p>
        <p>User age: {{userAge}}</p>
        <button @click="resetName">Reset the name (with custom method)</button>
        <hr>
        <p>
        <button @click="resetFn()">Reset the name (with parent callback)</button>
        </p>
    </div>
</template>

<script>
    import {eventBus} from '../main';
    export default {
        //props: ['myName'],
        props: {
            myName: {
                type: String,
                default: 'Dan'/*,
                required: true*/

            },
            userAge: Number,
            resetFn: Function
        },
        methods: {
            reverseName() {
                return this.myName.split("").reverse().join("");
            },
            resetName() {
                this.myName = 'Daniel';
                this.$emit('onNameReset', this.myName);
            }
        },
        created() {
            eventBus.$on('onAgeReset', (age) => {
                this.userAge = age;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
