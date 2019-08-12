import * as React from 'react';
import ListItemComponent from './ListItemComponent';
import tracksJson from './tracks.json';
import { useState } from 'react';

const styles: React.CSSProperties = {
    marginTop: 100,
    textAlign: 'center',
    backgroundColor: 'black'
};

export default () => {
    const [ tracks, setTracks ] = useState( tracksJson.map((track, index) => {
        const copy = {...track}
        copy.orderNumber = index
        return copy
    } );
    const newTrack = {}
    const handleAuthor = (event) => {newTrack.author = event.target.value}
    const handleTitle = (event: {}) => {newTrack.title = event.target.value}
    const handleTime = (event) => {newTrack.time = event.target.value}
    const addTrack = () => {
        newTrack.orderNumber = tracks.length + 1
        const copy = [...tracks]
        copy.push(newTrack)
        setTracks(copy)
    }

    const removeTrack = (index) => {
        const copy = [...tracks]
        copy.splice(index, 1)
        setTracks(copy)
    }

    return (
        <div>
            <div style={styles}>
                <ul>
                    {tracks.map( ( track, index ) => <ListItemComponent  onClick={() => {removeTrack(index)}}   {...track}   /> )}
                </ul>
            </div>
            <span>
                <button onClick={addTrack}>Add</button>
                <label>Author:</label>
                <input  type='text' value={newTrack.author}  onChange={handleAuthor} />
                <label>Title:</label>
                <input  type='text' value={newTrack.title}  onChange={handleTitle} />
                <label>Time:</label>
                <input  type='text' value={newTrack.time}  onChange={handleTime} />
            </span>
        </div>
    )
}
