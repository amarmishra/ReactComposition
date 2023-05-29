export function createMatrix(x,y){
   
    let columns=[]
    for(let j=0;j<y;j++){
        columns.push(null)
    }
    let grid=[];
    for(let i=0;i<x;i++){
        grid.push(columns)
    }
    
    return grid;
   
}

