import React from 'react'
import { useState,useEffect } from 'react'
import {searchInThisList} from '../../data/search_in_this_list'
import DisplayList from './DisplayList'




const SearchBar = () => {
    let [list,setList]=useState(searchInThisList)
    let intialSearchFor=''
    let [searchFor,setSearchFor]=useState(intialSearchFor)


    useEffect(()=>{
        if(searchFor.length==0){
            setList(searchInThisList)
            
        }else{
            setList(
                searchInThisList.filter((name)=>{

                    if(name.split(' ').some((value)=>{
                        return new RegExp('^'+searchFor,'gi').test(value)
                    }) ) return true

                    return false
                })
            )
        }
        
    },[searchFor])

    return (<>
    <form className='container '> 
        <div className='row offset-2 offset-md-3'>
           
            <input className='col-8 col-6-md' value={searchFor} onChange={handleInput}  placeholder='Search Filter'></input>

            <br/>
        </div>
    </form>
    <DisplayList list={list}></DisplayList>
   
    </>
  )

  
  function handleInput(e){
    
        if(e.target.value===null){
            setSearchFor(intialSearchFor)
        }
        else{
            setSearchFor(e.target.value)
        }
    }
}

export default SearchBar