import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaPlay,
  FaPause,
  FaTimes,
  FaVolumeUp,
  FaVolumeMute,
  FaExpand
} from 'react-icons/fa';

const VideoPlayer = ({ videoSrc, altText }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const progressRef = useRef(null);

  const handleMetadataLoaded = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);

    if (!isFullscreen && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      setIsMuted(false);
    }
  };

  const togglePlayPause = (e) => {
    e.stopPropagation();

    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();

    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);

    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  const handleSeek = (e) => {
    if (progressRef.current && videoRef.current) {
      const progressRect = progressRef.current.getBoundingClientRect();
      const seekPosition = (e.clientX - progressRect.left) / progressRect.width;
      const seekTime = seekPosition * duration;

      videoRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const closeFullscreen = (e) => {
    e.stopPropagation();
    setIsFullscreen(false);
  };

  const enterBrowserFullscreen = (e) => {
    e.stopPropagation();

    if (containerRef.current) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  };

  useEffect(() => {
    let timeout;

    if (isFullscreen && showControls) {
      timeout = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isFullscreen, showControls]);

  const handleMouseMove = () => {
    if (isFullscreen) {
      setShowControls(true);
    }
  };

  return (
    <>
      <div
        className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer group"
        onClick={toggleFullscreen}
      >
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full object-cover rounded-xl"
          autoPlay
          muted
          loop
          playsInline
          aria-label={altText}
          onLoadedMetadata={handleMetadataLoaded}
          onTimeUpdate={handleTimeUpdate}
        />

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
          animate={pulseAnimation}
        >
          <motion.div
            className="bg-purple-600/60 p-5 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPlay className="text-white text-3xl" />
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleFullscreen}
            onMouseMove={handleMouseMove}
          >
            <motion.div
              ref={containerRef}
              className="relative w-full max-w-5xl aspect-video"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={videoRef}
                src={videoSrc}
                className="w-full h-full object-cover rounded-xl"
                autoPlay={isFullscreen}
                playsInline
                aria-label={altText}
                onLoadedMetadata={handleMetadataLoaded}
                onTimeUpdate={handleTimeUpdate}
                muted={isMuted}
              />

              <motion.button
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white z-10"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: 'rgba(255,255,255,0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={closeFullscreen}
              >
                <FaTimes className="text-xl" />
              </motion.button>

              <AnimatePresence>
                {(showControls || !isPlaying) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      ref={progressRef}
                      className="w-full h-2 bg-gray-600 rounded-full mb-4 cursor-pointer"
                      onClick={handleSeek}
                    >
                      <div
                        className="h-full bg-purple-600 rounded-full relative"
                        style={{ width: `${(currentTime / duration) * 100}%` }}
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full transform translate-x-1/2"></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <motion.button
                          className="text-white"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={togglePlayPause}
                        >
                          {isPlaying ? (
                            <FaPause className="text-xl" />
                          ) : (
                            <FaPlay className="text-xl" />
                          )}
                        </motion.button>

                        <div className="flex items-center space-x-2">
                          <motion.button
                            className="text-white"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleMute}
                          >
                            {isMuted ? (
                              <FaVolumeMute className="text-xl" />
                            ) : (
                              <FaVolumeUp className="text-xl" />
                            )}
                          </motion.button>

                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={isMuted ? 0 : volume}
                            onChange={handleVolumeChange}
                            className="w-20 accent-purple-600"
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>

                        <div className="text-white text-sm">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </div>
                      </div>

                      <motion.button
                        className=""
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={enterBrowserFullscreen}
                      >
                        <FaExpand className="text-xl text-purple-900" />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoPlayer;
