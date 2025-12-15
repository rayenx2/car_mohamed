import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useVideoAutoplay = (videoRef: React.RefObject<HTMLVideoElement>) => {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video metadata is loaded before trying to play
    video.load();

    const trigger = ScrollTrigger.create({
      trigger: video,
      start: 'top 80%', // When video is 80% in viewport
      end: 'bottom 20%',
      onEnter: () => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(err => console.log('Autoplay prevented/interrupted:', err));
        }
      },
      onLeave: () => {
        video.pause();
      },
      onEnterBack: () => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(err => console.log('Autoplay prevented/interrupted:', err));
        }
      },
      onLeaveBack: () => {
        video.pause();
      }
    });

    return () => {
      trigger.kill();
    };
  }, [videoRef]);
};

export default useVideoAutoplay;
