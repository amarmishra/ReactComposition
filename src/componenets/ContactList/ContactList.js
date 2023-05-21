import React, { useReducer, useState } from 'react'
import contact_list_data from '../../data/contact_list_data'
import DualFunctionForm from '../DualFunctionForm/DualFunctionForm'


import styles from './contactlist.module.css'
const ContactList = () => {
    

    function reducerFunc(contactList,action){
        switch(action.type){
            case 'add':
            
            return [...contactList,{
                id: Date.now()+`-${action.payload.name}`,
                ...action.payload
            }]
            case  'edit':
                let list=[...contactList]
                list.splice(contactList.indexOf(action.payload.oldValue),1,action.payload.newValue)
                return list
        
            case 'delete':
                return contactList.filter((contact)=>contact.id!==action.payload)
            
            default:
                return contactList
            
        }
            
           
    }

    //state for display
    const [contactList,dispatch]=useReducer(reducerFunc,contact_list_data)
    const addContactDispatcher=(contact)=>{
        dispatch({type:'add',payload:contact})
        setEditContact(intial)
    }
    const editContactDispatcher=(oldValue,newValue)=>{
        dispatch( {type:'edit',payload:{oldValue,newValue} })
        setEditContact(intial)
    }
    const deleteContactDispatcher=(id)=>{
        dispatch({type:'delete',payload:id})
    }

    //state for form
    let intial=null //intial state of form
    const [editContact,setEditContact]=useState(intial)
  return (
    <>  <div className={`container ${styles['contacts-container']}`} >
            

        {   
            contactList.map((contact,index)=>{
                return <>

                    
                </>
                
            })
        }
           
        </div>
         <button  onClick={editContact  ? ()=>setEditContact(intial)  : undefined  }  >{editContact? 'CANCEL EDIT' : 'EDIT' }</button>
        { console.log("edit contact value is: ",editContact) }
        {editContact ? < DualFunctionForm  editContact={editContact} onDispatch={  editContactDispatcher } />: <DualFunctionForm onDispatch={  addContactDispatcher }/> }
    </>
  )
}

export default ContactList