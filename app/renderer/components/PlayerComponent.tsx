import * as React from 'react';
import { useState } from 'react'

// https://icons8.com/icon/pack/media-controls/ios
export default ( props ) => {
    const [ state, setState ] = useState( {} )

    const play = () => {
        const newState = {...state}
        newState.play = true
        setState(newState)
    }

    return (
        <div>
            <div className='info'>
                <div> { props.currentTrack.author } - { props.currentTrack.title } </div>
                <div>00:00 / { props.currentTrack.time }</div>
            </div>
            <div className='menu'>
                <img className={'play' + ' ' + (state.play === true ? 'active' : '')} src='https://img.icons8.com/ios/50/000000/play.png' onClick={play} />
                <img className='stop' src='https://img.icons8.com/ios/50/000000/stop.png'/>
                <img className='pause' src='https://img.icons8.com/ios/50/000000/pause.png'/>
                <img className='shuffle' src='https://img.icons8.com/ios/50/000000/shuffle.png'/>
                <img className='repeat' src='https://img.icons8.com/ios/50/000000/repeat.png'/>
                <img className='repeat-one' src='https://img.icons8.com/ios/50/000000/repeat-one.png'/>
                <img className='mute' src='https://img.icons8.com/ios/50/000000/mute.png'/>
                <img className='sound' src='https://img.icons8.com/ios/50/000000/sound.png'/>
            </div>
        </div>
    );
}
