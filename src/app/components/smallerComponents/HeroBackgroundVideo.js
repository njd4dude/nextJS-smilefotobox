"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const POSTER_SRC = "/images/samplePrint.webp";

const HeroBackgroundVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [skipVideo, setSkipVideo] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setSkipVideo(true);
      return;
    }

    const onPlaying = () => setIsPlaying(true);

    const tryPlay = async () => {
      try {
        await video.play();
      } catch {
        // iOS Low Power Mode and similar restrictions block autoplay.
      }
    };

    video.addEventListener("playing", onPlaying);
    tryPlay();

    return () => {
      video.removeEventListener("playing", onPlaying);
    };
  }, []);

  const showPoster = !isPlaying || skipVideo;

  return (
    <>
      <div
        aria-hidden="true"
        className={`absolute inset-0 transition-opacity duration-500 ${
          showPoster ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={POSTER_SRC}
          alt=""
          fill
          priority
          className="object-cover scale-105 blur-md"
          sizes="100vw"
        />
      </div>

      {!skipVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            isPlaying ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/hero-compressed.mp4" type="video/mp4" />
        </video>
      )}
    </>
  );
};

export default HeroBackgroundVideo;
