export const lengthCalculatorMixin = {
    computed: {
            calculateLength(){
                return this.secondText + ' (' + this.secondText.length + ')';
            }
        }
}