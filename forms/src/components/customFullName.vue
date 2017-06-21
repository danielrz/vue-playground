<template>
    <div class="full-name-container">
        <div class="form-group">
            <label>First name:</label>
            <input type="text" class="form-control" :value="firstName" @input="onFullNameChanged(true, $event)">
        </div>
        <div class="form-group">
            <label>Last name:</label>
            <input type="text" class="form-control" :value="lastName" @input="onFullNameChanged(false, $event)">
        </div>
    </div>
</template>
<script>
export default {
    props: ['value'],
    methods: {
        onFullNameChanged(isFirstName, event){
            let fullName = '';
            if (isFirstName){
                fullName = event.target.value + ' ' + this.lastName;
            }
            else {
                fullName = this.firstName + ' ' + event.target.value;
            }
            this.value = fullName;
            this.$emit('input', fullName);
        }
    },
    computed: {
        firstName(){
            return this.value.split(" ")[0];
        },
        lastName(){
            return this.value.split(" ")[1];
        }
    }
}
</script>
