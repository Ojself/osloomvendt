'use client';

import { useClientOnly } from '@/hooks/usClientOnly';
import useIsTabActive from '@/hooks/useIsTabActive';
import { useEffect, useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { FaPause, FaPlay } from 'react-icons/fa';
import ReactPlayer from 'react-player';

const formatTime = (time) => {
  if (time && !isNaN(time)) {
    const minutes = Math.floor(time / 60);
    const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(time % 60);
    const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formatMinutes}:${formatSeconds}`;
  }
  return '00:00';
};

export const EmbedPlayer = ({ embed }) => {
  const player = useRef(null);

  const [playing, setPlaying] = useState(false);

  const [played, setPlayed] = useState(0);

  const [seeking, setSeeking] = useState(false);
  const [playedSeconds, setPlayedSeconds] = useState(0);

  const isActiveTab = useIsTabActive();

  useEffect(() => {
    if (!isActiveTab) {
      setPlaying(false);
    }
  }, [isActiveTab]);

  const togglePlay = () => {
    setPlaying((prev) => !prev);
  };

  const handlePlay = () => {
    setIsPlaying(false);
    setIsWhiteNoisePlaying(false);
    if (player.current && played < 0.01) {
      player.current.seekTo(randomFloat(0.2, 0.8));
    }
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  const handleSeekMouseDown = (e) => {
    setSeeking(true);
  };

  const handleSeekChange = (e) => {
    setPlayed(parseFloat(e.target.value));
  };

  const handleSeekMouseUp = (e) => {
    setSeeking(false);
    if (player.current) {
      player.current.seekTo(parseFloat(e.currentTarget.value));
    }
  };

  const handleSeekTouchStart = (e) => {
    setSeeking(true);
  };

  const handleSeekTouchEnd = (e) => {
    setSeeking(false);
    if (player.current) {
      player.current.seekTo(parseFloat(e.currentTarget.value));
    }
  };

  const handleProgress = (state) => {
    if (!seeking) {
      setPlayed(state.played);
      setPlayedSeconds(state.playedSeconds);
    }
  };

  return (
    <div className='w-full font-source-code-pro'>
      <div className='visually-hidden'>
        <ReactPlayer
          ref={player}
          className='react-player'
          width='100%'
          height='100%'
          url={embed.url}
          playing={playing}
          config={{
            soundcloud: {
              options: {
                visual: false,
                show_artwork: false,
              },
            },
          }}
          onPlay={handlePlay}
          onPause={handlePause}
          onProgress={handleProgress}
        />
      </div>

      <div
        className={
          'flex items-center justify-between rounded-lg border-[2px] border-primary'
        }
      >
        <button onClick={togglePlay} className='text-4xl lg:text-5xl'>
          <p>
            {playing ? (
              <FaPause className='p-3' />
            ) : (
              <FaPlay className='p-3 text-secondary' />
            )}
          </p>
        </button>
        <div className='relative flex grow flex-col justify-center'>
          <div className='absolute-center pointer-events-none w-full mix-blend-difference'>
            <Marquee speed={20} autoFill={false}>
              <p>{embed.title}&nbsp;</p>
            </Marquee>
          </div>
          <input
            style={{ '--progress': (played * 100).toFixed(2) + '%' }}
            className='react-player-range'
            type='range'
            min={0}
            max={0.999999}
            step='any'
            value={played}
            onMouseDown={handleSeekMouseDown}
            onChange={handleSeekChange}
            onMouseUp={handleSeekMouseUp}
            onTouchStart={handleSeekTouchStart}
            onTouchEnd={handleSeekTouchEnd}
          />
        </div>
        <p className='w-[7ch] pl-2 pr-2 text-right'>
          <p>{formatTime(playedSeconds)}</p>
        </p>
      </div>
    </div>
  );
};

const Embed = ({ embed }) => {
  const isClient = useClientOnly();
  if (!embed.url) return null;

  return isClient && <EmbedPlayer embed={embed} />;
};

export default Embed;
