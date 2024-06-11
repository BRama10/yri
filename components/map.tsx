import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

// TODO: Change path colors of states to use color variants instead of classNames
// TODO: Add tests
// TODO:dominant-baseline: center; for text if centered
const colorVariants = () => ({
 slate: "#1e293b",
 white: "#e5e5e5",
 gray: "#6b7280",
 yellow: "#fde047",
 green: "#16a34a",
 emerald: "#10b981",
 blue: "#3b82f6",
 purple: "#9333ea",
 orange: "#fb923c",
 pink: "#f472b6"
});

const hoverColorVariants = (getStrokeColor?: boolean) => ({
 slate: getStrokeColor ? "hover:stroke-2 hover:stroke-slate-800" : "hover:fill-slate-800",
 white: getStrokeColor
  ? "hover:stroke-2 hover:stroke-neutral-200"
  : "hover:fill-neutral-200",
 gray: getStrokeColor
  ? "hover:stroke-2 hover:stroke-gray-500"
  : "hover:fill-gray-500",
 yellow: getStrokeColor
  ? "hover:stroke-2 hover:stroke-yellow-300"
  : "hover:fill-yellow-300",
 green: getStrokeColor
  ? "hover:stroke-2 hover:stroke-green-600"
  : "hover:fill-green-600",
 emerald: getStrokeColor
  ? "hover:stroke-2 hover:stroke-emerald-500"
  : "hover:fill-emerald-500",
 blue: getStrokeColor
  ? "hover:stroke-2 hover:stroke-blue-500"
  : "hover:fill-blue-500",
 purple: getStrokeColor
  ? "hover:stroke-2 hover:stroke-purple-600"
  : "hover:fill-purple-600",
 orange: getStrokeColor
  ? "hover:stroke-2 hover:stroke-orange-400"
  : "hover:fill-orange-400",
 pink: getStrokeColor
  ? "hover:stroke-2 hover:stroke-pink-400"
  : "hover:fill-pink-400"
});

type TextPosition = {
 x: string;
 y: string;
} | "center"

interface Props {
 USAStateColor?: keyof ReturnType<typeof hoverColorVariants>;
 USAStateOnHoverColor?: keyof ReturnType<typeof hoverColorVariants>;
 USAStateOnHoverStrokeColor?: keyof ReturnType<typeof hoverColorVariants>;
 USAStatePosition?: TextPosition;
 USAStateTextColor?: keyof ReturnType<typeof hoverColorVariants>;
 onClick?: (event: React.SyntheticEvent<SVGGElement>) => void;
 onUSAStateMouseEnter?: (event?: React.SyntheticEvent<SVGGElement>) => void;
 onUSAStateMouseLeave?: (event?: React.SyntheticEvent<SVGGElement>) => void;
 showStateNameOnHover?: boolean;
 stateTextClassname?: string;
 wrapperClassName?: string;
}

