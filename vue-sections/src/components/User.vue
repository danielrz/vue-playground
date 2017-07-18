<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click='changeName'>Change my name</button>
        <p>name: {{name}}</p>
        <p>age: {{age}}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :myName='name' :userAge='age' :resetFn='resetName' @onNameReset='name = $event'></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge='age' @onAgeReset='age = $event'></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        data: function(){
            return {
                name: 'Daniel',
                age: 40
            };
        },
        methods: {
            changeName() {
                this.name = 'Eytan';
            },
            resetName() {
                this.name = 'Daniel';
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
