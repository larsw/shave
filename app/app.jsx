import React from 'react'
import ReactDOM from 'react-dom'

class Yo extends React.Component {
  render() {
      return (<div>
                <h2>Yo!</h2>
              </div>);
  }
}

const Hello = (props) => {
  return (<div className="jumbotron">
            <h1>Hello</h1>
            {props.children || <div />}
          </div>);
}

ReactDOM.render(<Hello><Yo /></Hello>,
                document.getElementById('app-container'))
