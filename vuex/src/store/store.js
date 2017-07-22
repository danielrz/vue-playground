import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    /* getters: {
        value: state => {
            return state.value;
        }
    }, */
    /* mutations: {//mutations methods must always be syncheroneous
        updateValue: (state, payload) => {
            state.value = payload;
        }
    }, */
    /* actions: {
        updateValue: ({commit}, payload) => {
            commit('updateValue', payload);
        }
    }, */
    getters,
    mutations,
    actions,
    modules: {
        counter //use namespaced:true for auto namespacing. see: https://github.com/vuejs/vuex/releases/tag/v2.1.0
    }
});