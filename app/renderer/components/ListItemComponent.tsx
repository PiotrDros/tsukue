import * as React from 'react'
import './ListItem.css'

const styles: React.CSSProperties = {
    color: '#00cc00',
    fontSize: '40px',
    textAlign: 'left',
    listStyleType: 'none'
}

const right: React.CSSProperties = {
    textAlign: 'right',
}

export default ( props ) => (
    <li style={ styles }>
        <span style={{width: '10%'}}>{props.orderNumber} </span>
        <span style={{width: '70%'}}> {props.author} {props.title}</span>
        <span style={{width: '20%'}}> {props.time}</span>
    </li>
)
