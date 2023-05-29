import React from 'react'
import Panel from './Panel'


const Grid = ({grid,gridDispatch,inputDispatch,setTransfer,transfer}) => {

    const row=grid.length
    const col=grid[0].length


  return (
    < div className='container'>
        {grid.map((row,i)=>{
            return <div key={`gridrow-${i}`} className='row'>
            {   grid[i].map((col,j)=>{
               
                return <div  key={`gridrcol-${i+j}`} className='col ' onDragOverCapture={(e)=>e.preventDefault()}  onDrop={(e) =>{  transfer!==null &&  inputDispatch({type:"dropOnGrid",payload:{formIndex:transfer.fromIndex} }); gridDispatch({type:"dropOnGrid",payload:{toIndex:[i,j],letter:transfer.value}}); setTransfer(null) } } >{ "Hello"}</div>
                })
            }
            </div>
        })}
    </div>
  )



  function createGrid(rowSize,colSize){
    let grid=[];
    
    let columns=[];

    for(let j=0;j<colSize;j++){
        columns.push(<div className='col' onDrop={(e)=>{let key=e.dataTransfer.setData("panel"); dispatchEvent() }}></div>)
    }
    for(let i=0;i<rowSize;i++){
        
        grid.push(<div class='row'>{columns}</div>)
    }
    return grid
  }

}

export default Grid