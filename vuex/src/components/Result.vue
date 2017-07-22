<template>
    <div>
        <p>Counter is: {{ counter }}</p>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import types from '../store/types';

export default {
    //props: ['counter']
    computed: {
        /* counter() {
            return this.$store.getters.doubleCounter;
        } */
        ...mapGetters({//use of the spread operator in order to add custom methods to our computed object. we need to run the following command so that the spread comment is recognized: npm install --save-dev babel-preset-stage-2
        //then add ["stage-2"] to the .babelrc file in the presets key and restart the dev env.
            doubleCounter: types.DOUBLE_COUNTER
        })
    }
}
</script>