<template>
    <div>
        <button class="btn btn-primary" @click="increment({by: 50, duration:500})">Increment</button>
        <button class="btn btn-primary" @click="decrement({by: 50, duration:500})">Decrement</button>
    </div>
</template>

<script>
//import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';

export default {
    methods: {
        /* increment() {
            //this.$emit('updated', 1);
            this.$store.state.counter++;
        },
        decrement() {
            //this.$emit('updated', -1);
            this.$store.state.counter--;
        } */
        /* ...mapMutations({
            increment: 'increment',
            decrement: 'decrement'
        }) */
        ...mapActions({
            increment: 'asyncIncrement',
            decrement: 'asyncDecrement'
        })
    }
}
</script>