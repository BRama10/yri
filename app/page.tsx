'use client';

import Spotlight, { SpotlightCard } from "@/components/spotlight";
import Slider from "@/components/slider";

import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import Card01 from "@/public/card-01.png";
import Apple from "@/public/apple.svg";
import { IlluminatedCard } from "@/components/illuminate_card";

import Lottie from 'react-lottie';
import animationData from '@/animations/landing_page_animation.json'
import { Player } from '@lottiefiles/react-lottie-player';

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice"
    // }
  };


  return (
    <main className="flex flex-col w-full min-h-screen max-w-screen overflow-x-hidden">
      <div className=" w-full items-center justify-start flex flex-col pt-[18vh]">
        <div className="relative mx-4 flex w-4/5 flex-col items-center z-20">
          <div className="mb-8 flex">
            <a
              href="https://github.com/ibelick/background-snippets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]  bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full px-3 py-1 text-xs font-medium leading-5 backdrop-blur-xl bg-black text-slate-200">
                  New API ⚡️
                  <span className="inline-flex items-center pl-2 text-white">
                    Read more{" "}
                    <ArrowRight className="pl-0 text-white" size={16} />
                  </span>
                </div>
              </span>
            </a>
          </div>
          <h2 className="text-center text-3xl text-gray-50 sm:text-8xl w-full font-extrabold pb-12">
            Youth Research{" "}
            <span className="animate-text-gradient inline-flex bg-gradient-to-r bg-[200%_auto] bg-clip-text leading-tight text-transparent from-neutral-100 via-slate-400 to-neutral-400">
              Initiative
            </span>
          </h2>
          <p className="pt-6 pb-8 text-center text-4xl bg-gradient-to-r from-sky-400 to-purple-400 text-transparent dark:bg-gradient-to-r decoration-clone bg-clip-text">
            The world&lsquo;s leading youth-oriented research organtization.
          </p>
          <p className=""></p>
          <div className="pt-12 pb-12 flex gap-4 items-center justify-center">
            <Button
              color={"primary"}
              className="text-2xl px-6 py-[32px]"
              variant={"shadow"}
            >
              Get Started!
            </Button>
            <Button
              variant={"ghost"}
              className="text-2xl text-white px-6 py-[32px] hover:text-black hover:font-medium"
            >
              Join our Team!
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center justify-center pt-[20vh] z-20 pb-[15vh] gap-y-12">
        {/* <div className='text-white text-4xl text-semibold'>
          Your Pathway To The Future
        </div> */}
        {/* <Slider /> */}
        <div className="w-screen flex gap-x-16 justify-center">
          <IlluminatedCard>
            <img
              src="https://framerusercontent.com/images/zxLzTf2KtIiVLxdz3eqSH0ldpA.jpeg"
              alt="Test"
              className="rounded-2xl w-[95%] h-[90%]"
            />
            <p className="!text-4xl !text-white">We Inspire</p>
          </IlluminatedCard>

          <IlluminatedCard>
            <img
              src="https://framerusercontent.com/images/WGK7gQqsNdtJcYv9iUaNv1ta8c0.jpeg"
              alt="Test"
              className="rounded-2xl w-[95%] h-[90%]"
            />
            <p className="!text-4xl !text-white">We Unlock Pathways</p>
          </IlluminatedCard>

          <IlluminatedCard>
            <img
              src="https://framerusercontent.com/images/X30JQ7v6vYGxfrKQDGGVs9qxlew.jpg"
              alt="Test"
              className="rounded-2xl w-[95%] h-[90%]"
            />
            <p className="!text-4xl !text-white">We Empower</p>
          </IlluminatedCard>
        </div>
      </div>
      <div className="flex flex-col w-full items-center justify-center pt-12 z-20 pb-6 bg-slate-900 gap-y-12">
        <div className="text-white text-5xl text-semibold">
          A Pursuit Of Knowledge
        </div>
        <Spotlight className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group">
          {/* Card #1 */}
          <SpotlightCard>
            <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
              {/* Radial gradient */}
              <div
                className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                aria-hidden="true"
              >
                <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
              </div>
              <div className="flex flex-col h-full items-center text-center">
                {/* Image */}
                <div className="relative inline-flex">
                  <div
                    className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                    aria-hidden="true"
                  ></div>
                  <Image
                    className="inline-flex"
                    src={Apple}
                    width={200}
                    height={200}
                    alt="Card 01"
                  />
                </div>
                {/* Text */}
                <div className="grow mb-5">
                  <h2 className="text-xl text-slate-200 font-bold mb-1">
                    Title Optimizer
                  </h2>
                  <p className="text-sm text-slate-500">
                    Quickly apply filters to refine your issues lists and create
                    custom views.
                  </p>
                </div>
                <a
                  className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                  href="#0"
                >
                  <svg
                    className="fill-slate-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                  >
                    <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                  </svg>
                  <span>Explore!</span>
                </a>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard>
            <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
              {/* Radial gradient */}
              <div
                className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                aria-hidden="true"
              >
                <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
              </div>
              <div className="flex flex-col h-full items-center text-center">
                {/* Image */}
                <div className="relative inline-flex">
                  <div
                    className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                    aria-hidden="true"
                  ></div>
                  <Image
                    className="inline-flex"
                    src={Card01}
                    width={200}
                    height={200}
                    alt="Card 01"
                  />
                </div>
                {/* Text */}
                <div className="grow mb-5">
                  <h2 className="text-xl text-slate-200 font-bold mb-1">
                    Abstract Optimizer
                  </h2>
                  <p className="text-sm text-slate-500">
                    Quickly apply filters to refine your issues lists and create
                    custom views.
                  </p>
                </div>
                <a
                  className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                  href="#0"
                >
                  <svg
                    className="fill-slate-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                  >
                    <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                  </svg>
                  <span>Explore!</span>
                </a>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard>
            <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
              {/* Radial gradient */}
              <div
                className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                aria-hidden="true"
              >
                <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
              </div>
              <div className="flex flex-col h-full items-center text-center">
                {/* Image */}
                <div className="relative inline-flex">
                  <div
                    className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                    aria-hidden="true"
                  ></div>
                  <Image
                    className="inline-flex"
                    src={Card01}
                    width={200}
                    height={200}
                    alt="Card 01"
                  />
                </div>
                {/* Text */}
                <div className="grow mb-5">
                  <h2 className="text-xl text-slate-200 font-bold mb-1">
                    Project Categorizer
                  </h2>
                  <p className="text-sm text-slate-500">
                    Quickly apply filters to refine your issues lists and create
                    custom views.
                  </p>
                </div>
                <a
                  className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                  href="#0"
                >
                  <svg
                    className="fill-slate-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                  >
                    <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                  </svg>
                  <span>Explore!</span>
                </a>
              </div>
            </div>
          </SpotlightCard>
        </Spotlight>
        <Spotlight className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group">
          {/* Card #1 */}
          <SpotlightCard>
            <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
              {/* Radial gradient */}
              <div
                className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                aria-hidden="true"
              >
                <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
              </div>
              <div className="flex flex-col h-full items-center text-center">
                {/* Image */}
                <div className="relative inline-flex">
                  <div
                    className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                    aria-hidden="true"
                  ></div>
                  <Image
                    className="inline-flex"
                    src={Card01}
                    width={200}
                    height={200}
                    alt="Card 01"
                  />
                </div>
                {/* Text */}
                <div className="grow mb-5">
                  <h2 className="text-xl text-slate-200 font-bold mb-1">
                    Pathways
                  </h2>
                  <p className="text-sm text-slate-500">
                    Quickly apply filters to refine your issues lists and create
                    custom views.
                  </p>
                </div>
                <a
                  className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                  href="#0"
                >
                  <svg
                    className="fill-slate-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                  >
                    <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                  </svg>
                  <span>Connect!</span>
                </a>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard>
            <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
              {/* Radial gradient */}
              <div
                className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                aria-hidden="true"
              >
                <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
              </div>
              <div className="flex flex-col h-full items-center text-center">
                {/* Image */}
                <div className="relative inline-flex">
                  <div
                    className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                    aria-hidden="true"
                  ></div>
                  <Image
                    className="inline-flex"
                    src={Card01}
                    width={200}
                    height={200}
                    alt="Card 01"
                  />
                </div>
                {/* Text */}
                <div className="grow mb-5">
                  <h2 className="text-xl text-slate-200 font-bold mb-1">
                    Empower
                  </h2>
                  <p className="text-sm text-slate-500">
                    Quickly apply filters to refine your issues lists and create
                    custom views.
                  </p>
                </div>
                <a
                  className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                  href="#0"
                >
                  <svg
                    className="fill-slate-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                  >
                    <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                  </svg>
                  <span>Learn!</span>
                </a>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard>
            <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
              {/* Radial gradient */}
              <div
                className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                aria-hidden="true"
              >
                <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
              </div>
              <div className="flex flex-col h-full items-center text-center">
                {/* Image */}
                <div className="relative inline-flex">
                  <div
                    className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                    aria-hidden="true"
                  ></div>
                  <Image
                    className="inline-flex"
                    src={Card01}
                    width={200}
                    height={200}
                    alt="Card 01"
                  />
                </div>
                {/* Text */}
                <div className="grow mb-5">
                  <h2 className="text-xl text-slate-200 font-bold mb-1">
                    Cold Emailer{" "}
                    <span className="font-normal italic">(Beta)</span>
                  </h2>
                  <p className="text-sm text-slate-500">
                    Quickly apply filters to refine your issues lists and create
                    custom views.
                  </p>
                </div>
                <a
                  className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                  href="#0"
                >
                  <svg
                    className="fill-slate-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                  >
                    <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                  </svg>
                  <span>Connect</span>
                </a>
              </div>
            </div>
          </SpotlightCard>
        </Spotlight>
      </div>
      <div className="flex flex-col w-full items-center justify-center pt-12 z-20 pb-6 gap-y-12">
        <div className="text-white text-4xl text-semibold">Trusted By</div>
        <Slider />
      </div>

      <div className="flex flex-col w-full items-center justify-center pt-12 z-20 pb-6 bg-inherit gap-y-12">
        {/* <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        /> */}
        <Player 
        src={animationData}
        loop
        autoplay
        className='rounded-2xl react-floater-animated'
        />
      </div>

      <div className="footer h-[50px]"></div>
    </main>
  );
}
