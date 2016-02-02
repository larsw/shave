import React from 'react'
import ReactDOM from 'react-dom'

export const Hello = (props) => {
  return (<div className="jumbotron">
            <h1>Hello</h1>
            {props.children || <div />}
          </div>)
}
