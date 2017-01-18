import Vue from 'vue'
import {CsstricksHeader} from '../src/index.js'

import './style.less'

new Vue({
    render(h){
        const lightOrange = '' // default top color
        const darkOrange = '' // default top color

        return <div class="content">
            <div class="header">
                <div class="title">
                    <CsstricksHeader class-name="svg-line top" line-color="white"></CsstricksHeader>
                    <h1>Vue Css-tricks Svg Animation</h1>
                    <p>made by <a href="">yuanhan</a></p>
                    <CsstricksHeader 
                        class-name="svg-line bottom" 
                        line-color="white"
                        top-color="#FFF1BA"
                        bottom-color="white"
                        flip
                    ></CsstricksHeader>
                </div>
            </div>
            <div class="body">
                <div class="article">
                    <h1>Usage</h1>
                    <p>
                        <pre>
                            {`
import CsstricksHeader from 'csstricks-header'

Vue.use(CsstrickHeader)

new Vue ({
    render (h) {
        return h ('csstricks-header', {
            props: {
                ...prop
            }
        })
    }
})
                            `}
                        </pre>
                    </p>
                </div>
                <div class="article">
                    <h1>Properties</h1>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>name</th>
                                    <th>default</th>
                                    <th>description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>line-color</td>
                                    <td><span>white</span></td>
                                    <td>Jagged line's color</td>
                                </tr>
                                <tr>
                                    <td>line-width</td>
                                    <td><span>4</span></td>
                                    <td>Jagged line's width</td>
                                </tr>
                                <tr>
                                    <td>anim</td>
                                    <td><span>1s</span></td>
                                    <td>Jagged line's transition time</td>
                                </tr>
                                <tr>
                                    <td>top-color</td>
                                    <td><div class="square top-color"></div><span>#FBDA61</span></td>
                                    <td>The starting-point color</td>
                                </tr>
                                <tr>
                                    <td>bottom-color</td>
                                    <td><div class="square bottom-color"></div><span>#F76B1C</span></td>
                                    <td>The ending-point color</td>
                                </tr>
                                <tr>
                                    <td>flip</td>
                                    <td><span>false</span></td>
                                    <td>Will to fill the second half</td>
                                </tr>
                                <tr>
                                    <td>width</td>
                                    <td><span>1000</span></td>
                                    <td>SVG viewport's width</td>
                                </tr>
                                <tr>
                                    <td>height</td>
                                    <td><span>200</span></td>
                                    <td>SVG viewport's height</td>
                                </tr>
                                <tr>
                                    <td>points</td>
                                    <td><span>5</span></td>
                                    <td>The count of jagged line's points</td>
                                </tr>
                                <tr>
                                    <td>className</td>
                                    <td><span>csstricks-header</span></td>
                                    <td>Classname applied to svg element</td>
                                </tr>
                                <tr>
                                    <td>interval</td>
                                    <td><span>3000</span></td>
                                    <td>Cycle in Interval(ms)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="article">
                    <h1>Examples</h1>
                    <div class="example first">
                       <CsstricksHeader
                            class-name="svg-line bottom"
                            line-color="#dee1e1"
                            line-width="6"
                            top-color="#f4f4f4"
                            bottom-color="#dee1e1"
                            flip
                        >    
                        </CsstricksHeader>
                        <div>
                            <pre>
                                {`
<CsstricksHeader
    class-name="svg-line bottom"
    line-color="#dee1e1"
    line-width="6"
    top-color="#f4f4f4"
    bottom-color="#dee1e1"
    flip
>    
</CsstricksHeader>
                                `}
                            </pre>
                        </div> 
                    </div>
                </div>
            </div>
            <div class="footer addon">
                <CsstricksHeader
                    class-name="svg-line bottom"
                    line-color="white"
                    top-color="#FBDA61"
                    bottom-color="rgb(250,203,111)"
                    flip
                >    
                </CsstricksHeader> 
            </div>
            <div class="footer copyright"> 
            </div>
        </div>
    }
}).$mount('#app')