import { useState } from "react";

export default function HeroVideo() {
  const [playWithAudio, setPlayWithAudio] = useState(false);

  const videoUrl = playWithAudio
    ? "https://www.youtube.com/embed/T86mAU_v54A?autoplay=1&mute=0&controls=0&modestbranding=1&rel=0&playsinline=1"
    : "https://www.youtube.com/embed/T86mAU_v54A?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1";

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
      {!playWithAudio && (
        <div
          onClick={() => setPlayWithAudio(true)}
          style={{
            position: "absolute",
            zIndex: 2,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.4)",
            color: "white",
            fontSize: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          Click to play with audio 🔊
        </div>
      )}
      <iframe
        width="100%"
        height="100%"
        src={videoUrl}
        title="Branding Video"
        style={{ border: "none", zIndex: 1 }}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
