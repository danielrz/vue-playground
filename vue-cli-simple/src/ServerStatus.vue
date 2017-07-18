<template>
    <div>
       <p>Server status: {{status}}</p>
       <hr>
       <button @click='changeStatus'>change status</button>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                status: "Critical"
            };
        },
        methods: {
            changeStatus(){
                this.status = 'Normal';
            }
        }
    }
</script>