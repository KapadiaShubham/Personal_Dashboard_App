import React from 'react'
import './Task.css'

const Task = props => {
  return (
    <span className='Task'>
      <div className='task_title'>{props.title}</div>
      <div className='task_desc'>{props.desc}</div>
    </span>
  )
}

export default Task
