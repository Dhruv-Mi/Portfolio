import React from 'react'

export default function Icon(props) {
  return (
    <a href={props.href} target='__blank' className={props.aclass}><i className={props.classes}></i></a>
  )
}
