import './App.css';
import AspectRatio from 'react-aspect-ratio';
import Moveable from "react-moveable";
import {useEffect, useState} from "react";
import LeftPane from "./components/LeftPane";
import RightPane from "./components/RightPane";
import SortableList from "./components/SortableList";
import anime from "animejs";



const DEFAULT_OPTIONS = [
    {
        name: 'Brightness',
        property: 'brightness',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
    },
    {
        name: 'Contrast',
        property: 'contrast',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
    },
    {
        name: 'Saturation',
        property: 'saturate',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
    },
    {
        name: 'Grayscale',
        property: 'grayscale',
        value: 0,
        range: {
            min: 0,
            max: 100
        },
        unit: '%'
    },
    {
        name: 'Sepia',
        property: 'sepia',
        value: 0,
        range: {
            min: 0,
            max: 100
        },
        unit: '%'
    },
    {
        name: 'Hue Rotate',
        property: 'hue-rotate',
        value: 0,
        range: {
            min: 0,
            max: 360
        },
        unit: 'deg'
    },
    {
        name: 'Blur',
        property: 'blur',
        value: 0,
        range: {
            min: 0,
            max: 20
        },
        unit: 'px'
    }
]

function App() {
    const [box, setBox] = useState(null);
    const [bg, setBg] = useState(null);
    const [draggable, setDraggable] = useState(true);
    const [s, sS] = useState(false);
    const [b, sB] = useState(false);
    const [animClass,setAnimClass] = useState("none")
    const [animName ,setAnimName] = useState("NoAnimation")
   
    const handleClick = e => {
        if (document.getElementById('oooo')?.contains(e.target)) {
            return;
        }
        sS(false);
        setDraggable(true)
    }
    const [options, setOptions] = useState(DEFAULT_OPTIONS)

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        // window.onresize = () => {
        //     console.log('resize')
        //     const el = document.getElementById('op');
        //     const min = Math.min(el.clientHeight, el.clientWidth) + "px";
        //     document.getElementById('outt').style.width = min;
        //     document.getElementById('outt').style.height = min;
        // }
        return () => {
            document.removeEventListener("mousedown", handleClick);
            window.onresize = null;
        };
    }, [handleClick]);

    const onDrag = ({target, left, top}) => {
        const {clientWidth, clientHeight} = document.getElementById('outt')
        target.style.left = `${left / clientWidth * 100}%`;
        target.style.top = `${top / clientHeight * 100}%`;
        // target.style.left = `${left}px`;
        // target.style.top = `${top}px`;
    }
    const onResize = ({target, width, height, delta}) => {
        const {clientWidth, clientHeight} = document.getElementById('outt')
        delta[0] && (target.style.width = `${width / clientWidth * 100}%`);
        delta[1] && (target.style.height = `${height / clientHeight * 100}%`);
    }
    const onScaleRotate = ({target, transform}) => {
        target.style.transform = transform;
    }

    function getImageStyle() {
        const filters = options.map(option => {
            return `${option.property}(${option.value}${option.unit})`
        })

        return {filter: filters.join(' ')}
    }

    const anim = () => {
        if(animName === "test1" && animClass === "ml2"){

            var textWrapper = document.querySelector('.ml2');
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

            anime.timeline()
            .add({
                targets: '.ml2 .letter',
                scale: [4,1],
                opacity: [0,1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 950,
                delay: (el, i) => 70*i
            })
       
            
        }
        if(animName === "test2" && animClass === "ml7"){
            let textWrapper = document.querySelector('.ml7 .letters');
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

            anime.timeline()
            .add({
                targets: '.ml7 .letter',
                translateY: ["1.1em", 0],
                translateX: ["0.55em", 0],
                translateZ: 0,
                rotateZ: [180, 0],
                duration: 750,
                easing: "easeOutExpo",
                delay: (el, i) => 50 * i
            })
          
        }
        if(animName === "test3" && animClass === "ml12"){
            var textWrapper = document.querySelector('.ml12');
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        
            anime.timeline()
            .add({
                targets: '.ml12 .letter',
                translateX: [40,0],
                translateZ: 0,
                opacity: [0,1],
                easing: "easeOutExpo",
                duration: 1200,
                delay: (el, i) => 500 + 30 * i
            }) 
           
        }
        if(animName === "test4" && animClass === "ml15"){
            anime.timeline()
            .add({
                targets: '.ml15 .word',
                scale: [14,1],
                opacity: [0,1],
                easing: "easeOutCirc",
                duration: 800,
                delay: (el, i) => 800 * i
            })

        }
        if(animName === "test5" && animClass === "ml16"){
            let textWrapper = document.querySelector('.ml16');
            anime.timeline()
            .add({
                targets: '.ml16',
                translateX: [-textWrapper.clientWidth,0],
                easing: "easeOutExpo",
                duration: 1400,
            })
        }
        if(animName === "test6" && animClass === "ml11"){
            var textWrapper = document.querySelector('.ml11 .letters');
            textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
        
            anime.timeline({
                complete: function () {
                    let textWrapper = document.querySelector('.ml11 .letters');
                    textWrapper.innerHTML = textWrapper.innerText;
                }
            })
                .add({
                    targets: '.ml11 .line',
                    scaleY: [0, 1],
                    opacity: [0.5, 1],
                    easing: "easeOutExpo",
                    duration: 700
                })
                .add({
                    targets: '.ml11 .line',
                    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
                    easing: "easeOutExpo",
                    duration: 700,
                    delay: 100
                }).add({
                targets: '.ml11 .letter',
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 600,
                offset: '-=775',
                delay: (el, i) => 34 * (i + 1)
            });
        }
        if(animName === "test7" && animClass === "ml3" ){
            var textWrapper = document.querySelector('.ml3');
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                anime.timeline()
                .add({
                    targets: '.ml3 .letter',
                    opacity: [0,1],
                    easing: "easeInOutQuad",
                    duration: 2250,
                    delay: (el, i) => 150 * (i+1)
                })
        }
        if(animName === "test8" && animClass === "ml6" ){
            var textWrapper = document.querySelector('.ml6 .letters');
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
            
            anime.timeline()
              .add({
                targets: '.ml6 .letter',
                translateY: ["1.1em", 0],
                translateZ: 0,
                duration: 750,
                delay: (el, i) => 50 * i
              })
        }
        if(animName === "test9" && animClass === "ml9" ){
            var textWrapper = document.querySelector('.ml9 .letters');
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

            anime.timeline()
            .add({
                targets: '.ml9 .letter',
                scale: [0, 1],
                duration: 1500,
                elasticity: 600,
                delay: (el, i) => 45 * (i+1)
            }) 
        }
        if(animName === "test10" && animClass === "ml10" ){
            var textWrapper = document.querySelector('.ml10 .letters');
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
            
            anime.timeline()
              .add({
                targets: '.ml10 .letter',
                rotateY: [-90, 0],
                duration: 1300,
                delay: (el, i) => 45 * i
              })
        }
        if(animName === "test11" && animClass === "ml13" ){
            var textWrapper = document.querySelector('.ml13');
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
            
            anime.timeline()
              .add({
                targets: '.ml13 .letter',
                translateY: [100,0],
                translateZ: 0,
                opacity: [0,1],
                easing: "easeOutExpo",
                duration: 1400,
                delay: (el, i) => 300 + 30 * i
              })
        }

    }

    return (
        <div className='h-screen'>
            <div className='bg-red-200 nav'>Top</div>
            <div className='flex main'>
                <LeftPane options={options} setOptions={setOptions}/>
                <div className='flex-grow grid place-items-center' id='op'>
                    <AspectRatio ratio="16/9" className='ar overflow-hidden relative bg-yellow-200' id='outt'>
                        <div className="stage w-full h-full">
                            <div className="absolute bg-green-200 top-0 h-full w-full" ref={b => setBg(b)}
                                 onClick={() => sB(true)}>
                                {/*<video src="/vid.mp4#t=5,15" alt="imgg" controls className='h-full w-full object-cover'/>*/}
                                <img src="/img.jpeg" alt="imgg" className='h-full w-full object-cover' style={getImageStyle()}/>
                            </div>
                            <Moveable
                                target={bg}
                                container={document.querySelector(".stage")}
                                keepRatio={true}
                                draggable={true}
                                scalable={true}
                                resizable={true}
                                onDrag={onDrag}
                                onResize={onResize}
                                onScale={onScaleRotate}
                            />
                            <div id="oooo">
                                <div className="absolute top-1/4 left-1/4 overflow-hidden" ref={b => setBox(b)}
                                     onClick={() => sS(true)}>
                                    <div onDoubleClick={e => {
                                        setDraggable(false)
                                        sS(false)
                                        setTimeout(function () {
                                            e.target.focus()
                                        }, 0);
                                    }} contentEditable={draggable ? "false" : "true"}
                                         className='w-full h-full overflow-hidden ml16 ml11' id='hihi'
                                         style={{color: "white", fontSize: '30px'}}>
                                        {animClass === "ml2"?
                                        <h1 className="ml2" >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>: animClass === "ml7"?
                                       <h1 className="ml7">
                                            <span className="text-wrapper">
                                                <span className="letters">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
                                            </span>
                                        </h1>: animClass === "ml15" ? 
                                          <h1 className="ml15">
                                            <span className="word">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </span>
                                           </h1> : animClass === "ml15" ?  <h1 className="ml16">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>:
                                            animClass === "ml11" ?  <h1 className="ml11">
                                            <span className="text-wrapper">
                                              <span className="line line1"></span>
                                              <span className="letters">Lorem ipsum dolor sit amet consectetur adipisicing elit </span>
                                            </span>
                                          </h1> : animClass === "ml3" ? <h1 className="ml3">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1> :
                                          animClass === "ml6" ? 
                                          <h1 className="ml6">
                                          <span className="text-wrapper">
                                            <span className="letters">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
                                          </span>
                                        </h1> : animClass === "ml9" ?
                                        <h1 className="ml9">
                                            <span className="text-wrapper">
                                                <span className="letters">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
                                            </span>
                                            </h1> : animClass === "ml10" ? 
                                            <h1 className="ml10">
                                                <span class="text-wrapper">
                                                    <span class="letters">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
                                                </span>
                                            </h1> : animClass === "ml13" ? 
                                            <h1 className="ml13">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </h1> :
                                        <h1 className="ml12">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </h1>}
                                    </div>
                                </div>
                                <Moveable
                                    target={s ? box : null}
                                    container={document.querySelector(".stage")}
                                    draggable={draggable}
                                    scalable={true}
                                    resizable={true}
                                    onDrag={onDrag}
                                    onResize={onResize}
                                    onScale={onScaleRotate}
                                />
                            </div>
                            <button onClick={() => console.log(document.getElementById('hihi').innerHTML)}>Click
                            </button>
                        </div>
                    </AspectRatio>
                    <button style={{paddingTop:"30px"}} onClick={()=>anim()}>Animate</button>
                </div>
                <RightPane setAnimName = {setAnimName} setAnimClass={setAnimClass}/>
                
            </div>
            <div className='bg-red-200 foot'><SortableList/></div>
        </div>
    );
}

export default App;
