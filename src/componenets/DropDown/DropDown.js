import React, { useState } from 'react'

const DropDown = () => {

    let [tag,setTag]=useState('')

    let handleSelect=(e)=>{
        e.stopPropagation()
        console.log(e.target.value)
       setTag(e.target.value)
    }
  return (
    <>
    <form>
    <select name="tag" onChange={handleSelect} >
        <option>Account Excecutive</option>
        <option>Business Manager</option>
        <option>Account Manager</option>
    </select>
    </form>

    <input value={tag} defaultValue={''}></input>
    </>)
}

export default DropDown