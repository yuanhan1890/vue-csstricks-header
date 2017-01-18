export CsstricksHeader from './csstricks-header.js'

const Package = {
    install(_Vue){
        _Vue.component('csstricks-header', CsstricksHeader)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Package)
}

export default Package