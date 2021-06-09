import React, {useContext, useState} from "react";
import {Button, Popover} from "antd";
import {ReactSortable} from "react-sortablejs";


function Sortable() {
    // const token = getCookie("token");
    // const {dispatch, slides, isPlaying, currentSlide, thumbnails, audio, id, aspectRatio, updateStatus} = useContext(VideoContext);
    // const {canvas, isCapturing, dispatch: captureDispatch} = useContext(CaptureContext);
    const [currentSlide,setCurrentSlide] = useState("")
    const [slidess,setSlidess] = useState(JSON.parse('[{"textBoxes":[{"id":"ek_ufcSpUP","text":"Sign up for free weekly recipes and get a copy of my free recipe ebook.","backgroundColor":"#00000045","fill":"white","fontSize":24,"lineHeight":1,"padding":20,"type":"textbox","version":"4.4.0","originX":"left","originY":"top","left":172.09,"top":157.14,"width":374,"height":54.24,"stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeUniform":false,"strokeMiterLimit":4,"scaleX":0.93,"scaleY":0.93,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"normal","underline":false,"overline":false,"linethrough":false,"textAlign":"left","textBackgroundColor":"","charSpacing":0,"path":null,"minWidth":20,"splitByGrapheme":false,"styles":{},"animationType":10}],"bgColor":"#000000","id":"60b780e214289b1d7ca019e0","bgImage":"","bgVideo":"https://player.vimeo.com/external/176282263.hd.mp4?s=5ae9c441e89ee36646286c22fddc6c8781946c7d&profile_id=169","bgVideoSmall":"https://player.vimeo.com/external/176282263.sd.mp4?s=eae20877d2f66cd5b7481c8e9ac2b4b10fd92bef&profile_id=165","bgProps":{},"duration":6000,"chosen":false,"selected":false},{"textBoxes":[{"id":"HvRRsi6E5Q","text":"more about Nisha So many low-effort, high-impact ways to level up your cooking! watch now and how to easily get healthy yet delicious vegan recipes on the table any day of the week! With 90 vibrant and flavorful recipes, from satisfying sides to hearty comfort foods and indulgent desserts.","backgroundColor":"#00000045","fill":"white","fontSize":24,"lineHeight":1,"padding":20,"type":"textbox","version":"4.4.0","originX":"left","originY":"top","left":162,"top":78.29,"width":374,"height":216.96,"stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeUniform":false,"strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"normal","underline":false,"overline":false,"linethrough":false,"textAlign":"left","textBackgroundColor":"","charSpacing":0,"path":null,"minWidth":20,"splitByGrapheme":false,"styles":{}}],"bgColor":"#000000","id":"60b780e214289b1d7ca019e1","bgImage":null,"bgVideo":"https://player.vimeo.com/external/207598562.hd.mp4?s=0a344cbe769a6b477e411ee4884c0c0fc8c59594&profile_id=119","bgVideoSmall":"https://player.vimeo.com/external/207598562.sd.mp4?s=1fb75f87eeacb8a5f7a190356f2f1807e5d2f3f0&profile_id=165","bgProps":{},"duration":6000,"chosen":false,"selected":false},{"textBoxes":[{"id":"pfw1EeCjlG","text":"get the book Subscribe and we’ll send you new recipes and videos every week.","backgroundColor":"#00000045","fill":"white","fontSize":24,"lineHeight":1,"padding":20,"type":"textbox","version":"4.4.0","originX":"left","originY":"top","left":169,"top":133.89,"width":374,"height":81.36,"stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeUniform":false,"strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"normal","underline":false,"overline":false,"linethrough":false,"textAlign":"left","textBackgroundColor":"","charSpacing":0,"path":null,"minWidth":20,"splitByGrapheme":false,"styles":{}}],"bgColor":"#000000","id":"60b780e214289b1d7ca019e2","bgImage":null,"bgVideo":"https://player.vimeo.com/external/452144075.hd.mp4?s=2b028c4732a6e17221db842ac2f075c9967f73ca&profile_id=169","bgVideoSmall":"https://player.vimeo.com/external/452144075.hd.mp4?s=2b028c4732a6e17221db842ac2f075c9967f73ca&profile_id=174","bgProps":{},"duration":5000,"chosen":false,"selected":false}]'))
    console.log("slidess:",slidess)
    const handleSlideAdd = () => {
        // dispatch({type: ActionTypes.ADD_SLIDE, payload: newSlide()});
    }

    // const handlePlayStatus = () => {
    //     dispatch({type: ActionTypes.SET_PLAY_STATUS, payload: !isPlaying})

    // }

    // const handleSlideChange = (factor) => {
    //     const currentIndex = slides.findIndex(slide => slide.id === currentSlide);
    //     dispatch({
    //         type: ActionTypes.SET_CURRENT_SLIDE,
    //         payload: slides[currentIndex + factor]?.id ?? currentSlide,
    //     });
    // }

    // const handleChange = data => {
    //     dispatch({
    //         type: ActionTypes.SET_ALL_SLIDES,
    //         payload: data,
    //     });
    // }

    // const deleteSlide = slide => {
    //     dispatch({type: ActionTypes.DELETE_SLIDE, payload: slide.id})
    // }

    // const duplicateSlide = slide => {
    //     dispatch({type: ActionTypes.DUPLICATE_SLIDE, payload: slide.id})
    // }

    const PopOverActions = slide => (
        <div>
            <Button primary  style={{marginRight: "5px", color:"#1b4087", borderColor: "#1b4087"}}>Duplicate</Button>
            <Button danger  disabled={slidess.length <= 1}>Delete</Button>
        </div>
    );

    // const setCurrentSlide = slide => {
    //     dispatch({type: ActionTypes.SET_CURRENT_SLIDE, payload: slide.id});
    // }

    // const getTotalDuration = () => {
    //     const ts = slides.reduce((prev, slide) => slide.duration + prev, 0);
    //     let time  = ms.to(m,s)(ts);
    //     return `${time[0] > 0 ? time[0] + " min : " : "" }${time[1]} sec`
    // }

    // const getThumb = id => {
    //     return thumbnails.find(thumb => thumb.id === id)?.thumbnail;
    // }

    // const handleDownload = () => {
    //     if (isCapturing) {
    //         alert("Already Generating...")
    //         return
    //     }

    //     captureDispatch({
    //         type: ActionTypes.SET_ENTIRE_STATE,
    //         payload: {
    //             isCapturing: true,
    //         }
    //     });
        
    //     CaptureIt({
    //         slides, id, audio, aspectRatio, videoDispatch: dispatch, canvas, dispatch: captureDispatch, token
    //     })
    //     Router.push("/user/videos");
    // }

    return (
        <div className="sortableList">
            <div className="sortableList__up">
                <div className="addSlideBtn" ><i className="fas fa-plus-circle"/> Add Scene
                </div>
                {/* <div className="playControls">
                    <img src="/icons/previous.svg" alt="" onClick={() => handleSlideChange(-1)}/>
                    <img src="/icons/play.svg" alt="" onClick={handlePlayStatus}/>
                    <img src="/icons/next.svg" alt="" onClick={() => handleSlideChange(1)}/>
                </div> */}
                <div className="sortable__right">
                    {/* <div className="scene__duration">
                        <label>Duration : </label>
                        <span>{getTotalDuration()}</span>
                    </div> */}
                    {/* <div className="generation">
                        <button title="Generate Full Video"  disabled={updateStatus===2 ? false : true}>
                            {updateStatus!==2 ? "Saving Scene...":"Generate Video"}
                        </button>
                    </div> */}
                </div>
            </div>
            <div className="sortableList__down">
                <div className="sortabelSceneList">
                    <ReactSortable style={{display: "flex", alignItems:"center"}} list={slidess} >
                        {slidess.map((slide) => (
                            <div key={slide.id}>
                                <Popover content={PopOverActions(slide)} title="Actions">
                                    <div className={`sortableItem horizontal ${slide.id === currentSlide ? `active` : ""}`}
                                         >
                                        <img src={"https://cdn.quantavid.com/add-scene-black.jpg"} alt=""/>
                                    </div>
                                </Popover>
                            </div>
                        ))}
                    </ReactSortable>
                </div>
            </div>
        </div>
    )
}

export default Sortable