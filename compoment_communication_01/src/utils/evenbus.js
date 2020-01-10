import Vue from 'vue'
/* eslint-disable no-unused-vars */
//任意两个组件之前传值常用的事件总线或vuex的方式
class Bus {
    constructor() {
        this.callback = {}
    }

    $on(name, fn) {
        this.callback[name] = this.callback[name] || []
        this.callback[name].push(fn)
    }

    $emit(name, args) {
        if (this.callback[name]) {
            this.callback[name].forEach(cb => cb(args));
        }
    }

}

Vue.prototype.Bus = new Bus()

//child
this.$on('handule',()=>{})
//child2
this.$emit('handule')