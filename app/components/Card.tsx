"use client";

import Tilt from "react-parallax-tilt";
import { SubjectColors } from "../db/subjects";

const getContainerColors = (color: SubjectColors) => {
  switch (color) {
    case "red":
      return "bg-red-50 border-red-600 hover:shadow-red-200 hover:shadow-xl";
    case "yellow":
      return "bg-yellow-50 border-yellow-600 hover:shadow-yellow-200 hover:shadow-xl";
    case "sky":
      return "bg-sky-50 border-sky-600 hover:shadow-sky-200 hover:shadow-xl";
    case "green":
      return "bg-green-50 border-green-600 hover:shadow-green-200 hover:shadow-xl";
    case "orange":
      return "bg-orange-50 border-orange-600 hover:shadow-orange-200 hover:shadow-xl";
    case "slate":
      return "bg-slate-50 border-slate-600 hover:shadow-slate-200 hover:shadow-xl";
    case "purple":
      return "bg-purple-50 border-purple-600 hover:shadow-purple-200 hover:shadow-xl";
    case "pink":
      return "bg-pink-50 border-pink-600 hover:shadow-pink-200 hover:shadow-xl";
  }
};

const getTextColor = (color: SubjectColors) => {
  switch (color) {
    case "red":
      return "text-red-900";
    case "yellow":
      return "text-yellow-900";
    case "sky":
      return "text-sky-900";
    case "green":
      return "text-green-900";
    case "orange":
      return "text-orange-900";
    case "slate":
      return "text-slate-900";
    case "purple":
      return "text-purple-900";
    case "pink":
      return "text-pink-900";
  }
};

export default function Card({
  children,
  color,
}: {
  children: React.ReactNode;
  color: SubjectColors;
}) {
  return (
    <Tilt
      glareEnable
      glareMaxOpacity={1.0}
      glareColor={"#FFFFFF"}
      perspective={2000}
      transitionSpeed={800}
      tiltReverse
      scale={1.05}
    >
      <div
        className={
          "cursor-pointer flex opacity-75 flex-col items-center justify-center border border-b-4 border-solid rounded-xl shadow-lg p-4 w-52 h-26 text-center transition " +
          getContainerColors(color)
        }
      >
        <p
          className={
            "break-words max-w-full hyphens-auto text-sm font-bold " +
            getTextColor(color)
          }
        >
          {children}
        </p>
      </div>
    </Tilt>
  );
}
