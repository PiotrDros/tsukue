import * as React from 'react'


export default ( props ) => {
    return (
        <div>
            <div className='info'>
                <div> { props.currentTrack.author } - { props.currentTrack.title } </div>
                <div>00:00 / { props.currentTrack.time }</div>
            </div>
            <div className='menu'>

            </div>
        </div>
    );
}
