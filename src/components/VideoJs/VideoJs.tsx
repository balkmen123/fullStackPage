import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

interface IProps {
  options: any;
  onReady: any;
}
export const VideoJS = (props: IProps) => {
  const { options, onReady } = props;
  const videoRef = React.useRef<any>();
  const playerRef = React.useRef<any>();

  React.useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement('video-js');

      videoElement.classList.add('vjs-big-play-centered');
      videoRef?.current?.appendChild(videoElement);

      // @ts-ignore
      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log('player is ready');
        onReady && onReady(player);
      }));
      // try {
      //   player.play()
      // }catch (e){ /* empty */ }
    } else {
      const player: any = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
      // try {
      //   player.play()
      // }catch (e){ /* empty */ }
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};

export default VideoJS;
