import React, { useReducer,useState } from 'react'
import { createMatrix } from '../../utility/create_grid_row_col';
import { letters } from '../../data/drag_drop_game_data';

import Grid from './Grid';
import Input from './Input';
import Panel from './Panel';

const DragDropGame = () => {

    const rowSize=8;
    const colSize=8;

    const gridInitial= createMatrix(rowSize,colSize);
    
    const inputInitial=letters

    const[grid,gridDispatch]=useReducer(gridReducer,gridInitial)
    const[input,inputDispatch]=useReducer(inputReducer,inputInitial)

    const [transfer,setTransfer]=useState(null)

    function gridReducer(grid,action){
        switch(action.type){
            //dispatch from Input element
            case 'dropOnInput':
            //dispatch from Grid element
            case 'dropOnGrid':
                let [i,j]=action.payload.toIndex
                console.log("On drop make changes to",i,",",j, "in the matrix with letter",action.payload.letter)
                let newGrid=[...[...grid]]
                console.log("***********")
                console.log(newGrid)
                console.log("***********")
                newGrid[i][j]=action.payload.letter
                return newGrid

                //change state for action.payload.toIndex[i,j] to letter

        }
    }

    function inputReducer(input,action){
        switch(action.type){
            //dispatch from  Grid component
            case 'dropOnGrid':
                //delete action.payload.fromIndex to null
                let newInput=[...input]
                newInput[action.payload.fromIndex]=null
                return newInput
            //dispatch from Input
            case 'dropOnInput':


        }
    }

    console.log("Grid state is",grid)

  return (
    
    <>
        <Grid gridDispatch={gridDispatch} inputDispatch={inputDispatch} grid={grid} transfer={transfer} setTransfer={setTransfer}></Grid>
        <Input input={input} gridDispatch={gridDispatch} inputDispatch={inputDispatch} setTransfer={setTransfer}></Input>
    
    </>
  )
}

export default DragDropGame