import Typewriter from "typewriter-effect";

export default function TypewriterIsland() {
  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300">
      <Typewriter
        options={{
          strings: [
            "Software Developer",
            "UI/UX Designer",
            "Video Editor",
            "Full Stack Builder",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </span>
  );
}
