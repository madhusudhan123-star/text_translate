import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Volume2, VolumeX } from 'lucide-react';

// Dynamically import the YouTube component
const YouTube = dynamic(() => import('react-youtube'), { ssr: false });

const YouTubePlayer = ({ videoId }) => {
    const [isMuted, setIsMuted] = useState(true);
    const [player, setPlayer] = useState(null);

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            mute: 1,
            controls: 0,
            showinfo: 0,
            rel: 0,
            modestbranding: 1,
        },
    };

    const onReady = (event) => {
        setPlayer(event.target);
    };

    const toggleMute = () => {
        if (player) {
            if (isMuted) {
                player.unMute();
            } else {
                player.mute();
            }
            setIsMuted(!isMuted);
        }
    };

    return (
        <div className="youtube-player-container relative">
            <YouTube videoId={videoId} opts={opts} onReady={onReady} className="h-[80vh]" />
            <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>
        </div>
    );
};

export default YouTubePlayer;
