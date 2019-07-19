import * as React from 'react'

const styles: React.CSSProperties = {
	color: '#00cc00',
	fontSize: '40px',
	textAlign: 'left',
	listStyleType: 'none'
}

const right: React.CSSProperties = {
	textAlign: 'right',
}

export default (props) => (
	<li style={styles}>
		<span>{props.orderNumber} {props.author} {props.title}</span>  <span style={right}>{props.time}</span>
	</li>
)
