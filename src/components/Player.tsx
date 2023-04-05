import React from "react";
import HeartBigIcon from "../icons/HeartBigFillIcon";
import HeartBigFillIcon from "../icons/HeartBigFillIcon";
import PictureInPIctureIcon from "../icons/PictureInPIctureIcon";

import MicIcon from "../icons/MicIcon";
import QueueIcon from "../icons/QueueIcon";
import DevicesIcon from "../icons/DevicesIcon";

import VoiceHighIcon from "../icons/VoiceHighIcon";
import VoiceLowIcon from "../icons/VoiceLowIcon";
import VoiceMediumIcon from "../icons/VoiceMediumIcon";
import VoiceMuteIcon from "../icons/VoiceMuteIcon";

import Slider from "rc-slider";
// import "rc-slider/assets/index.css";
import type { SliderProps } from "rc-slider";
import PlaySmallIcon from "../icons/PlaySmallIcon";
import PlayNextIcon from "../icons/PlayNextIcon";
import PlayPreviousIcon from "../icons/PlayPreviousIcon";
import SuffleIcon from "../icons/SuffleIcon";
import RepeatIcon from "../icons/RepeatIcon";
import RepeatOneIcon from "../icons/RepeatOneIcon";

type Props = {};

function Player({}: Props) {
  return (
    <div className="col-start-1 col-end-3 row-start-2 row-end-3 h-[90px] px-4 flex items-center bg-black-2 border border-black-3">
      <Left />
      <PlayerControls />
      <Right />
    </div>
  );
}

const Left = () => {
  return (
    <div className="w-[30%] min-w-[180px]">
      <div className="flex items-center">
        {/* image */}
        <div className="shadow-lg">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="aspect-square object-cover h-[50px] rounded"
          />
        </div>

        {/* title & singer */}
        <div className="flex flex-col mx-4">
          <div className="text-sm">
            <a href="">Aasan Nahin Yahen </a>
          </div>
          <div className="text-[11px] text-gray">
            <a href=""> Arjit Singh </a>
          </div>
        </div>

        {/* like */}
        <button className="w-[32px] h-[32px] flex justify-center items-center">
          <HeartBigIcon />
        </button>

        {/* mini player */}
        <button className="w-[32px] h-[32px] flex justify-center items-center">
          <PictureInPIctureIcon />
        </button>
      </div>
    </div>
  );
};

const Right = () => {
  return (
    <div className="w-[30%] min-w-[180px]">
      <div className="w-full flex justify-end">
        <button className="w-[32px] h-[32px] flex justify-center items-center">
          <MicIcon />
        </button>
        <button className="w-[32px] h-[32px] flex justify-center items-center">
          <QueueIcon />
        </button>
        <button className="w-[32px] h-[32px] flex justify-center items-center">
          <DevicesIcon />
        </button>
        <button className="w-[32px] h-[32px] flex justify-center items-center">
          <VoiceHighIcon />
        </button>

        {/* voice slider */}
        <div className="w-[200px] flex items-center pl-2 py-2">
          <Slider min={0} max={100} />
          {/* <Range /> */}
        </div>
      </div>
    </div>
  );
};

const PlayerControls = () => {
  return (
    <div className="w-[40%] ">
      <div className="">
        {/* controls */}
        <div className="flex items-center mb-2 gap-4">
          <div className="flex justify-end gap-2 grow">
            <button className="w-[32px] h-[32px] flex justify-center items-center">
              <SuffleIcon />
            </button>
            <button className="w-[32px] h-[32px] flex justify-center items-center">
              <PlayPreviousIcon />
            </button>
          </div>
          <div>
            <button className="w-[32px] h-[32px] flex justify-center items-center bg-white rounded-full">
              <PlaySmallIcon />
            </button>
          </div>
          <div className="flex justify-start gap-2 grow">
            <button className="w-[32px] h-[32px] flex justify-center items-center">
              <PlayNextIcon />
            </button>
            <button className="w-[32px] h-[32px] flex justify-center items-center">
              <RepeatIcon />
            </button>
          </div>
        </div>

        {/* track */}
        <div className="flex items-center gap-2">
          <div className="min-w-[40px] flex justify-end  text-[11px] text-gray font-sans-light leading-none"> {3.26} </div>
          <div className="flex items-center grow">
            <Slider min={0} max={100} />
          </div>
          <div className="min-w-[40px] flex justify-start  text-[11px] text-gray font-sans-light"> {3.26} </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
