function ScrollBarAndThumb({height="200px"}){
    return(
        <>
            <div id="scroller" style={{height:height,width:"0.5px",border:"1px dashed black"}}    >
                <div style={{height:"5px",width:"5px",borderRadius:"1em",position:"sticky",top:0}}></div>
            </div>    
        </>
    );

}
export default ScrollBarAndThumb