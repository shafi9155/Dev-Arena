import React from 'react'
import './Single.css'
import Sidebar from '../Sidebar/Sidebar'
import SinglePost from '../SinglePost/SinglePost'
function Single() {
  return (
    <div className='single'>
    <SinglePost/>
  <Sidebar/>
    </div>
  )
}

export default Single