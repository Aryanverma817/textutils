import React from 'react'

export default function message(props) {
  return (
props.alert&&<div className={`alert alert-${props.alert.type}`} role="alert">

{props.alert.type}: <strong>{props.alert.message}</strong>
</div>

  )
}
