import React from 'react'
import Panel from './Panel'
const Input = ({input,inputDispatch,gridDispatch,setTransfer}) => {

    
  return (
    <>
    <div className='conatiner'>
        <div className='row'>
    {
        input.map((ele,i)=>{
           return <div key={`inputcol-${i}`} className='col'>{ele ? <Panel letter={ele}    onDragStart={ (e)=>{setTransfer({value:ele,fromIndex:i}); console.log("Transfering element:",ele) }  }  ></Panel> : <>{"Nothing"}</> }</div>
        })  
    }
    </div>
    </div>
    </>
  )
}

export default Input