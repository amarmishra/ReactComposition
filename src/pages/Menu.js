import React from 'react'
import { Link } from 'react-router-dom'


let index=
    {
      'Archadion':'/archadion',
   
      'Dropdown':'/dropdown',
 
      'Scroller':'/scroller',
    
      'Dual function form':'/dual-function-form',

      'Contact List with Add and Edit(single form used for CRUD)':'/contact-list',

      'Search bar filter' : '/search-bar'

    }



const Menu = () => {
  return (<>
    <h1> Select a demo component</h1>
    <ul style={{display:'flex',flexFlow:'column'}}>
    {Object.keys(index).map((key)=>{
      return(<Link to={index[key]}> {key} </Link>)
    })}
    </ul>
    {/* 
    <Link to={'/dropdown'}>Dropdown</Link>
    <Link to={'/scroller'}>Scroller</Link>
    <Link to={'/dual-function-form'}>Dual function form</Link> */}
    </>
  )
}

export default Menu