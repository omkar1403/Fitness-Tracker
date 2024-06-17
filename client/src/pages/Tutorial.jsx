// src/components/Tutorial.jsx

import React from 'react';
import YouTube from 'react-youtube'; // Import react-youtube
import './Tutorial.css'; // Import CSS file for styling
import fit3 from "../utils/Images/fit3.jpg";

const Tutorial = () => {
    // YouTube video options
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    // Array of YouTube video URLs
    const videoUrls = [
        'https://www.youtube.com/watch?v=q1Ss8sTbFBY',
        'https://www.youtube.com/watch?v=CSnStrnzARI',
        'https://www.youtube.com/watch?v=d7ec5Xv_o2w',
        'https://www.youtube.com/watch?v=eLCNFZgJbLQ',
        'https://www.youtube.com/watch?v=8LJ3Q3Fsrzs',
        'https://www.youtube.com/watch?v=q7rCeOa_m58',
        'https://www.youtube.com/watch?v=Ta8_ASDu9yk',
        'https://www.youtube.com/watch?v=04kAfDdqEfg',
        'https://www.youtube.com/watch?v=eTxO5ZMxcsc',
        'https://www.youtube.com/watch?v=U9ENCvFf9yQ',
        'https://www.youtube.com/watch?v=yRDI30HrjVQ',
        'https://www.youtube.com/watch?v=f7QYuaosgcQ',
        'https://www.youtube.com/watch?v=qySaYWQMlHE',
        'https://www.youtube.com/watch?v=R6gZoAzAhCg',
    ];

    return (

        <div className="tutorial-container">
            <p className="tutorial-description">
                Need Some Guidance and motivation?💪 <br />
                Watch our comprehensive tutorial videos 🚀 to learn how to start your fitness journey today! 🏋️‍♂️📹
            </p>
            <div className="videos-wrapper">
                {videoUrls.map((videoUrl, index) => {
                    const videoId = videoUrl.split('v=')[1]; // Extract the video ID from the URL
                    return (
                        <div className="video-item" key={index}>
                            <YouTube videoId={videoId} opts={opts} />
                        </div>
                    );
                })}
            </div>
        </div>

    );
};

export default Tutorial;
