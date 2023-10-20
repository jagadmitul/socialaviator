import { useEffect, useRef, useState } from "react";

interface Props {
  video: string;
  text: string;
  description: string;
  setExpandedVideoText: (text: string | null) => void;
  setExpandedVideoDesc: (text: string | null) => void;
}

const ExpandingVideo = ({ video, text, description, setExpandedVideoText, setExpandedVideoDesc }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setExpanded(true);
    setExpandedVideoText(text);
    setExpandedVideoDesc(description);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
    setExpandedVideoText(null);
    setExpandedVideoDesc(null);
  };

  useEffect(() => {
    if (expanded && videoRef.current) {
      videoRef.current.play();
    } else if (!expanded && videoRef.current) {
      videoRef.current.pause();
    }
  }, [expanded]);

  return (
    <div
      className="relative flex justify-center items-center min-w-[150px] h-[300px] overflow-hidden duration-500 ease-in-out cursor-pointer rounded-3xl z-0"
      style={{
        width: expanded ? "250px" : "150px",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        preload="metadata"
        playsInline
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{
          filter: expanded ? "grayscale(0%)" : "grayscale(0%)",
        }}
		muted
      >
        <source src={video + "#t=0.001"} type="video/mp4" />
      </video>
    </div>
  );
};

export default ExpandingVideo;
