import React from 'react'

const EachSong = ({playlist}) => {
    return (
        <div>
            {playlist.map(song => {
                return (
                <div id= {song.id} >
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
                <p>{song.time}</p>
                {/* <p>{song.isFave}</p> */}
                </div>
                )
            })}
        </div>
    )
}

export default EachSong