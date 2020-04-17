import Vue from 'vue'

export const bus = new Vue({
    methods:{
        notify(eventName, eventParams){
            this.$emit(eventName, eventParams)
        }
    }
})

export function setupBus(){
    Object.defineProperties(Vue.prototype, {
        $bus: {
            get: function(){
                return bus
            }
        }
    })
}