export const USAMapSelect = ({
                              USAStateColor = "gray",
                              USAStateOnHoverColor = "slate",
                              USAStateOnHoverStrokeColor,
                              USAStatePosition = { x: "50%", y: "5%" },
                              USAStateTextColor = "slate",
                              onClick,
                              onUSAStateMouseEnter,
                              onUSAStateMouseLeave,
                              showStateNameOnHover,
                              stateTextClassname,
                              wrapperClassName
                             }: Props) => {
 const [usaState, setUsaState] = useState<string | null>(null);
 const handleMouseEnter =
  onUSAStateMouseEnter || showStateNameOnHover
   ? (event: React.SyntheticEvent<SVGGElement>) => {
    const usaState = event.currentTarget.getAttribute("name");
    if (showStateNameOnHover) setUsaState(usaState);
    onUSAStateMouseEnter?.(event);
   }
   : undefined;

 const handleMouseLeave =
  onUSAStateMouseLeave || showStateNameOnHover
   ? (event: React.SyntheticEvent<SVGGElement>) => {
    if (showStateNameOnHover) setUsaState("");
    onUSAStateMouseLeave?.(event);
   }
   : undefined;

 const handleClick = (event: React.SyntheticEvent<SVGGElement>) => {
  onClick?.(event);
 };

 const onHoverUSAStateStrokeColor = USAStateOnHoverStrokeColor
  ? hoverColorVariants(true)[USAStateOnHoverStrokeColor]
  : undefined;
 const onHoverUSAStateColor = hoverColorVariants()[USAStateOnHoverColor];

 let stateTextCentered;
 let stateTextXPosition;
 let stateTextYPosition;

 if (USAStatePosition === "center") {
  stateTextCentered = "middle";
  stateTextXPosition = "50%";
  stateTextYPosition = "50%";
 } else {
  stateTextXPosition = USAStatePosition?.x;
  stateTextYPosition = USAStatePosition?.y;
 }
 return (
  <svg
   xmlns="http://www.w3.org/2000/svg"
   width="959"
   height="593"
   viewBox="0 0 959 593"
   fill={colorVariants()[USAStateColor]}
   className={twMerge("w-full h-full", wrapperClassName)}
  >
   <g>
   <text font-size="6" text-anchor="middle">
    <textPath href="#p1" startOffset="50%" text-anchor="middle">1test text</textPath>
  </text>
    <path
     name="Alaska"
     id="p1"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M161.1,453.7 l-0.3,85.4 1.6,1 3.1,0.2 1.5,-1.1 h2.6 l0.2,2.9 7,6.8 0.5,2.6 3.4,-1.9 0.6,-0.2 0.3,-3.1 1.5,-1.6 1.1,-0.2 1.9,-1.5 3.1,2.1 0.6,2.9 1.9,1.1 1.1,2.4 3.9,1.8 3.4,6 2.7,3.9 2.3,2.7 1.5,3.7 5,1.8 5.2,2.1 1,4.4 0.5,3.1 -1,3.4 -1.8,2.3 -1.6,-0.8 -1.5,-3.1 -2.7,-1.5 -1.8,-1.1 -0.8,0.8 1.5,2.7 0.2,3.7 -1.1,0.5 -1.9,-1.9 -2.1,-1.3 0.5,1.6 1.3,1.8 -0.8,0.8 c0,0 -0.8,-0.3 -1.3,-1 -0.5,-0.6 -2.1,-3.4 -2.1,-3.4 l-1,-2.3 c0,0 -0.3,1.3 -1,1 -0.6,-0.3 -1.3,-1.5 -1.3,-1.5 l1.8,-1.9 -1.5,-1.5 v-5 h-0.8 l-0.8,3.4 -1.1,0.5 -1,-3.7 -0.6,-3.7 -0.8,-0.5 0.3,5.7 v1.1 l-1.5,-1.3 -3.6,-6 -2.1,-0.5 -0.6,-3.7 -1.6,-2.9 -1.6,-1.1 v-2.3 l2.1,-1.3 -0.5,-0.3 -2.6,0.6 -3.4,-2.4 -2.6,-2.9 -4.8,-2.6 -4,-2.6 1.3,-3.2 v-1.6 l-1.8,1.6 -2.9,1.1 -3.7,-1.1 -5.7,-2.4 h-5.5 l-0.6,0.5 -6.5,-3.9 -2.1,-0.3 -2.7,-5.8 -3.6,0.3 -3.6,1.5 0.5,4.5 1.1,-2.9 1,0.3 -1.5,4.4 3.2,-2.7 0.6,1.6 -3.9,4.4 -1.3,-0.3 -0.5,-1.9 -1.3,-0.8 -1.3,1.1 -2.7,-1.8 -3.1,2.1 -1.8,2.1 -3.4,2.1 -4.7,-0.2 -0.5,-2.1 3.7,-0.6 v-1.3 l-2.3,-0.6 1,-2.4 2.3,-3.9 v-1.8 l0.2,-0.8 4.4,-2.3 1,1.3 h2.7 l-1.3,-2.6 -3.7,-0.3 -5,2.7 -2.4,3.4 -1.8,2.6 -1.1,2.3 -4.2,1.5 -3.1,2.6 -0.3,1.6 2.3,1 0.8,2.1 -2.7,3.2 -6.5,4.2 -7.8,4.2 -2.1,1.1 -5.3,1.1 -5.3,2.3 1.8,1.3 -1.5,1.5 -0.5,1.1 -2.7,-1 -3.2,0.2 -0.8,2.3 h-1 l0.3,-2.4 -3.6,1.3 -2.9,1 -3.4,-1.3 -2.9,1.9 h-3.2 l-2.1,1.3 -1.6,0.8 -2.1,-0.3 -2.6,-1.1 -2.3,0.6 -1,1 -1.6,-1.1 v-1.9 l3.1,-1.3 6.3,0.6 4.4,-1.6 2.1,-2.1 2.9,-0.6 1.8,-0.8 2.7,0.2 1.6,1.3 1,-0.3 2.3,-2.7 3.1,-1 3.4,-0.6 1.3,-0.3 0.6,0.5 h0.8 l1.3,-3.7 4,-1.5 1.9,-3.7 2.3,-4.5 1.6,-1.5 0.3,-2.6 -1.6,1.3 -3.4,0.6 -0.6,-2.4 -1.3,-0.3 -1,1 -0.2,2.9 -1.5,-0.2 -1.5,-5.8 -1.3,1.3 -1.1,-0.5 -0.3,-1.9 -4,0.2 -2.1,1.1 -2.6,-0.3 1.5,-1.5 0.5,-2.6 -0.6,-1.9 1.5,-1 1.3,-0.2 -0.6,-1.8 v-4.4 l-1,-1 -0.8,1.5 h-6.1 l-1.5,-1.3 -0.6,-3.9 -2.1,-3.6 v-1 l2.1,-0.8 0.2,-2.1 1.1,-1.1 -0.8,-0.5 -1.3,0.5 -1.1,-2.7 1,-5 4.5,-3.2 2.6,-1.6 1.9,-3.7 2.7,-1.3 2.6,1.1 0.3,2.4 2.4,-0.3 3.2,-2.4 1.6,0.6 1,0.6 h1.6 l2.3,-1.3 0.8,-4.4 c0,0 0.3,-2.9 1,-3.4 0.6,-0.5 1,-1 1,-1 l-1.1,-1.9 -2.6,0.8 -3.2,0.8 -1.9,-0.5 -3.6,-1.8 -5,-0.2 -3.6,-3.7 0.5,-3.9 0.6,-2.4 -2.1,-1.8 -1.9,-3.7 0.5,-0.8 6.8,-0.5 h2.1 l1,1 h0.6 l-0.2,-1.6 3.9,-0.6 2.6,0.3 1.5,1.1 -1.5,2.1 -0.5,1.5 2.7,1.6 5,1.8 1.8,-1 -2.3,-4.4 -1,-3.2 1,-0.8 -3.4,-1.9 -0.5,-1.1 0.5,-1.6 -0.8,-3.9 -2.9,-4.7 -2.4,-4.2 2.9,-1.9 h3.2 l1.8,0.6 4.2,-0.2 3.7,-3.6 1.1,-3.1 3.7,-2.4 1.6,1 2.7,-0.6 3.7,-2.1 1.1,-0.2 1,0.8 4.5,-0.2 2.7,-3.1 h1.1 l3.6,2.4 1.9,2.1 -0.5,1.1 0.6,1.1 1.6,-1.6 3.9,0.3 0.3,3.7 1.9,1.5 7.1,0.6 6.3,4.2 1.5,-1 5.2,2.6 2.1,-0.6 1.9,-0.8 4.8,1.9z m-115.1,28.9 2.1,5.3 -0.2,1 -2.9,-0.3 -1.8,-4 -1.8,-1.5 h-2.4 l-0.2,-2.6 1.8,-2.4 1.1,2.4 1.5,1.5z m-2.6,33.5 3.7,0.8 3.7,1 0.8,1 -1.6,3.7 -3.1,-0.2 -3.4,-3.6z m-20.7,-14.1 1.1,2.6 1.1,1.6 -1.1,0.8 -2.1,-3.1 v-1.9z m-13.7,73.1 3.4,-2.3 3.4,-1 2.6,0.3 0.5,1.6 1.9,0.5 1.9,-1.9 -0.3,-1.6 2.7,-0.6 2.9,2.6 -1.1,1.8 -4.4,1.1 -2.7,-0.5 -3.7,-1.1 -4.4,1.5 -1.6,0.3z m48.9,-4.5 1.6,1.9 2.1,-1.6 -1.5,-1.3z m2.9,3 1.1,-2.3 2.1,0.3 -0.8,1.9 h-2.4z m23.6,-1.9 1.5,1.8 1,-1.1 -0.8,-1.9z m8.8,-12.5 1.1,5.8 2.9,0.8 5,-2.9 4.4,-2.6 -1.6,-2.4 0.5,-2.4 -2.1,1.3 -2.9,-0.8 1.6,-1.1 1.9,0.8 3.9,-1.8 0.5,-1.5 -2.4,-0.8 0.8,-1.9 -2.7,1.9 -4.7,3.6 -4.8,2.9z m42.3,-19.8 2.4,-1.5 -1,-1.8 -1.8,1z"
    >
     <title>Alaska</title>
     <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="20" fill="black">AK</text>
    </path>
    <path
     name="Hawaii"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M233.1,519.3 l1.9,-3.6 2.3,-0.3 0.3,0.8 -2.1,3.1z m10.2,-3.7 6.1,2.6 2.1,-0.3 1.6,-3.9 -0.6,-3.4 -4.2,-0.5 -4,1.8z m30.7,10 3.7,5.5 2.4,-0.3 1.1,-0.5 1.5,1.3 3.7,-0.2 1,-1.5 -2.9,-1.8 -1.9,-3.7 -2.1,-3.6 -5.8,2.9z m20.2,8.9 1.3,-1.9 4.7,1 0.6,-0.5 6.1,0.6 -0.3,1.3 -2.6,1.5 -4.4,-0.3z m5.3,5.2 1.9,3.9 3.1,-1.1 0.3,-1.6 -1.6,-2.1 -3.7,-0.3z m7,-1.2 2.3,-2.9 4.7,2.4 4.4,1.1 4.4,2.7 v1.9 l-3.6,1.8 -4.8,1 -2.4,-1.5z m16.6,15.6 1.6,-1.3 3.4,1.6 7.6,3.6 3.4,2.1 1.6,2.4 1.9,4.4 4,2.6 -0.3,1.3 -3.9,3.2 -4.2,1.5 -1.5,-0.6 -3.1,1.8 -2.4,3.2 -2.3,2.9 -1.8,-0.2 -3.6,-2.6 -0.3,-4.5 0.6,-2.4 -1.6,-5.7 -2.1,-1.8 -0.2,-2.6 2.3,-1 2.1,-3.1 0.5,-1 -1.6,-1.8z"
    >
     <title>Hawaii</title>
    </path>
    <path
     name="Alabama"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M628.5,466.4 l0.6,0.2 1.3,-2.7 1.5,-4.4 2.3,0.6 3.1,6 v1 l-2.7,1.9 2.7,0.3 5.2,-2.5 -0.3,-7.6 -2.5,-1.8 -2,-2 0.4,-4 10.5,-1.5 25.7,-2.9 6.7,-0.6 5.6,0.1 -0.5,-2.2 -1.5,-0.8 -0.9,-1.1 1,-2.6 -0.4,-5.2 -1.6,-4.5 0.8,-5.1 1.7,-4.8 -0.2,-1.7 -1.8,-0.7 -0.5,-3.6 -2.7,-3.4 -2,-6.5 -1.4,-6.7 -1.8,-5 -3.8,-16 -3.5,-7.9 -0.8,-5.6 0.1,-2.2 -9,0.8 -23.4,2.2 -12.2,0.8 -0.2,6.4 0.2,16.7 -0.7,31 -0.3,14.1 2.8,18.8 1.6,14.7z"
    >
     <title>Alabama</title>
    </path>
    <path
     name="Arkansas"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M587.3,346.1 l-6.4,-0.7 0.9,-3.1 3.1,-2.6 0.6,-2.3 -1.8,-2.9 -31.9,1.2 -23.3,0.7 -23.6,0.3 1.5,6.9 0.1,8.5 1.4,10.9 0.3,38.2 2.1,1.6 3,-1.2 2.9,1.2 0.4,10.1 25.2,-0.2 26.8,-0.8 0.9,-1.9 -0.3,-3.8 -1.7,-3.1 1.5,-1.4 -1.4,-2.2 0.7,-2.4 1.1,-5.9 2.7,-2.3 -0.8,-2.2 4,-5.6 2.5,-1.1 -0.1,-1.7 -0.5,-1.7 2.9,-5.8 2.5,-1.1 0.2,-3.3 2.1,-1.4 0.9,-4.1 -1.4,-4 4.2,-2.4 0.3,-2.1 1.2,-4.2 0.9,-3.1z"
    >
     <title>Arkansas</title>
    </path>
    <path
     name="Arizona"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M135.1,389.7 l-0.3,1.5 0.5,1 18.9,10.7 12.1,7.6 14.7,8.6 16.8,10 12.3,2.4 25.4,2.7 6,-39.6 7,-53.1 4.4,-31 -24.6,-3.6 -60.7,-11 -0.2,1.1 -2.6,16.5 -2.1,3.8 -2.8,-0.2 -1.2,-2.6 -2.6,-0.4 -1.2,-1.1 -1.1,0.1 -2.1,1.7 -0.3,6.8 -0.3,1.5 -0.5,12.5 -1.5,2.4 -0.4,3.3 2.8,5 1.1,5.5 0.7,1.1 1.1,0.9 -0.4,2.4 -1.7,1.2 -3.4,1.6 -1.6,1.8 -1.6,3.6 -0.5,4.9 -3,2.9 -1.9,0.9 -0.1,5.8 -0.6,1.6 0.5,0.8 3.9,0.4 -0.9,3 -1.7,2.4 -3.7,0.4z"
    >
     <title>Arizona</title>
    </path>
    <path
     name="California"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M122.7,385.9 l-19.7,-2.7 -10,-1.5 -0.5,-1.8 v-9.4 l-0.3,-3.2 -2.6,-4.2 -0.8,-2.3 -3.9,-4.2 -2.9,-4.7 -2.7,-0.2 -3.2,-0.8 -0.3,-1 1.5,-0.6 -0.6,-3.2 -1.5,-2.1 -4.8,-0.8 -3.9,-2.1 -1.1,-2.3 -2.6,-4.8 -2.9,-3.1 h-2.9 l-3.9,-2.1 -4.5,-1.8 -4.2,-0.5 -2.4,-2.7 0.5,-1.9 1.8,-7.1 0.8,-1.9 v-2.4 l-1.6,-1 -0.5,-2.9 -1.5,-2.6 -3.4,-5.8 -1.3,-3.1 -1.5,-4.7 -1.6,-5.3 -3.2,-4.4 -0.5,-2.9 0.8,-3.9 h1.1 l2.1,-1.6 1.1,-3.6 -1,-2.7 -2.7,-0.5 -1.9,-2.6 -2.1,-3.7 -0.2,-8.2 0.6,-1.9 0.6,-2.3 0.5,-2.4 -5.7,-6.3 v-2.1 l0.3,-0.5 0.3,-3.2 -1.3,-4 -2.3,-4.8 -2.7,-4.5 -1.8,-3.9 1,-3.7 0.6,-5.8 1.8,-3.1 0.3,-6.5 -1.1,-3.6 -1.6,-4.2 -2.7,-4.2 0.8,-3.2 1.5,-4.2 1.8,-0.8 0.3,-1.1 3.1,-2.6 5.2,-11.8 0.2,-7.4 1.69,-4.9 38.69,11.8 25.6,6.6 -8,31.3 -8.67,33.1 12.63,19.2 42.16,62.3 17.1,26.1 -0.4,3.1 2.8,5.2 1.1,5.4 1,1.5 0.7,0.6 -0.2,1.4 -1.4,1 -3.4,1.6 -1.9,2.1 -1.7,3.9 -0.5,4.7 -2.6,2.5 -2.3,1.1 -0.1,6.2 -0.6,1.9 1,1.7 3,0.3 -0.4,1.6 -1.4,2 -3.9,0.6z m-73.9,-48.9 1.3,1.5 -0.2,1.3 -3.2,-0.1 -0.6,-1.2 -0.6,-1.5z m1.9,0 1.2,-0.6 3.6,2.1 3.1,1.2 -0.9,0.6 -4.5,-0.2 -1.6,-1.6z m20.7,19.8 1.8,2.3 0.8,1 1.5,0.6 0.6,-1.5 -1,-1.8 -2.7,-2 -1.1,0.2 v1.2z m-1.4,8.7 1.8,3.2 1.2,1.9 -1.5,0.2 -1.3,-1.2 c0,0 -0.7,-1.5 -0.7,-1.9 0,-0.4 0,-2.2 0,-2.2z"
    >
     <title>California</title>
    </path>
    <path
     name="Colorado"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M380.2,235.5 l-36,-3.5 -79.1,-8.6 -2.2,22.1 -7,50.4 -1.9,13.7 34,3.9 37.5,4.4 34.7,3 14.3,0.6z"
    >
     <title>Colorado</title>
    </path>
    <path
     name="Connecticut"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M852,190.9 l3.6,-3.2 1.9,-2.1 0.8,0.6 2.7,-1.5 5.2,-1.1 7,-3.5 -0.6,-4.2 -0.8,-4.4 -1.6,-6 -4.3,1.1 -21.8,4.7 0.6,3.1 1.5,7.3 v8.3 l-0.9,2.1 1.7,2.2z"
    >
     <title>Connecticut</title>
    </path>
    <path
     name="Delaware"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M834.4,247.2 l-1,0.5 -3.6,-2.4 -1.8,-4.7 -1.9,-3.6 -2.3,-1 -2.1,-3.6 0.5,-2 0.5,-2.3 0.1,-1.1 -0.6,0.1 -1.7,1 -2,1.7 -0.2,0.3 1.4,4.1 2.3,5.6 3.7,16.1 5,-0.3 6,-1.1z"
    >
     <title>Delaware</title>
    </path>
    <path
     name="Florida"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M750.2,445.2 l-5.2,-0.7 -0.7,0.8 1.5,4.4 -0.4,5.2 -4.1,-1 -0.2,-2.8 h-4.1 l-5.3,0.7 -32.4,1.9 -8.2,-0.3 -1.7,-1.7 -2.5,-4.2 h-5.9 l-6.6,0.5 -35.4,4.2 -0.3,2.8 1.6,1.6 2.9,2 0.3,8.4 3.3,-0.6 6,-2.1 6,-0.5 4.4,-0.6 7.6,1.8 8.1,3.9 1.6,1.5 2.9,1.1 1.6,1.9 0.3,2.7 3.2,-1.3 h3.9 l3.6,-1.9 3.7,-3.6 3.1,0.2 0.5,-1.1 -0.8,-1 0.2,-1.9 4,-0.8 h2.6 l2.9,1.5 4.2,1.5 2.4,3.7 2.7,1 1.1,3.4 3.4,1.6 1.6,2.6 1.9,0.6 5.2,1.3 1.3,3.1 3,3.7 v9.5 l-1.5,4.7 0.3,2.7 1.3,4.8 1.8,4 0.8,-0.5 1.5,-4.5 -2.6,-1 -0.3,-0.6 1.6,-0.6 4.5,1 0.2,1.6 -3.2,5.5 -2.1,2.4 3.6,3.7 2.6,3.1 2.9,5.3 2.9,3.9 2.1,5 1.8,0.3 1.6,-2.1 1.8,1.1 2.6,4 0.6,3.6 3.1,4.4 0.8,-1.3 3.9,0.3 3.6,2.3 3.4,5.2 0.8,3.4 0.3,2.9 1.1,1 1.3,0.5 2.4,-1 1.5,-1.6 3.9,-0.2 3.1,-1.5 2.7,-3.2 -0.5,-1.9 -0.3,-2.4 0.6,-1.9 -0.3,-1.9 2.4,-1.3 0.3,-3.4 -0.6,-1.8 -0.5,-12 -1.3,-7.6 -4.5,-8.2 -3.6,-5.8 -2.6,-5.3 -2.9,-2.9 -2.9,-7.4 0.7,-1.4 1.1,-1.3 -1.6,-2.9 -4,-3.7 -4.8,-5.5 -3.7,-6.3 -5.3,-9.4 -3.7,-9.7 -2.3,-7.3z m17.7,132.7 2.4,-0.6 1.3,-0.2 1.5,-2.3 2.3,-1.6 1.3,0.5 1.7,0.3 0.4,1.1 -3.5,1.2 -4.2,1.5 -2.3,1.2z m13.5,-5 1.2,1.1 2.7,-2.1 5.3,-4.2 3.7,-3.9 2.5,-6.6 1,-1.7 0.2,-3.4 -0.7,0.5 -1,2.8 -1.5,4.6 -3.2,5.3 -4.4,4.2 -3.4,1.9z"
    >
     <title>Florida</title>
    </path>
    <path
     name="Georgia"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M750.2,444.2 l-5.6,-0.7 -1.4,1.6 1.6,4.7 -0.3,3.9 -2.2,-0.6 -0.2,-3 h-5.2 l-5.3,0.7 -32.3,1.9 -7.7,-0.3 -1.4,-1.2 -2.5,-4.3 -0.8,-3.3 -1.6,-0.9 -0.5,-0.5 0.9,-2.2 -0.4,-5.5 -1.6,-4.5 0.8,-4.9 1.7,-4.8 -0.2,-2.5 -1.9,-0.7 -0.4,-3.2 -2.8,-3.5 -1.9,-6.2 -1.5,-7 -1.7,-4.8 -3.8,-16 -3.5,-8 -0.8,-5.3 0.1,-2.3 3.3,-0.3 13.6,-1.6 18.6,-2 6.3,-1.1 0.5,1.4 -2.2,0.9 -0.9,2.2 0.4,2 1.4,1.6 4.3,2.7 3.2,-0.1 3.2,4.7 0.6,1.6 2.3,2.8 0.5,1.7 4.7,1.8 3,2.2 2.3,3 2.3,1.3 2,1.8 1.4,2.7 2.1,1.9 4.1,1.8 2.7,6 1.7,5.1 2.8,0.7 2.1,1.9 2,5.7 2.9,1.6 1.7,-0.8 0.4,1.2 -3.3,6.2 0.5,2.6 -1.5,4.2 -2.3,10 0.8,6.3z"
    >
     <title>Georgia</title>
    </path>
    <path
     name="Iowa"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M556.8,183.6 l2.1,2.1 0.3,0.7 -2,3 0.3,4 2.6,4.1 3.1,1.6 2.4,0.3 0.9,1.8 0.2,2.4 2.5,1 0.9,1.1 0.5,1.6 3.8,3.3 0.6,1.9 -0.7,3 -1.7,3.7 -0.6,2.4 -2.1,1.6 -1.6,0.5 -5.7,1.5 -1.6,4.8 0.8,1.8 1.7,1.5 -0.2,3.5 -1.9,1.4 -0.7,1.8 v2.4 l-1.4,0.4 -1.7,1.4 -0.5,1.7 0.4,1.7 -1.3,1 -2.3,-2.7 -1.4,-2.8 -8.3,0.8 -10,0.6 -49.2,1.2 -1.6,-4.3 -0.4,-6.7 -1.4,-4.2 -0.7,-5.2 -2.2,-3.7 -1,-4.6 -2.7,-7.8 -1.1,-5.6 -1.4,-1.9 -1.3,-2.9 1.7,-3.8 1.2,-6.1 -2.7,-2.2 -0.3,-2.4 0.7,-2.4 1.8,-0.3 61.1,-0.6 21.2,-0.7z"
    >
     <title>Iowa</title>
    </path>
    <path
     name="Idaho"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M175.3,27.63 l-4.8,17.41 -4.5,20.86 -3.4,16.22 -0.4,9.67 1.2,4.44 3.5,2.66 -0.2,3.91 -3.9,4.4 -4.5,6.6 -0.9,2.9 -1.2,1.1 -1.8,0.8 -4.3,5.3 -0.4,3.1 -0.4,1.1 0.6,1 2.6,-0.1 1.1,2.3 -2.4,5.8 -1.2,4.2 -8.8,35.3 20.7,4.5 39.5,7.9 34.8,6.1 4.9,-29.2 3.8,-24.1 -2.7,-2.4 -0.4,-2.6 -0.8,-1.1 -2.1,1 -0.7,2.6 -3.2,0.5 -3.9,-1.6 -3.8,0.1 -2.5,0.7 -3.4,-1.5 -2.4,0.2 -2.4,2 -2,-1.1 -0.7,-4 0.7,-2.9 -2.5,-2.9 -3.3,-2.6 -2.7,-13.1 -0.1,-4.7 -0.3,-0.1 -0.2,0.4 -5.1,3.5 -1.7,-0.2 -2.9,-3.4 -0.2,-3.1 7,-17.13 -0.4,-1.94 -3.4,-1.15 -0.6,-1.18 -2.6,-3.46 -4.6,-10.23 -3.2,-1.53 -2,-4.95 1.3,-4.63 -3.2,-7.58 4.4,-21.52z"
    >
     <title>Idaho</title>
    </path>
    <path
     name="Illinois"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M618.7,214.3 l-0.8,-2.6 -1.3,-3.7 -1.6,-1.8 -1.5,-2.6 -0.4,-5.5 -15.9,1.8 -17.4,1 h-12.3 l0.2,2.1 2.2,0.9 1.1,1.4 0.4,1.4 3.9,3.4 0.7,2.4 -0.7,3.3 -1.7,3.7 -0.8,2.7 -2.4,1.9 -1.9,0.6 -5.2,1.3 -1.3,4.1 0.6,1.1 1.9,1.8 -0.2,4.3 -2.1,1.6 -0.5,1.3 v2.8 l-1.8,0.6 -1.4,1.2 -0.4,1.2 0.4,2 -1.6,1.3 -0.9,2.8 0.3,3.9 2.3,7 7,7.6 5.7,3.7 v4.4 l0.7,1.2 6.6,0.6 2.7,1.4 -0.7,3.5 -2.2,6.2 -0.8,3 2,3.7 6.4,5.3 4.8,0.8 2.2,5.1 2,3.4 -0.9,2.8 1.5,3.8 1.7,2.1 1.6,-0.3 1,-2.2 2.4,-1.7 2.8,-1 6.1,2.5 0.5,-0.2 v-1.1 l-1.2,-2.7 0.4,-2.8 2.4,-1.6 3.4,-1.2 -0.5,-1.3 -0.8,-2 1.2,-1.3 1,-2.7 v-4 l0.4,-4.9 2.5,-3 1.8,-3.8 2.5,-4 -0.5,-5.3 -1.8,-3.2 -0.3,-3.3 0.8,-5.3 -0.7,-7.2 -1.1,-15.8 -1.4,-15.3 -0.9,-11.7z"
    >
     <title>Illinois</title>
    </path>
    <path
     name="Indiana"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M622.9,216.1 l1.5,1 1.1,-0.3 2.1,-1.9 2.5,-1.8 14.3,-1.1 18.4,-1.8 1.6,15.5 4.9,42.6 -0.6,2.9 1.3,1.6 0.2,1.3 -2.3,1.6 -3.6,1.7 -3.2,0.4 -0.5,4.8 -4.7,3.6 -2.9,4 0.2,2.4 -0.5,1.4 h-3.5 l-1.4,-1.7 -5.2,3 0.2,3.1 -0.9,0.2 -0.5,-0.9 -2.4,-1.7 -3.6,1.5 -1.4,2.9 -1.2,-0.6 -1.6,-1.8 -4.4,0.5 -5.7,1 -2.5,1.3 v-2.6 l0.4,-4.7 2.3,-2.9 1.8,-3.9 2.7,-4.2 -0.5,-5.8 -1.8,-3.1 -0.3,-3.2 0.8,-5.3 -0.7,-7.1 -0.9,-12.6 -2.5,-30.1z"
    >
     <title>Indiana</title>
    </path>
    <path
     name="Kansas"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M485.9,259.5 l-43.8,-0.6 -40.6,-1.2 -21.7,-0.9 -4.3,64.8 24.3,1 44.7,2.1 46.3,0.6 12.6,-0.3 0.7,-35 -1.2,-11.1 -2.5,-2 -2.4,-3 -2.3,-3.6 0.6,-3 1.7,-1.4 v-2.1 l-0.8,-0.7 -2.6,-0.2 -3.5,-3.4z"
    >
     <title>Kansas</title>
    </path>
    <path
     name="Kentucky"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M607.2,331.8 l12.6,-0.7 0.1,-4.1 h4.3 l30.4,-3.2 45.1,-4.3 5.6,-3.6 3.9,-2.1 0.1,-1.9 6,-7.8 4.1,-3.6 2.1,-2.4 -3.3,-2 -2.5,-2.7 -3,-3.8 -0.5,-2.2 -2.6,-1.4 -0.9,-1.9 -0.2,-6.1 -2.6,-2 -1.9,-1.1 -0.5,-2.3 -1.3,0.2 -2,1.2 -2.5,2.7 -1.9,-1.7 -2.5,-0.5 -2.4,1.4 h-2.3 l-1.8,-2 -5.6,-0.1 -1.8,-4.5 -2.9,-1.5 -2.1,0.8 -4.2,0.2 -0.5,2.1 1.2,1.5 0.3,2.1 -2.8,2 -3.8,1.8 -2.6,0.4 -0.5,4.5 -4.9,3.6 -2.6,3.7 0.2,2.2 -0.9,2.3 -4.5,-0.1 -1.3,-1.3 -3.9,2.2 0.2,3.3 -2.4,0.6 -0.8,-1.4 -1.7,-1.2 -2.7,1.1 -1.8,3.5 -2.2,-1 -1.4,-1.6 -3.7,0.4 -5.6,1 -2.8,1.3 -1.2,3.4 -1,1 1.5,3.7 -4.2,1.4 -1.9,1.4 -0.4,2.2 1.2,2.4 v2.2 l-1.6,0.4 -6.1,-2.5 -2.3,0.9 -2,1.4 -0.8,1.8 1.7,2.4 -0.9,1.8 -0.1,3.3 -2.4,1.3 -2.1,1.7z"
    >
     <title>Kentucky</title>
    </path>
    <path
     name="Louisiana"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M526.9,485.9 l8.1,-0.3 10.3,3.6 6.5,1.1 3.7,-1.5 3.2,1.1 3.2,1 0.8,-2.1 -3.2,-1.1 -2.6,0.5 -2.7,-1.6 0.8,-1.5 3.1,-1 1.8,1.5 1.8,-1 3.2,0.6 1.5,2.4 0.3,2.3 4.5,0.3 1.8,1.8 -0.8,1.6 -1.3,0.8 1.6,1.6 8.4,3.6 3.6,-1.3 1,-2.4 2.6,-0.6 1.8,-1.5 1.3,1 0.8,2.9 -2.3,0.8 0.6,0.6 3.4,-1.3 2.3,-3.4 0.8,-0.5 -2.1,-0.3 0.8,-1.6 -0.2,-1.5 2.1,-0.5 1.1,-1.3 0.6,0.8 0.6,3.1 4.2,0.6 4,1.9 1,1.5 h2.9 l1.1,1 2.3,-3.1 v-1.5 h-1.3 l-3.4,-2.7 -5.8,-0.8 -3.2,-2.3 1.1,-2.7 2.3,0.3 0.2,-0.6 -1.8,-1 v-0.5 h3.2 l1.8,-3.1 -1.3,-1.9 -0.3,-2.7 -1.5,0.2 -1.9,2.1 -0.6,2.6 -3.1,-0.6 -1,-1.8 1.8,-1.9 1.9,-1.7 -2.2,-6.5 -3.4,-3.4 1,-7.3 -0.2,-0.5 -1.3,0.2 -33.1,1.4 -0.8,-2.4 0.8,-8.5 8.6,-14.8 -0.9,-2.6 1.4,-0.4 0.4,-2 -2.2,-2 0.1,-1.9 -2,-4.5 -0.4,-5.1 0.1,-0.7 -26.4,0.8 -25.2,0.1 0.4,9.7 0.7,9.5 0.5,3.7 2.6,4.5 0.9,4.4 4.3,6 0.3,3.1 0.6,0.8 -0.7,8.3 -2.8,4.6 1.2,2.4 -0.5,2.6 -0.8,7.3 -1.3,3 0.2,3.7z"
    >
     <title>Louisiana</title>
    </path>
    <path
     name="Massachusetts"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M887.5,172.5 l-0.5,-2.3 0.8,-1.5 2.9,-1.5 0.8,3.1 -0.5,1.8 -2.4,1.5 v1 l1.9,-1.5 3.9,-4.5 3.9,-1.9 4.2,-1.5 -0.3,-2.4 -1,-2.9 -1.9,-2.4 -1.8,-0.8 -2.1,0.2 -0.5,0.5 1,1.3 1.5,-0.8 2.1,1.6 0.8,2.7 -1.8,1.8 -2.3,1 -3.6,-0.5 -3.9,-6 -2.3,-2.6 h-1.8 l-1.1,0.8 -1.9,-2.6 0.3,-1.5 2.4,-5.2 -2.9,-4.4 -3.7,1.8 -1.8,2.9 -18.3,4.7 -13.8,2.5 -0.6,10.6 0.7,4.9 22,-4.8 11.2,-2.8 2,1.6 3.4,4.3 2.9,4.7z m12.5,1.4 2.2,-0.7 0.5,-1.7 1,0.1 1,2.3 -1.3,0.5 -3.9,0.1z m-9.4,0.8 2.3,-2.6 h1.6 l1.8,1.5 -2.4,1 -2.2,1z"
    >
     <title>Massachusetts</title>
    </path>
    <path
     name="Maryland"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M834.8,264.1 l1.7,-3.8 0.5,-4.8 -6.3,1.1 -5.8,0.3 -3.8,-16.8 -2.3,-5.5 -1.5,-4.6 -22.2,4.3 -37.6,7.6 2,10.4 4.8,-4.9 2.5,-0.7 1.4,-1.5 1.8,-2.7 1.6,0.7 2.6,-0.2 2.6,-2.1 2,-1.5 2.1,-0.6 1.5,1.1 2.7,1.4 1.9,1.8 1.3,1.4 4.8,1.6 -0.6,2.9 5.8,2.1 2.1,-2.6 3.7,2.5 -2.1,3.3 -0.7,3.3 -1.8,2.6 v2.1 l0.3,0.8 2,1.3 3.4,1.1 4.3,-0.1 3.1,1 2.1,0.3 1,-2.1 -1.5,-2.1 v-1.8 l-2.4,-2.1 -2.1,-5.5 1.3,-5.3 -0.2,-2.1 -1.3,-1.3 c0,0 1.5,-1.6 1.5,-2.3 0,-0.6 0.5,-2.1 0.5,-2.1 l1.9,-1.3 1.9,-1.6 0.5,1 -1.5,1.6 -1.3,3.7 0.3,1.1 1.8,0.3 0.5,5.5 -2.1,1 0.3,3.6 0.5,-0.2 1.1,-1.9 1.6,1.8 -1.6,1.3 -0.3,3.4 2.6,3.4 3.9,0.5 1.6,-0.8 3.2,4.2 1,0.4z m-14.5,0.2 1.1,2.5 0.2,1.8 1.1,1.9 c0,0 0.9,-0.9 0.9,-1.2 0,-0.3 -0.7,-3.1 -0.7,-3.1 l-0.7,-2.3z"
    >
     <title>Maryland</title>
    </path>
    <path
     name="Maine"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M865.8,91.9 l1.5,0.4 v-2.6 l0.8,-5.5 2.6,-4.7 1.5,-4 -1.9,-2.4 v-6 l0.8,-1 0.8,-2.7 -0.2,-1.5 -0.2,-4.8 1.8,-4.8 2.9,-8.9 2.1,-4.2 h1.3 l1.3,0.2 v1.1 l1.3,2.3 2.7,0.6 0.8,-0.8 v-1 l4,-2.9 1.8,-1.8 1.5,0.2 6,2.4 1.9,1 9.1,29.9 h6 l0.8,1.9 0.2,4.8 2.9,2.3 h0.8 l0.2,-0.5 -0.5,-1.1 2.8,-0.5 1.9,2.1 2.3,3.7 v1.9 l-2.1,4.7 -1.9,0.6 -3.4,3.1 -4.8,5.5 c0,0 -0.6,0 -1.3,0 -0.6,0 -1,-2.1 -1,-2.1 l-1.8,0.2 -1,1.5 -2.4,1.5 -1,1.5 1.6,1.5 -0.5,0.6 -0.5,2.7 -1.9,-0.2 v-1.6 l-0.3,-1.3 -1.5,0.3 -1.8,-3.2 -2.1,1.3 1.3,1.5 0.3,1.1 -0.8,1.3 0.3,3.1 0.2,1.6 -1.6,2.6 -2.9,0.5 -0.3,2.9 -5.3,3.1 -1.3,0.5 -1.6,-1.5 -3.1,3.6 1,3.2 -1.5,1.3 -0.2,4.4 -1.1,6.3 -2.2,-0.9 -0.5,-3.1 -4,-1.1 -0.2,-2.5 -11.7,-37.43z m36.5,15.6 1.5,-1.5 1.4,1.1 0.6,2.4 -1.7,0.9z m6.7,-5.9 1.8,1.9 c0,0 1.3,0.1 1.3,-0.2 0,-0.3 0.2,-2 0.2,-2 l0.9,-0.8 -0.8,-1.8 -2,0.7z"
    >
     <title>Maine</title>
    </path>
    <path
     name="Michigan"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M644.5,211 l19.1,-1.9 0.2,1.1 9.9,-1.5 12,-1.7 0.1,-0.6 0.2,-1.5 2.1,-3.7 2,-1.7 -0.2,-5.1 1.6,-1.6 1.1,-0.3 0.2,-3.6 1.5,-3 1.1,0.6 0.2,0.6 0.8,0.2 1.9,-1 -0.4,-9.1 -3.2,-8.2 -2.3,-9.1 -2.4,-3.2 -2.6,-1.8 -1.6,1.1 -3.9,1.8 -1.9,5 -2.7,3.7 -1.1,0.6 -1.5,-0.6 c0,0 -2.6,-1.5 -2.4,-2.1 0.2,-0.6 0.5,-5 0.5,-5 l3.4,-1.3 0.8,-3.4 0.6,-2.6 2.4,-1.6 -0.3,-10 -1.6,-2.3 -1.3,-0.8 -0.8,-2.1 0.8,-0.8 1.6,0.3 0.2,-1.6 -2.6,-2.2 -1.3,-2.6 h-2.6 l-4.5,-1.5 -5.5,-3.4 h-2.7 l-0.6,0.6 -1,-0.5 -3.1,-2.3 -2.9,1.8 -2.9,2.3 0.3,3.6 1,0.3 2.1,0.5 0.5,0.8 -2.6,0.8 -2.6,0.3 -1.5,1.8 -0.3,2.1 0.3,1.6 0.3,5.5 -3.6,2.1 -0.6,-0.2 v-4.2 l1.3,-2.4 0.6,-2.4 -0.8,-0.8 -1.9,0.8 -1,4.2 -2.7,1.1 -1.8,1.9 -0.2,1 0.6,0.8 -0.6,2.6 -2.3,0.5 v1.1 l0.8,2.4 -1.1,6.1 -1.6,4 0.6,4.7 0.5,1.1 -0.8,2.4 -0.3,0.8 -0.3,2.7 3.6,6 2.9,6.5 1.5,4.8 -0.8,4.7 -1,6 -2.4,5.2 -0.3,2.7 -3.2,3.1z m-33.3,-72.4 -1.3,-1.1 -1.8,-10.4 -3.7,-1.3 -1.7,-2.3 -12.6,-2.8 -2.8,-1.1 -8.1,-2.2 -7.8,-1 -3.9,-5.3 0.7,-0.5 2.7,-0.8 3.6,-2.3 v-1 l0.6,-0.6 6,-1 2.4,-1.9 4.4,-2.1 0.2,-1.3 1.9,-2.9 1.8,-0.8 1.3,-1.8 2.3,-2.3 4.4,-2.4 4.7,-0.5 1.1,1.1 -0.3,1 -3.7,1 -1.5,3.1 -2.3,0.8 -0.5,2.4 -2.4,3.2 -0.3,2.6 0.8,0.5 1,-1.1 3.6,-2.9 1.3,1.3 h2.3 l3.2,1 1.5,1.1 1.5,3.1 2.7,2.7 3.9,-0.2 1.5,-1 1.6,1.3 1.6,0.5 1.3,-0.8 h1.1 l1.6,-1 4,-3.6 3.4,-1.1 6.6,-0.3 4.5,-1.9 2.6,-1.3 1.5,0.2 v5.7 l0.5,0.3 2.9,0.8 1.9,-0.5 6.1,-1.6 1.1,-1.1 1.5,0.5 v7 l3.2,3.1 1.3,0.6 1.3,1 -1.3,0.3 -0.8,-0.3 -3.7,-0.5 -2.1,0.6 -2.3,-0.2 -3.2,1.5 h-1.8 l-5.8,-1.3 -5.2,0.2 -1.9,2.6 -7,0.6 -2.4,0.8 -1.1,3.1 -1.3,1.1 -0.5,-0.2 -1.5,-1.6 -4.5,2.4 h-0.6 l-1.1,-1.6 -0.8,0.2 -1.9,4.4 -1,4 -3.2,6.9z m-29.6,-56.5 1.8,-2.1 2.2,-0.8 5.4,-3.9 2.3,-0.6 0.5,0.5 -5.1,5.1 -3.3,1.9 -2.1,0.9z m86.2,32.1 0.6,2.5 3.2,0.2 1.3,-1.2 c0,0 -0.1,-1.5 -0.4,-1.6 -0.3,-0.2 -1.6,-1.9 -1.6,-1.9 l-2.2,0.2 -1.6,0.2 -0.3,1.1z"
    >
     <title>Michigan</title>
    </path>
    <path
     name="Minnesota"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M464.6,66.79 l-0.6,3.91 v10.27 l1.6,5.03 1.9,3.32 0.5,9.93 1.8,13.45 1.8,7.3 0.4,6.4 v5.3 l-1.6,1.8 -1.8,1.3 v1.5 l0.9,1.7 4.1,3.5 0.7,3.2 v35.9 l60.3,-0.6 21.2,-0.7 -0.5,-6 -1.8,-2.1 -7.2,-4.6 -3.6,-5.3 -3.4,-0.9 -2,-2.8 h-3.2 l-3.5,-3.8 -0.5,-7 0.1,-3.9 1.5,-3 -0.7,-2.7 -2.8,-3.1 2.2,-6.1 5.4,-4 1.2,-1.4 -0.2,-8 0.2,-3 2.6,-3 3.8,-2.9 1.3,-0.2 4.5,-5 1.8,-0.8 2.3,-3.9 2.4,-3.6 3.1,-2.6 4.8,-2 9.2,-4.1 3.9,-1.8 0.6,-2.3 -4.4,0.4 -0.7,1.1 h-0.6 l-1.8,-3.1 -8.9,0.3 -1,0.8 h-1 l-0.5,-1.3 -0.8,-1.8 -2.6,0.5 -3.2,3.2 -1.6,0.8 h-3.1 l-2.6,-1 v-2.1 l-1.3,-0.2 -0.5,0.5 -2.6,-1.3 -0.5,-2.9 -1.5,0.5 -0.5,1 -2.4,-0.5 -5.3,-2.4 -3.9,-2.6 h-2.9 l-1.3,-1 -2.3,0.6 -1.1,1.1 -0.3,1.3 h-4.8 v-2.1 l-6.3,-0.3 -0.3,-1.5 h-4.8 l-1.6,-1.6 -1.5,-6.1 -0.8,-5.5 -1.9,-0.8 -2.3,-0.5 -0.6,0.2 -0.3,8.2 -30.1,-0.03z"
    >
     <title>Minnesota</title>
    </path>
    <path
     name="Missouri"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M593.1,338.7 l0.5,-5.9 4.2,-3.4 1.9,-1 v-2.9 l0.7,-1.6 -1.1,-1.6 -2.4,0.3 -2.1,-2.5 -1.7,-4.5 0.9,-2.6 -2,-3.2 -1.8,-4.6 -4.6,-0.7 -6.8,-5.6 -2.2,-4.2 0.8,-3.3 2.2,-6 0.6,-3 -1.9,-1 -6.9,-0.6 -1.1,-1.9 v-4.1 l-5.3,-3.5 -7.2,-7.8 -2.3,-7.3 -0.5,-4.2 0.7,-2.4 -2.6,-3.1 -1.2,-2.4 -7.7,0.8 -10,0.6 -48.8,1.2 1.3,2.6 -0.1,2.2 2.3,3.6 3,3.9 3.1,3 2.6,0.2 1.4,1.1 v2.9 l-1.8,1.6 -0.5,2.3 2.1,3.2 2.4,3 2.6,2.1 1.3,11.6 -0.8,40 0.5,5.7 23.7,-0.2 23.3,-0.7 32.5,-1.3 2.2,3.7 -0.8,3.1 -3.1,2.5 -0.5,1.8 5.2,0.5 4.1,-1.1z"
    >
     <title>Missouri</title>
    </path>
    <path
     name="Mississippi"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M604.3,472.5 l2.6,-4.2 1.8,0.8 6.8,-1.9 2.1,0.3 1.5,0.8 h5.2 l0.4,-1.6 -1.7,-14.8 -2.8,-19 1,-45.1 -0.2,-16.7 0.2,-6.3 -4.8,0.3 -19.6,1.6 -13,0.4 -0.2,3.2 -2.8,1.3 -2.6,5.1 0.5,1.6 0.1,2.4 -2.9,1.1 -3.5,5.1 0.8,2.3 -3,2.5 -1,5.7 -0.6,1.9 1.6,2.5 -1.5,1.4 1.5,2.8 0.3,4.2 -1.2,2.5 -0.2,0.9 0.4,5 2,4.5 -0.1,1.7 2.3,2 -0.7,3.1 -0.9,0.3 0.6,1.9 -8.6,15 -0.8,8.2 0.5,1.5 24.2,-0.7 8.2,-0.7 1.9,-0.3 0.6,1.4 -1,7.1 3.3,3.3 2.2,6.4z"
    >
     <title>Mississippi</title>
    </path>
    <path
     name="Montana"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M361.1,70.77 l-5.3,57.13 -1.3,15.2 -59.1,-6.6 -49,-7.1 -1.4,11.2 -1.9,-1.7 -0.4,-2.5 -1.3,-1.9 -3.3,1.5 -0.7,2.5 -2.3,0.3 -3.8,-1.6 -4.1,0.1 -2.4,0.7 -3.2,-1.5 -3,0.2 -2.1,1.9 -0.9,-0.6 -0.7,-3.4 0.7,-3.2 -2.7,-3.2 -3.3,-2.5 -2.5,-12.6 -0.1,-5.3 -1.6,-0.8 -0.6,1 -4.5,3.2 -1.2,-0.1 -2.3,-2.8 -0.2,-2.8 7,-17.15 -0.6,-2.67 -3.5,-1.12 -0.4,-0.91 -2.7,-3.5 -4.6,-10.41 -3.2,-1.58 -1.8,-4.26 1.3,-4.63 -3.2,-7.57 4.4,-21.29 32.7,6.89 18.4,3.4 32.3,5.3 29.3,4 29.2,3.5 30.8,3.07z"
    >
     <title>Montana</title>
    </path>
    <path
     name="North Carolina"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M786.7,357.7 l-12.7,-7.7 -3.1,-0.8 -16.6,2.1 -1.6,-3 -2.8,-2.2 -16.7,0.5 -7.4,0.9 -9.2,4.5 -6.8,2.7 -6.5,1.2 -13.4,1.4 0.1,-4.1 1.7,-1.3 2.7,-0.7 0.7,-3.8 3.9,-2.5 3.9,-1.5 4.5,-3.7 4.4,-2.3 0.7,-3.2 4.1,-3.8 0.7,1 2.5,0.2 2.4,-3.6 1.7,-0.4 2.6,0.3 1.8,-4 2.5,-2.4 0.5,-1.8 0.1,-3.5 4.4,0.1 38.5,-5.6 57.5,-12.3 2,4.8 3.6,6.5 2.4,2.4 0.6,2.3 -2.4,0.2 0.8,0.6 -0.3,4.2 -2.6,1.3 -0.6,2.1 -1.3,2.9 -3.7,1.6 -2.4,-0.3 -1.5,-0.2 -1.6,-1.3 0.3,1.3 v1 h1.9 l0.8,1.3 -1.9,6.3 h4.2 l0.6,1.6 2.3,-2.3 1.3,-0.5 -1.9,3.6 -3.1,4.8 h-1.3 l-1.1,-0.5 -2.7,0.6 -5.2,2.4 -6.5,5.3 -3.4,4.7 -1.9,6.5 -0.5,2.4 -4.7,0.5 -5.1,1.5z m49.3,-26.2 2.6,-2.5 3.2,-2.6 1.5,-0.6 0.2,-2 -0.6,-6.1 -1.5,-2.3 -0.6,-1.9 0.7,-0.2 2.7,5.5 0.4,4.4 -0.2,3.4 -3.4,1.5 -2.8,2.4 -1.1,1.2z"
    >
     <title>North Carolina</title>
    </path>
    <path
     name="North Dakota"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M471,126.4 l-0.4,-6.2 -1.8,-7.3 -1.8,-13.61 -0.5,-9.7 -1.9,-3.18 -1.6,-5.32 v-10.41 l0.6,-3.85 -1.8,-5.54 -28.6,-0.59 -18.6,-0.6 -26.5,-1.3 -25.2,-2.16 -0.9,14.42 -4.7,50.94 56.8,3.9 56.9,1.7z"
    >
     <title>North Dakota</title>
    </path>
    <path
     name="Nebraska"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M470.3,204.3 l-1,-2.3 -0.5,-1.6 -2.9,-1.6 -4.8,-1.5 -2.2,-1.2 -2.6,0.1 -3.7,0.4 -4.2,1.2 -6,-4.1 -2.2,-2 -10.7,0.6 -41.5,-2.4 -35.6,-2.2 -4.3,43.7 33.1,3.3 -1.4,21.1 21.7,1 40.6,1.2 43.8,0.6 h4.5 l-2.2,-3 -2.6,-3.9 0.1,-2.3 -1.4,-2.7 -1.9,-5.2 -0.4,-6.7 -1.4,-4.1 -0.5,-5 -2.3,-3.7 -1,-4.7 -2.8,-7.9 -1,-5.3z"
    >
     <title>Nebraska</title>
    </path>
    <path
     name="New Hampshire"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M881.7,141.3 l1.1,-3.2 -2.7,-1.2 -0.5,-3.1 -4.1,-1.1 -0.3,-3 -11.7,-37.48 -0.7,0.08 -0.6,1.6 -0.6,-0.5 -1,-1 -1.5,1.9 -0.2,2.29 0.5,8.41 1.9,2.8 v4.3 l-3.9,4.8 -2.4,0.9 v0.7 l1.1,1.9 v8.6 l-0.8,9.2 -0.2,4.7 1,1.4 -0.2,4.7 -0.5,1.5 1,1.1 5.1,-1.2 13.8,-3.5 1.7,-2.9 4,-1.9z"
    >
     <title>New Hampshire</title>
    </path>
    <path
     name="New Jersey"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M823.7,228.3 l0.1,-1.5 2.7,-1.3 1.7,-2.8 1.7,-2.4 3.3,-3.2 v-1.2 l-6.1,-4.1 -1,-2.7 -2.7,-0.3 -0.1,-0.9 -0.7,-2.2 2.2,-1.1 0.2,-2.9 -1.3,-1.3 0.2,-1.2 1.9,-3.1 v-3.1 l2.5,-3.1 5.6,2.5 6.4,1.9 2.5,1.2 0.1,1.8 -0.5,2.7 0.4,4.5 -2.1,1.9 -1.1,1 0.5,0.5 2.7,-0.3 1.1,-0.8 1.6,3.4 0.2,9.4 0.6,1.1 -1.1,5.5 -3.1,6.5 -2.7,4 -0.8,4.8 -2.1,2.4 h-0.8 l-0.3,-2.7 0.8,-1 -0.2,-1.5 -4,-0.6 -4.8,-2.3 -3.2,-2.9 -1,-2z"
    >
     <title>New Jersey</title>
    </path>
    <path
     name="New Mexico"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M270.2,429.4 l-16.7,-2.6 -1.2,9.6 -15.8,-2 6,-39.7 7,-53.2 4.4,-30.9 34,3.9 37.4,4.4 32,2.8 -0.3,10.8 -1.4,-0.1 -7.4,97.7 -28.4,-1.8 -38.1,-3.7 0.7,6.3z"
    >
     <title>New Mexico</title>
    </path>
    <path
     name="Nevada"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M123.1,173.6 l38.7,8.5 26,5.2 -10.6,53.1 -5.4,29.8 -3.3,15.5 -2.1,11.1 -2.6,16.4 -1.7,3.1 -1.6,-0.1 -1.2,-2.6 -2.8,-0.5 -1.3,-1.1 -1.8,0.1 -0.9,0.8 -1.8,1.3 -0.3,7.3 -0.3,1.5 -0.5,12.4 -1.1,1.8 -16.7,-25.5 -42.1,-62.1 -12.43,-19 8.55,-32.6 8.01,-31.3z"
    >
     <title>Nevada</title>
    </path>
    <path
     name="New York"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M843.4,200 l0.5,-2.7 -0.2,-2.4 -3,-1.5 -6.5,-2 -6,-2.6 -0.6,-0.4 -2.7,-0.3 -2,-1.5 -2.1,-5.9 -3.3,-0.5 -2.4,-2.4 -38.4,8.1 -31.6,6 -0.5,-6.5 1.6,-1.2 1.3,-1.1 1,-1.6 1.8,-1.1 1.9,-1.8 0.5,-1.6 2.1,-2.7 1.1,-1 -0.2,-1 -1.3,-3.1 -1.8,-0.2 -1.9,-6.1 2.9,-1.8 4.4,-1.5 4,-1.3 3.2,-0.5 6.3,-0.2 1.9,1.3 1.6,0.2 2.1,-1.3 2.6,-1.1 5.2,-0.5 2.1,-1.8 1.8,-3.2 1.6,-1.9 h2.1 l1.9,-1.1 0.2,-2.3 -1.5,-2.1 -0.3,-1.5 1.1,-2.1 v-1.5 h-1.8 l-1.8,-0.8 -0.8,-1.1 -0.2,-2.6 5.8,-5.5 0.6,-0.8 1.5,-2.9 2.9,-4.5 2.7,-3.7 2.1,-2.4 2.4,-1.8 3.1,-1.2 5.5,-1.3 3.2,0.2 4.5,-1.5 7.4,-2.2 0.7,4.9 2.4,6.5 0.8,5 -1,4.2 2.6,4.5 0.8,2 -0.9,3.2 3.7,1.7 2.7,10.2 v5.8 l-0.6,10.9 0.8,5.4 0.7,3.6 1.5,7.3 v8.1 l-1.1,2.3 2.1,2.7 0.5,0.9 -1.9,1.8 0.3,1.3 1.3,-0.3 1.5,-1.3 2.3,-2.6 1.1,-0.6 1.6,0.6 2.3,0.2 7.9,-3.9 2.9,-2.7 1.3,-1.5 4.2,1.6 -3.4,3.6 -3.9,2.9 -7.1,5.3 -2.6,1 -5.8,1.9 -4,1.1 -1,-0.4z"
    >
     <title>New York</title>
    </path>
    <path
     name="Ohio"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M663.8,211.2 l1.7,15.5 4.8,41.1 3.9,-0.2 2.3,-0.8 3.6,1.8 1.7,4.2 5.4,0.1 1.8,2 h1.7 l2.4,-1.4 3.1,0.5 1.5,1.3 1.8,-2 2.3,-1.4 2.4,-0.4 0.6,2.7 1.6,1 2.6,2 0.8,0.2 2,-0.1 1.2,-0.6 v-2.1 l1.7,-1.5 0.1,-4.8 1.1,-4.2 1.9,-1.3 1,0.7 1,1.1 0.7,0.2 0.4,-0.4 -0.9,-2.7 v-2.2 l1.1,-1.4 2.5,-3.6 1.3,-1.5 2.2,0.5 2.1,-1.5 3,-3.3 2.2,-3.7 0.2,-5.4 0.5,-5 v-4.6 l-1.2,-3.2 1.2,-1.8 1.3,-1.2 -0.6,-2.8 -4.3,-25.6 -6.2,3.7 -3.9,2.3 -3.4,3.7 -4,3.9 -3.2,0.8 -2.9,0.5 -5.5,2.6 -2.1,0.2 -3.4,-3.1 -5.2,0.6 -2.6,-1.5 -2.2,-1.3z"
    >
     <title>Ohio</title>
    </path>
    <path
     name="Oklahoma"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M411.9,334.9 l-1.8,24.3 -0.9,18 0.2,1.6 4,3.6 1.7,0.9 h0.9 l0.9,-2.1 1.5,1.9 1.6,0.1 0.3,-0.2 0.2,-1.1 2.8,1.4 -0.4,3.5 3.8,0.5 2.5,1 4.2,0.6 2.3,1.6 2.5,-1.7 3.5,0.7 2.2,3.1 1.2,0.1 v2.3 l2.1,0.7 2.5,-2.1 1.8,0.6 2.7,0.1 0.7,2.3 4.4,1.8 1.7,-0.3 1.9,-4.2 h1.3 l1.1,2.1 4.2,0.8 3.4,1.3 3,0.8 1.6,-0.7 0.7,-2.7 h4.5 l1.9,0.9 2.7,-1.9 h1.4 l0.6,1.4 h3.6 l2,-1.8 2.3,0.6 1.7,2.2 3,1.7 3.4,0.9 1.9,1.2 -0.3,-37.6 -1.4,-10.9 -0.1,-8.6 -1.5,-6.6 -0.6,-6.8 0.1,-4.3 -12.6,0.3 -46.3,-0.5 -44.7,-2.1 -41.5,-1.8 -0.4,10.7z"
    >
     <title>Oklahoma</title>
    </path>
    <path
     name="Oregon"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M67.44,158.9 l28.24,7.2 27.52,6.5 17,3.7 8.8,-35.1 1.2,-4.4 2.4,-5.5 -0.7,-1.3 -2.5,0.1 -1.3,-1.8 0.6,-1.5 0.4,-3.3 4.7,-5.7 1.9,-0.9 0.9,-0.8 0.7,-2.7 0.8,-1.1 3.9,-5.7 3.7,-4 0.2,-3.26 -3.4,-2.49 -1.2,-4.55 -13.1,-3.83 -15.3,-3.47 -14.8,0.37 -1.1,-1.31 -5.1,1.84 -4.5,-0.48 -2.4,-1.58 -1.3,0.54 -4.68,-0.29 -1.96,-1.43 -4.84,-1.77 -1.1,-0.07 -4.45,-1.27 -1.76,1.52 -6.26,-0.24 -5.31,-3.85 0.21,-9.28 -2.05,-3.5 -4.1,-0.6 -0.7,-2.5 -2.4,-0.5 -5.8,2.1 -2.3,6.5 -3.2,10 -3.2,6.5 -5,14.1 -6.5,13.6 -8.1,12.6 -1.9,2.9 -0.8,8.6 -1.3,6 2.71,3.5z"
    >
     <title>Oregon</title>
    </path>
    <path
     name="Pennsylvania"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M736.6,192.2 l1.3,-0.5 5.7,-5.5 0.7,6.9 33.5,-6.5 36.9,-7.8 2.3,2.3 3.1,0.4 2,5.6 2.4,1.9 2.8,0.4 0.1,0.1 -2.6,3.2 v3.1 l-1.9,3.1 -0.2,1.9 1.3,1.3 -0.2,1.9 -2.4,1.1 1,3.4 0.2,1.1 2.8,0.3 0.9,2.5 5.9,3.9 v0.4 l-3.1,3 -1.5,2.2 -1.7,2.8 -2.7,1.2 -1.4,0.3 -2.1,1.3 -1.6,1.4 -22.4,4.3 -38.7,7.8 -11.3,1.4 -3.9,0.7 -5.1,-22.4 -4.3,-25.9z"
    >
     <title>Pennsylvania</title>
    </path>
    <path
     name="Rhode Island"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M873.6,175.7 l-0.8,-4.4 -1.6,-6 5.7,-1.5 1.5,1.3 3.4,4.3 2.8,4.4 -2.8,1.4 -1.3,-0.2 -1.1,1.8 -2.4,1.9 -2.8,1.1z"
    >
     <title>Rhode Island</title>
    </path>
    <path
     name="South Carolina"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M759,413.6 l-2.1,-1 -1.9,-5.6 -2.5,-2.3 -2.5,-0.5 -1.5,-4.6 -3,-6.5 -4.2,-1.8 -1.9,-1.8 -1.2,-2.6 -2.4,-2 -2.3,-1.3 -2.2,-2.9 -3.2,-2.4 -4.4,-1.7 -0.4,-1.4 -2.3,-2.8 -0.5,-1.5 -3.8,-5.4 -3.4,0.1 -3.9,-2.5 -1.2,-1.2 -0.2,-1.4 0.6,-1.6 2.7,-1.3 -0.8,-2 6.4,-2.7 9.2,-4.5 7.1,-0.9 16.4,-0.5 2.3,1.9 1.8,3.5 4.6,-0.8 12.6,-1.5 2.7,0.8 12.5,7.4 10.1,8.3 -5.3,5.4 -2.6,6.1 -0.5,6.3 -1.6,0.8 -1.1,2.7 -2.4,0.6 -2.1,3.6 -2.7,2.7 -2.3,3.4 -1.6,0.8 -3.6,3.4 -2.9,0.2 1,3.2 -5,5.3 -2.3,1.6z"
    >
     <title>South Carolina</title>
    </path>
    <path
     name="South Dakota"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M471,181.1 l-0.9,3.2 0.4,3 2.6,2 -1.2,5.4 -1.8,4.1 1.5,3.3 0.7,1.1 -1.3,0.1 -0.7,-1.6 -0.6,-2 -3.3,-1.8 -4.8,-1.5 -2.5,-1.3 -2.9,0.1 -3.9,0.4 -3.8,1.2 -5.3,-3.8 -2.7,-2.4 -10.9,0.8 -41.5,-2.4 -35.6,-2.2 1.5,-24.8 2.8,-34 0.4,-5 56.9,3.9 56.9,1.7 v2.7 l-1.3,1.5 -2,1.5 -0.1,2.2 1.1,2.2 4.1,3.4 0.5,2.7 v35.9z"
    >
     <title>South Dakota</title>
    </path>
    <path
     name="Tennessee"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M670.8,359.6 l-13.1,1.2 -23.3,2.2 -37.6,2.7 -11.8,0.4 0.9,-0.6 0.9,-4.5 -1.2,-3.6 3.9,-2.3 0.4,-2.5 1.2,-4.3 3,-9.5 0.5,-5.6 0.3,-0.2 12.3,-0.2 13.6,-0.8 0.1,-3.9 3.5,-0.1 30.4,-3.3 54,-5.2 10.3,-1.5 7.6,-0.2 2.4,-1.9 1.3,0.3 -0.1,3.3 -0.4,1.6 -2.4,2.2 -1.6,3.6 -2,-0.4 -2.4,0.9 -2.2,3.3 -1.4,-0.2 -0.8,-1.2 -1.1,0.4 -4.3,4 -0.8,3.1 -4.2,2.2 -4.3,3.6 -3.8,1.5 -4.4,2.8 -0.6,3.6 -2.5,0.5 -2,1.7 -0.2,4.8z"
    >
     <title>Tennessee</title>
    </path>
    <path
     name="Texas"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M282.8,425.6 l37,3.6 29.3,1.9 7.4,-97.7 54.4,2.4 -1.7,23.3 -1,18 0.2,2 4.4,4.1 2,1.1 h1.8 l0.5,-1.2 0.7,0.9 2.4,0.2 1.1,-0.6 v-0.2 l1,0.5 -0.4,3.7 4.5,0.7 2.4,0.9 4.2,0.7 2.6,1.8 2.8,-1.9 2.7,0.6 2.2,3.1 0.8,0.1 v2.1 l3.3,1.1 2.5,-2.1 1.5,0.5 2.1,0.1 0.6,2.1 5.2,2 2.3,-0.5 1.9,-4 h0.1 l1.1,1.9 4.6,0.9 3.4,1.3 3.2,1 2.4,-1.2 0.7,-2.3 h3.6 l2.1,1 3,-2 h0.4 l0.5,1.4 h4.7 l1.9,-1.8 1.3,0.4 1.7,2.1 3.3,1.9 3.4,1 2.5,1.4 2.7,2 3.1,-1.2 2.1,0.8 0.7,20 0.7,9.5 0.6,4.1 2.6,4.4 0.9,4.5 4.2,5.9 0.3,3.1 0.6,0.8 -0.7,7.7 -2.9,4.8 1.3,2.6 -0.5,2.4 -0.8,7.2 -1.3,3 0.3,4.2 -5.6,1.6 -9.9,4.5 -1,1.9 -2.6,1.9 -2.1,1.5 -1.3,0.8 -5.7,5.3 -2.7,2.1 -5.3,3.2 -5.7,2.4 -6.3,3.4 -1.8,1.5 -5.8,3.6 -3.4,0.6 -3.9,5.5 -4,0.3 -1,1.9 2.3,1.9 -1.5,5.5 -1.3,4.5 -1.1,3.9 -0.8,4.5 0.8,2.4 1.8,7 1,6.1 1.8,2.7 -1,1.5 -3.1,1.9 -5.7,-3.9 -5.5,-1.1 -1.3,0.5 -3.2,-0.6 -4.2,-3.1 -5.2,-1.1 -7.6,-3.4 -2.1,-3.9 -1.3,-6.5 -3.2,-1.9 -0.6,-2.3 0.6,-0.6 0.3,-3.4 -1.3,-0.6 -0.6,-1 1.3,-4.4 -1.6,-2.3 -3.2,-1.3 -3.4,-4.4 -3.6,-6.6 -4.2,-2.6 0.2,-1.9 -5.3,-12.3 -0.8,-4.2 -1.8,-1.9 -0.2,-1.5 -6,-5.3 -2.6,-3.1 v-1.1 l-2.6,-2.1 -6.8,-1.1 -7.4,-0.6 -3.1,-2.3 -4.5,1.8 -3.6,1.5 -2.3,3.2 -1,3.7 -4.4,6.1 -2.4,2.4 -2.6,-1 -1.8,-1.1 -1.9,-0.6 -3.9,-2.3 v-0.6 l-1.8,-1.9 -5.2,-2.1 -7.4,-7.8 -2.3,-4.7 v-8.1 l-3.2,-6.5 -0.5,-2.7 -1.6,-1 -1.1,-2.1 -5,-2.1 -1.3,-1.6 -7.1,-7.9 -1.3,-3.2 -4.7,-2.3 -1.5,-4.4 -2.6,-2.9 -1.7,-0.5z m174.4,141.7 -0.6,-7.1 -2.7,-7.2 -0.6,-7 1.5,-8.2 3.3,-6.9 3.5,-5.4 3.2,-3.6 0.6,0.2 -4.8,6.6 -4.4,6.5 -2,6.6 -0.3,5.2 0.9,6.1 2.6,7.2 0.5,5.2 0.2,1.5z"
    >
     <title>Texas</title>
    </path>
    <path
     name="Utah"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M228.4,305.9 l24.6,3.6 1.9,-13.7 7,-50.5 2.3,-22 -32.2,-3.5 2.2,-13.1 1.8,-10.6 -34.7,-6.1 -12.5,-2.5 -10.6,52.9 -5.4,30 -3.3,15.4 -1.7,9.2z"
    >
     <title>Utah</title>
    </path>
    <path
     name="Virginia"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M834.7,265.2 l-0.2,2.8 -2.9,3.8 -0.4,4.6 0.5,3.4 -1.8,5 -2.2,1.9 -1.5,-4.6 0.4,-5.4 1.6,-4.2 0.7,-3.3 -0.1,-1.7z m-60.3,44.6 -38.6,5.6 -4.8,-0.1 -2.2,-0.3 -2.5,1.9 -7.3,0.1 -10.3,1.6 -6.7,0.6 4.1,-2.6 4.1,-2.3 v-2.1 l5.7,-7.3 4.1,-3.7 2.2,-2.5 3.6,4.3 3.8,0.9 2.7,-1 2,-1.5 2.4,1.2 4.6,-1.3 1.7,-4.4 2.4,0.7 3.2,-2.3 1.6,0.4 2.8,-3.2 0.2,-2.7 -0.8,-1.2 4.8,-10.5 1.8,-5.2 0.5,-4.7 0.7,-0.2 1.1,1.7 1.5,1.2 3.9,-0.2 1.7,-8.1 3,-0.6 0.8,-2.6 2.8,-2.2 1.1,-2.1 1.8,-4.3 0.1,-4.6 3.6,1.4 6.6,3.1 0.3,-5.2 3.4,1.2 -0.6,2.9 8.6,3.1 1.4,1.8 -0.8,3.3 -1.3,1.3 -0.5,1.7 0.5,2.4 2,1.3 3.9,1.4 2.9,1 4.9,0.9 2.2,2.1 3.2,0.4 0.9,1.2 -0.4,4.7 1.4,1.1 -0.5,1.9 1.2,0.8 -0.2,1.4 -2.7,-0.1 0.1,1.6 2.3,1.5 0.1,1.4 1.8,1.8 0.5,2.5 -2.6,1.4 1.6,1.5 5.8,-1.7 3.7,6.2z"
    >
     <title>Virginia</title>
    </path>
    <path
     name="Vermont"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M832.7,111.3 l2.4,6.5 0.8,5.3 -1,3.9 2.5,4.4 0.9,2.3 -0.7,2.6 3.3,1.5 2.9,10.8 v5.3 l11.5,-2.1 -1,-1.1 0.6,-1.9 0.2,-4.3 -1,-1.4 0.2,-4.7 0.8,-9.3 v-8.5 l-1.1,-1.8 v-1.6 l2.8,-1.1 3.5,-4.4 v-3.6 l-1.9,-2.7 -0.3,-5.79 -26.1,6.79z"
    >
     <title>Vermont</title>
    </path>
    <path
     name="Washington"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M74.5,67.7 l-2.3,-4.3 -4.1,-0.7 -0.4,-2.4 -2.5,-0.6 -2.9,-0.5 -1.8,1 -2.3,-2.9 0.3,-2.9 2.7,-0.3 1.6,-4 -2.6,-1.1 0.2,-3.7 4.4,-0.6 -2.7,-2.7 -1.5,-7.1 0.6,-2.9 v-7.9 l-1.8,-3.2 2.3,-9.4 2.1,0.5 2.4,2.9 2.7,2.6 3.2,1.9 4.5,2.1 3.1,0.6 2.9,1.5 3.4,1 2.3,-0.2 v-2.4 l1.3,-1.1 2.1,-1.3 0.3,1.1 0.3,1.8 -2.3,0.5 -0.3,2.1 1.8,1.5 1.1,2.4 0.6,1.9 1.5,-0.2 0.2,-1.3 -1,-1.3 -0.5,-3.2 0.8,-1.8 -0.6,-1.5 v-2.6 l1.8,-3.6 -1.1,-2.6 -2.4,-4.8 0.3,-0.8 1.4,-0.8 4.4,1.5 9.7,2.7 8.6,1.9 20,5.7 23,5.7 15,3.49 -4.8,17.56 -4.5,20.83 -3.4,16.25 -0.4,9.18 v0 l-12.9,-3.72 -15.3,-3.47 -14.5,0.32 -1.1,-1.53 -5.7,2.09 -3.9,-0.42 -2.6,-1.79 -1.7,0.65 -4.15,-0.25 -1.72,-1.32 -5.16,-1.82 -1.18,-0.16 -4.8,-1.39 -1.92,1.65 -5.65,-0.25 -4.61,-3.35z m9.6,-55.4 2,-0.2 0.5,1.4 1.5,-1.6 h2.3 l0.8,1.5 -1.5,1.7 0.6,0.8 -0.7,2 -1.4,0.4 c0,0 -0.9,0.1 -0.9,-0.2 0,-0.3 1.5,-2.6 1.5,-2.6 l-1.7,-0.6 -0.3,1.5 -0.7,0.6 -1.5,-2.3z"
    >
     <title>Washington</title>
    </path>
    <path
     name="Wisconsin"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M541.4,109.9 l2.9,0.5 2.9,-0.6 7.4,-3.2 2.9,-1.9 2.1,-0.8 1.9,1.5 -1.1,1.1 -1.9,3.1 -0.6,1.9 1,0.6 1.8,-1 1.1,-0.2 2.7,0.8 0.6,1.1 1.1,0.2 0.6,-1.1 4,5.3 8.2,1.2 8.2,2.2 2.6,1.1 12.3,2.6 1.6,2.3 3.6,1.2 1.7,10.2 1.6,1.4 1.5,0.9 -1.1,2.3 -1.8,1.6 -2.1,4.7 -1.3,2.4 0.2,1.8 1.5,0.3 1.1,-1.9 1.5,-0.8 0.8,-2.3 1.9,-1.8 2.7,-4 4.2,-6.3 0.8,-0.5 0.3,1 -0.2,2.3 -2.9,6.8 -2.7,5.7 -0.5,3.2 -0.6,2.6 0.8,1.3 -0.2,2.7 -1.9,2.4 -0.5,1.8 0.6,3.6 0.6,3.4 -1.5,2.6 -0.8,2.9 -1,3.1 1.1,2.4 0.6,6.1 1.6,4.5 -0.2,3 -15.9,1.8 -17.5,1 h-12.7 l-0.7,-1.5 -2.9,-0.4 -2.6,-1.3 -2.3,-3.7 -0.3,-3.6 2,-2.9 -0.5,-1.4 -2.1,-2.2 -0.8,-3.3 -0.6,-6.8 -2.1,-2.5 -7,-4.5 -3.8,-5.4 -3.4,-1 -2.2,-2.8 h-3.2 l-2.9,-3.3 -0.5,-6.5 0.1,-3.8 1.5,-3.1 -0.8,-3.2 -2.5,-2.8 1.8,-5.4 5.2,-3.8 1.6,-1.9 -0.2,-8.1 0.2,-2.8 2.4,-2.8z"
    >
     <title>Wisconsin</title>
    </path>
    <path
     name="West Virginia"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M758.9,254.3 l5.8,-6 2.6,-0.8 1.6,-1.5 1.5,-2.2 1.1,0.3 3.1,-0.2 4.6,-3.6 1.5,-0.5 1.3,1 2.6,1.2 3,3 -0.4,4.3 -5.4,-2.6 -4.8,-1.8 -0.1,5.9 -2.6,5.7 -2.9,2.4 -0.8,2.3 -3,0.5 -1.7,8.1 -2.8,0.2 -1.1,-1 -1.2,-2 -2.2,0.5 -0.5,5.1 -1.8,5.1 -5,11 0.9,1.4 -0.1,2 -2.2,2.5 -1.6,-0.4 -3.1,2.3 -2.8,-0.8 -1.8,4.9 -3.8,1 -2.5,-1.3 -2.5,1.9 -2.3,0.7 -3.2,-0.8 -3.8,-4.5 -3.5,-2.2 -2.5,-2.5 -2.9,-3.7 -0.5,-2.3 -2.8,-1.7 -0.6,-1.3 -0.2,-5.6 0.3,0.1 2.4,-0.2 1.8,-1 v-2.2 l1.7,-1.5 0.1,-5.2 0.9,-3.6 1.1,-0.7 0.4,0.3 1,1.1 1.7,0.5 1.1,-1.3 -1,-3.1 v-1.6 l3.1,-4.6 1.2,-1.3 2,0.5 2.6,-1.8 3.1,-3.4 2.4,-4.1 0.2,-5.6 0.5,-4.8 v-4.9 l-1.1,-3 0.9,-1.3 0.8,-0.7 4.3,19.3 4.3,-0.8 11.2,-1.3z"
    >
     <title>West Virginia</title>
    </path>
    <path
     name="Wyoming"
     onClick={handleClick}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
     d="M353,161.9 l-1.5,25.4 -4.4,44 -2.7,-0.3 -83.3,-9.1 -27.9,-3 2,-12 6.9,-41 3.8,-24.2 1.3,-11.2 48.2,7 59.1,6.5z"
    >
     <title>Wyoming</title>
    </path>
    <g>
     <path
      className="DC1"
      fill="#D3D3D3"
      d="M801.8,253.8 l-1.1-1.6 -1-0.8 1.1-1.6 2.2,1.5z"
     />
     <circle
      name="District of Columbia"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={twMerge("hover:cursor-pointer", `${onHoverUSAStateColor} ${onHoverUSAStateStrokeColor}`)}
      stroke="#FFFFFF"
      strokeWidth="1.5"
      cx="801.3"
      cy="251.8"
      r="5"
      opacity="1"
     />
    </g>
   </g>
   <path
    fill="none"
    stroke="#A9A9A9"
    strokeWidth="2"
    d="M215,493v55l36,45 M0,425h147l68,68h85l54,54v46"
   />
   {usaState && (
    <text
     x={stateTextXPosition}
     y={stateTextYPosition}
     dominantBaseline={stateTextCentered}
     textAnchor={stateTextCentered}
     className={twMerge("pointer-events-none", stateTextClassname)}
     fill={colorVariants()[USAStateTextColor]}
    >
     {usaState}
    </text>
   )}
  </svg>
 );
};