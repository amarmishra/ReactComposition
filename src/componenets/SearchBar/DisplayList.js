import React from 'react'

const DisplayList = ({list}) => {
  return (
        <>
        <div className='conatiner '>        
            {   list.length===0 ? "Nothing to display" :
                list.map((ele,i)=>{
                    return <div key={`${ele}-${i}`} className='row offset-2 offset-md-3'>
                            <div className='col-8 col-6-md'>
                            <p className style={{color:'white',background:'#333',textAlign:'center'}}>
                                {ele}
                            </p>
                            </div>
                        </div>
                })

            }
        
        </div>

        </>
  )
}

export default DisplayList