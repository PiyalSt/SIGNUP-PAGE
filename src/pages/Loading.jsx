import React from "react";
import SplitText from "../components/SplitText ";
import ShapeGrid from "../components/ShapeGrid";
import { BsEmojiSmile } from "react-icons/bs";

const Loading = () => {

  const welcomeText = <div className="flex gap-4">
    Welcome to my project!
    <BsEmojiSmile />!
  </div>


  return (
    <section>
      <div className="w-full h-screen bg-[#030305]">
        <ShapeGrid
          speed={0.2}
          squareSize={40}
          borderColor="#393E46"
          hoverFillColor="#3a5b22"
          shape="hexagon"
          hoverTrailAmount={3}
          direction="diagonal"
          size={40}
        />

        <div className="absolute top-[46%] w-full flex items-center justify-center">
          <div>
            <SplitText
              text={welcomeText}
              className="text-8xl font-semibold text-center text-[#3a5b22]"
              delay={50}
              duration={1.25}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              // onLetterAnimationComplete={handleAnimationComplete}
              showCallback
            />
          </div>
      </div>
      </div>
      
    </section>
  );
};

export default Loading;
