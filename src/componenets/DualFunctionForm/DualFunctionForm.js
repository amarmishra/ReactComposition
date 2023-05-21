import React, { useEffect, useState } from 'react'
import delayWithPromise from '../../utility/promise'
const DualFunctionForm = ({onDispatch,editContact}) => {

    
        //form feild  handling below state
        let intialFieldState={
            name:'',
            phoneNo:''
        }
        let [formField,setFromField] =useState(intialFieldState)
        let [submitting,setSubmitting]=useState(false)
        
        useEffect(()=>{
            if(editContact){
                setFromField(editContact)
            }
            else{
                setFromField(intialFieldState)
            }
        }
           
        ,[editContact])
    

  return (<>
   
    {/**This formEdit value can be sent via props ,
     * along with it editedValue(user) need to be sent via props*/}
    <form className='offset-left-4 offset-right-4'> 
        <div className='form-row'>
            <div className='col'>
            <input  value={formField.name} name="name" onChange={onFieldChange} placeholder='Name'></input>  
            </div>
        </div>
        <div className='form-row'>
            <div className='col'>
            <input  type="number" value={formField.phoneNo} name="phoneNo" onChange={onFieldChange} placeholder='Phone'></input>   
            </div>
        </div>
        <button type='submit' onClick={handleSubmit} disabled={submitting?true:false}>{submitting?'Submitting..':(editContact?'Edit':'Add')}</button>        
    </form>


    </>
  )


    /**form event handling for input and submit */

    function onFieldChange(e){      //update the formfield state
        e.preventDefault()
        e.stopPropagation()
        setFromField((prev)=>{
           return {...prev,
            [e.target.name]:e.target.value
            }
        })
    }

  async function handleSubmit(e){       //change the final outcome in user
    e.preventDefault()
    e.stopPropagation()
    //disable submit button while submission request not sent 
    setSubmitting(true)
    await delayWithPromise(3000)    //wait for 3000 milisec
    
    if(editContact){
        //edit logic
        onDispatch(editContact,formField)
    //    setFromField(intialFieldState)
        // formField.name
        // formField.phoneNo

    }else{
         // add logic
         onDispatch(formField)
        //  setFromField(intialFieldState)
    }
   
    setSubmitting(false)
    return
    // user.name=formField.name
    // user.name=formField.name
    // setFromField({intialFieldState},()=>{ setFormEdit(intial,()=>{console.log("Contactist changed to after add/edit ",contactList)})})  //clear from field

    }
}

export default DualFunctionForm