import * as React from 'react';
import { useState } from 'react';
import PlayerState from './PlayerState';

// https://icons8.com/icon/pack/media-controls/ios
export default ( props ) => {
    const [ state, setState ] = useState<PlayerState>( {
        playing: false,
        paused: false,
        stopped: true,
        shuffled: false,
        repeating: false,
        repeatingOne: false,
        muted: false
    } );

    const play = () => {
        const newState: PlayerState = { ...state };
        newState.playing = true;
        newState.paused = false;
        newState.stopped = false;
        setState( newState );
    };

    const stop = () => {
        const newState: PlayerState = { ...state };
        newState.playing = false;
        newState.paused = false;
        newState.stopped = true;
        setState( newState );
    };

    const pause = () => {
        const newState: PlayerState = { ...state };
        newState.playing = false;
        newState.paused = true;
        newState.stopped = false;
        setState( newState );
    };

    const switchShuffle = () => {
        const newState: PlayerState = { ...state };
        newState.shuffled = !state.shuffled;
        setState( newState );
    };

    const switchRepeat = () => {
        const newState: PlayerState = { ...state };
        newState.repeating = !state.repeating;
        newState.repeatingOne = false;
        setState( newState );
    };

    const switchRepeatOne = () => {
        const newState: PlayerState = { ...state };
        newState.repeatingOne = !state.repeatingOne;
        newState.repeating = false;
        setState( newState );
    };

    const switchMute = () => {
        const newState: PlayerState = { ...state };
        newState.muted = !state.muted;
        setState( newState );
    };


    return (
        <div>
            <div className='info'>
                <div> { props.currentTrack.author } - { props.currentTrack.title } </div>
                <div>00:00 / { props.currentTrack.time }</div>
            </div>
            <div className='menu'>
                <img
                    className={ 'play' + ' ' + ( state.playing === true ? 'active' : '' ) }
                    src='https://img.icons8.com/ios/50/000000/play.png'
                    onClick={ play }
                />
                <img
                    className={'stop' + ' ' + ( state.stopped === true ? 'active' : '' )}
                    src='https://img.icons8.com/ios/50/000000/stop.png'
                    onClick={stop}
                />
                <img
                    className={'pause' + ' ' + ( state.paused === true ? 'active' : '' )}
                    src='https://img.icons8.com/ios/50/000000/pause.png'
                    onClick={pause}
                />
                <img
                    className={'shuffle' + ' ' + ( state.shuffled === true ? 'active' : '' )}
                    src='https://img.icons8.com/ios/50/000000/shuffle.png'
                    onClick={switchShuffle}
                />
                <img
                    className={'repeat' + ' ' + ( state.repeating === true ? 'active' : '' )}
                    src='https://img.icons8.com/ios/50/000000/repeat.png'
                    onClick={switchRepeat}
                />
                <img
                    className={'repeat-one' + ' ' + ( state.repeatingOne === true ? 'active' : '' )}
                    src='https://img.icons8.com/ios/50/000000/repeat-one.png'
                    onClick={switchRepeatOne}
                />
                <img
                    className={'mute' + ' ' + ( state.muted === true ? 'active' : '' )}
                    src='https://img.icons8.com/ios/50/000000/mute.png'
                    onClick={switchMute}
                />
                <img
                    className={'sound' + ' ' + ( state.muted === false ? 'active' : '' )}
                    src='https://img.icons8.com/ios/50/000000/sound.png'
                    onClick={switchMute}
                />
            </div>
        </div>
    );
}
