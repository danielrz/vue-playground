<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button class="btn btn-primary" v-customOn:click="onBtnClicked">click me!</button>
                <hr> 
                <div style="width:100px;height:100px;background-color:lightgreen;" v-customOn:mouseenter="onMouseEnter"  v-customOn:mouseleave="onMouseLeave">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            customOn: {
                bind(el, binding){
                    /*el.onclick = () => {
                        binding.value();
                    }*/
                    const type = binding.arg;
                    const fn = binding.value;
                    el.addEventListener(type, fn);
                }
            }
        },
        methods: {
            onBtnClicked(){
                alert('i was clicked');
            },
            onMouseEnter() {
                console.log('mouse enter');
            },
            onMouseLeave() {
                console.log('mouse leave');
            }
        }
    }
</script>

<style>
</style>
