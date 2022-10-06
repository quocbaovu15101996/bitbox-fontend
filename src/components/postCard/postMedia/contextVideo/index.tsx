import useVisibility from 'hooks/useVisibility';
import { FC, useRef } from 'react';
import ReactPlayer from 'react-player';

type Props = {
  videoUrl: string;
};

const ContextVideo: FC<Props> = ({ videoUrl }) => {
  const [isVisible, currentElement] = useVisibility<HTMLDivElement>(200);
  const playerRef = useRef(null);
  return (
    <div ref={currentElement}>
      <ReactPlayer ref={playerRef} url={videoUrl} playing={isVisible} controls={true} />
    </div>
  );
};

export default ContextVideo;
