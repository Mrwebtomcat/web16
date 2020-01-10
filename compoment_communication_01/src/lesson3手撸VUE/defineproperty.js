//响应式
const obj = {}

function defineActive(obj, key, val) {
    //传入对obj进行访问拦截
    Object.defineProperty(obj, key, {
        get() {
            console.log('get===>', key)
            return val

        },
        set(newval) {
            if (newval !== val) {
                console.log('set', key, newval)
                val = newval
                //更新函数
                updated()
            }
        }
    })

}

function updated() {
    app.innerText = obj.foo
}
defineActive(obj, 'foo', '')
setInterval(() => {
    obj.foo = new Date().toLocaleTimeString('it-IT')
}, 1000)