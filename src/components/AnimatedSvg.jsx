import React from "react";

const AnimatedSvg = () => {
  return (
    <div className="w-full mx-auto mt-8 relative">
      <svg
        id="svga"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 680 310"
        className="relative w-full h-auto"
      >
        <g className="stroke-[#caff33] fill-none stroke-[6]">
          <path
            id="loop-normal"
            d="M343.6,156.5c11,15.9,104.6,147.2,181.9,147.6c0.1,0,0.8,0,1,0c82.1-0.3,148.6-67,148.6-149.2
            c0-82.4-66.8-149.2-149.2-149.2c-77.2,0-170.8,131-182.2,147.5c-0.8,1.1-1.6,2.3-2.1,3.1c-10.6,15.3-104.8,147.8-182.4,147.8
            C76.7,304.2,9.9,237.4,9.9,155S76.7,5.8,159.1,5.8c77.2,0,170.7,130.9,182.2,147.5C342.1,154.4,342.9,155.6,343.6,156.5z"
          />
        </g>
        <use
          className="stroke-black fill-none stroke-[8] stroke-linecap-round"
          strokeDasharray="200 1710"
          xlinkHref="#loop-normal"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="200"
            to="-1710"
            begin="0s"
            dur="3s"
            repeatCount="indefinite"
          />
        </use>

        <circle
          id="plug"
          className="fill-black"
          cx="0"
          cy="0"
          r="7"
        />
        <animateMotion
          xlinkHref="#plug"
          dur="3s"
          rotate="auto"
          repeatCount="indefinite"
          calcMode="linear"
          keyTimes="0;1"
          keyPoints="0;1"
        >
          <mpath xlinkHref="#loop-normal" />
        </animateMotion>
      </svg>
    </div>
  );
};

export default AnimatedSvg;
