import * as React from 'react';
import ListComponent from './ListComponent';
import PlayerComponent from './PlayerComponent';
import { useState } from 'react';

export default () => {
    const [ currentTrack, setCurrentTrack ] = useState({});

    return (
        <div>
            <PlayerComponent  currentTrack={currentTrack}/>
            <ListComponent setCurrentTrack={setCurrentTrack}/>
        </div>
    );
}
