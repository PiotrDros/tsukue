import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Router from './router'
import ListComponent from './components/ListComponent'

const render = (Component) => {
  ReactDOM.render(
    <Component />,
    document.getElementById('root')
  )
}

// render(Router)
ReactDOM.render(
    <ListComponent />,
    document.getElementById('root')
)
