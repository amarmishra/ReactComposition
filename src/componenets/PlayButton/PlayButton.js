import React, { useState } from 'react'


const PlayButton = ({onPlay,onPause,children}) => {
const [playing,setPlaying]=useState(false)
//one button toggles two b/w functionalityon user's click event(play and pause) based on the play/pause state
function handleClick(){
    if(playing){
        onPause()
    }
    else{
        onPlay()
    }
 
    setPlaying(!playing)
}  
return (
    <button onClick={handleClick}>{ (children!=null) ? ` ${children} ${playing ? '||' : '>'} `  :  playing ? '||' : '>' }</button>
  )
}

export default PlayButton
