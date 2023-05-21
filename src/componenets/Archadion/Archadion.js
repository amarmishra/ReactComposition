import {useState} from 'react'
import Panel from './Panel'
function Archadion({panels}){
    let [activePanel,setActivePanel]=useState(0)
    return(<div className="Archidion">
        {
            panels.map((panel,index)=>{
                return <Panel key={`panel-${index}`} number={index} activeNumber={activePanel} content={panel} activate={setActivePanel}/>
            })
        }    

    </div>)
}
export default Archadion