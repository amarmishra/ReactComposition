function Panel({number,activeNumber,content,activate}){
    
    //event listner
    
    return(
    <div className='panel' onClick={()=>activate(number)} style={{border:'black solid 1px'}}>
    
        <div className="panel-heading">{ parseInt(number+1)+".  "  + content.heading   }</div>
        {/**Show body when active number isequal to number */}
       
        { (number===activeNumber) ? <div className="panel-body">{"Body : "+ content.body}</div> : null }    
       
    </div>
    )
}
export default Panel