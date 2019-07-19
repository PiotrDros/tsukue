import * as React from 'react'
import ListItemComponent from './ListItemComponent'
import tracks from './tracks.json'

const styles: React.CSSProperties = {
    marginTop: 100,
    textAlign: 'center',
    backgroundColor: 'black'
}

export default () => (
    <div style={styles}>
        <ul>
            {tracks.map((track) => <ListItemComponent orderNumber={track.orderNumber} author={track.author}  title={track.title} time={track.time} />)}
        </ul>
    </div>
)
