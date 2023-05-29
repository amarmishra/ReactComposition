import React from 'react'

const Panel = ({letter,onDragStart}) => {
  return (
        <div className='container' draggable={true} onDragStartCapture={onDragStart}>
           <div className='row'>
              <div className=" col-8 offset-4 border">{letter.content}<sub>{letter.score}</sub></div>
            </div>
        </div>
  )
}

export default Panel