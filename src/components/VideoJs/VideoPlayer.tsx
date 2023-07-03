import React, { FC, memo, useState } from 'react';
import videojs from 'video.js';
import VideoJS from './VideoJs';

interface IProps {
  streamUrl: string;
  thumbnail?: string;
}

const VideoPlayer: FC<IProps> = memo(({ streamUrl, thumbnail }) => {
  const [errCount, setErrCount] = useState(0);
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    liveui: true,
    fluid: true,
    poster: thumbnail,
    sources: [
      {
        src: streamUrl,
        type: 'video/youtube',
      },
    ],
    techOrder: ['html5', 'youtube'],
  };

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('error', () => {
      setTimeout(() => {
        setErrCount((state) => state + 1);
      }, 5000);
      videojs.log('error 123');
    });

    player.on('play', () => {
      videojs.log('play roi');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
    // eslint-disable-next-line no-console
    console.log('errCount', errCount);
  };
  return (
    <div className="w-full">
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
});
VideoPlayer.displayName = 'VideoPlayer';
export default VideoPlayer;
