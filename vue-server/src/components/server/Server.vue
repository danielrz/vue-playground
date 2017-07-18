<template>
    <li class="list-group-item" style='cursor:pointer' @click='onServerItemClick'>
        Server #{{ server.id }}
    </li>
</template>

<script>
import {serverBus} from '../../main';

export default {
    props: ['server'],
    methods: {
       onServerItemClick() {
            serverBus.serverSelected(this.server);
       }
    }
}
</script>

<style scoped>
    div {
        border: 1px solid blue;
    }
</style>
