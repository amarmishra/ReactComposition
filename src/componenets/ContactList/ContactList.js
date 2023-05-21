import React, { useReducer, useState } from 'react'
import contact_list_data from '../../data/contact_list_data'
import DualFunctionForm from '../DualFunctionForm/DualFunctionForm'


import styles from './contactlist.module.css'
const ContactList = () => {
    

     //state for form edit
     let intial=null //intial state of form
     const [editContact,setEditContact]=useState(intial)

    function reducerFunc(contactList,action){
        switch(action.type){
            case 'add':
                console.log("Adding....",{
                    id: Date.now()+`-${action.payload.name}`,
                    ...action.payload
                })
                let newList= [...contactList,{
                    id: Date.now()+`-${action.payload.name}`,
                    ...action.payload
                }]
                
                return newList
            case  'edit':
                let list=[...contactList]
                list.splice(contactList.indexOf(action.payload.oldValue),1,action.payload.newValue)
                setEditContact(intial)
                return list
        
            case 'delete':
                return contactList.filter((contact)=>contact.id!==action.payload)
            
            default:
                return contactList
            
        }
            
           
    }

    //state for display
    const [contactList,dispatch]=useReducer(reducerFunc,contact_list_data)

   
   
  return (
    <>  <div className={`container ${styles['contacts-container']}`} >
            

        {   
            contactList.map((contact)=>{
                return<> 
                    <div key={contact.id} className='row offest-2'>
                        <div className={`col-8 ${styles["contact-content"]}`}>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col'>{contact.name}</div>
                                    <div className='col offset-1'><small>{contact.phoneNo}</small></div>
                                </div>
                            </div>
                        </div>
                    <div className={`col-4 ${styles["acion-panel"]}`}>
                        <div className='container'>
                            <div className='row'>
                            <div className='col' onClick={()=>setEditContact(contact)}><button>Edit</button></div>
                            <div className='col'><button onClick={()=>dispatch({type:'delete',payload:contact.id})}>Delete</button></div>
                            </div>
                        </div>
                    </div>
                   
                </div>
                </>
                
            })
        }
           
        </div>
        <div className='container'> <div className='row offset-3'><div className='col-6'><button style={{width:'145%'}}  onClick={editContact  ? ()=>setEditContact(intial)  : undefined  }  >{editContact? 'CANCEL EDIT' : 'EDIT' }</button>
        </div></div></div>
         < DualFunctionForm  editContact={editContact} onDispatch={ dispatch } /> 
    </>
  )
}

export default ContactList