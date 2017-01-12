import Vue from 'vue'
import {CsstricksHeader} from '../src/index.js'

import './style.less'

new Vue({
    render(h){
        const lightOrange = '' // default top color
        const darkOrange = '' // default top color

        return <div class="content">
            <div class="header">
                <CsstricksHeader classname="svg-line top" linecolor="white"></CsstricksHeader>
                <CsstricksHeader 
                    classname="svg-line bottom" 
                    linecolor="white"
                    topcolor="#FFF1BA"
                    bottomcolor="white"
                    flip
                ></CsstricksHeader>
            </div>
            <div class="body">
                <div style="height:200px;"></div>
            </div>
            <div class="footer newsletter">
                <CsstricksHeader 
                    classname="svg-line top" 
                    linecolor="white"
                    topcolor="#eee"
                    bottomcolor="#eee"
                ></CsstricksHeader>
                <CsstricksHeader
                    classname="svg-line bottom"
                    linecolor="white"
                    topcolor="#FBDA61"
                    bottomcolor="rgb(250,203,111)"
                    flip
                >    
                </CsstricksHeader>
            </div>
            <div class="footer copyright">
                
            </div>
        </div>
    }
}).$mount('#app')