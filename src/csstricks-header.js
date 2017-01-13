
export default {
    props: {
        lineColor: {
            type: String,
            default: 'white'
        },
        lineWidth: {
            type: String,
            default: '4'
        },
        anim: {
            type: String,
            default: '1s'
        },
        topColor: {
            type: String,
            default: '#FBDA61'
        },
        bottomColor: {
            type: String,
            default: '#F76B1C'
        },
        flip: {
            type: Boolean,
            default: false
        },
        width: {
            type: Number,
            default: 1000
        },
        height: {
            type: Number,
            default: 200
        },
        points: {
            type: Number,
            default: 5
        },
        className: {
            type: String,
            default: 'csstricks-header'
        }
    }, 
    data(){
        return {
            path: divideRectangle(this.width, this.height, this.points, this.flip)
        }
    },
    beforeCreate(){
       this.id = _id++ 
    },
    mounted(){
        setInterval(()=>{
            this.path = divideRectangle(this.width, this.height, this.points, this.flip)
        }, 3000)
    },
    render(h){
        return h('svg', {
            attrs: {
                class: this.className,
                viewBox: `0 0 ${this.width} ${this.height}`,
                preserveAspectRatio: 'none'
            }
        }, [
            h('defs', [
                h('linearGradient', {
                    attrs: {
                        id: `ch-gradient${this.id}`,
                        x2: '0%',
                        y2: '100%'
                    }
                }, [
                    h('stop', {
                        attrs: {
                            offset: '0%',
                            'stop-color': this.topColor
                        }
                    }),
                    h('stop', {
                        attrs: {
                            offset: '100%',
                            'stop-color': this.bottomColor
                        }
                    })
                ])
              ]),
            h('path', {
                style: {
                    'stroke': this.lineColor,
                    'stroke-width': this.lineWidth,
                    '-webkit-transition': this.anim,
                    'transition': this.anim
                },
                attrs: {
                    id: `csstricks${this.id}`,
                    fill: `url(#${'ch-gradient' + this.id})`,
                    d: this.path
                }
            })
        ])
    }
}

var _id = 0

function divideRectangle(width, height, divPoints, wantBottom){
    var midPoints = Array.apply(null, {length: divPoints}).reduce((ret, cur, index)=>{
        var x = width * (index + Math.random()) / divPoints | 0
        var y = height * (0.5 + (0.5 - Math.random()) * 0.5) | 0
        ret.push('L', x, ',', y, ' ')
        return ret
    }, [])

    if (!wantBottom) {
        return [].concat(
            ['M-4,-4 L-4,', height / 2 | 0, ' '],
            midPoints,
            [' L', width + 4, ',', height / 2 | 0, 'L', width + 4, ',-4 Z']
        ).join('')
    } else {
        return [].concat(
            ['M-4,', height + 4, ' L-4,', height / 2 | 0, ' '],
            midPoints,
            [' L', width + 4, ',', height / 2 | 0, ' L', width + 4, ',', height + 4, ' Z']
        ).join('')    
    }
}
