"use client";

import Spotlight, { SpotlightCard } from "@/components/spotlight";
import Slider from "@/components/slider";

import { Button, Chip } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import Card01 from "@/public/card-01.png";
import Apple from "@/public/apple.svg";
import { IlluminatedCard } from "@/components/illuminate_card";

import animationData from "@/animations/landing_page_animation.json";
import { Player } from "@lottiefiles/react-lottie-player";

import Globe from 'react-globe.gl';
import { World } from '@/components/globe'
import { useEffect, useRef, useState } from "react";


export default function Home() {
  const [currentStateNumber, setCurrentStateNumber] = useState(0);
  const targetStateNumber = 30

  const [currentCountryNumber, setCurrentCountryNumber] = useState(0);
  const targetCountryNumber = 10

  const [currentImpactNumber, setCurrentImpactNumber] = useState<number | string>(0);
  const targetImpactNumber = 30600

  const [currentUserNumber, setCurrentUserNumber] = useState<number | string>(0);
  const targetUserNumber = 15213

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStateNumber((prevNumber) => {
        const increment = Math.ceil(targetStateNumber / 10); // Adjust speed by changing the denominator
        return Math.min(prevNumber + increment, targetStateNumber);
      });
    }, 100); // Adjust interval speed for smoother/faster incrementation

    return () => clearInterval(interval);
  }, [targetStateNumber]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCountryNumber((prevNumber) => {
        const increment = Math.ceil(targetCountryNumber / 10); // Adjust speed by changing the denominator
        return Math.min(prevNumber + increment, targetCountryNumber);
      });
    }, 100); // Adjust interval speed for smoother/faster incrementation

    return () => clearInterval(interval);
  }, [targetCountryNumber]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImpactNumber((prevNumber) => {
        const increment = Math.ceil(targetImpactNumber / 13); // Adjust speed by changing the denominator
        return Math.min((prevNumber as number) + increment, targetImpactNumber);
      });
    }, 100); // Adjust interval speed for smoother/faster incrementation

    return () => clearInterval(interval);
  }, [targetImpactNumber]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUserNumber((prevNumber) => {
        const increment = Math.ceil(targetUserNumber / 13); // Adjust speed by changing the denominator
        return Math.min((prevNumber as number) + increment, targetUserNumber);
      });
    }, 100); // Adjust interval speed for smoother/faster incrementation

    return () => clearInterval(interval);
  }, [targetUserNumber]);

  return (
    <main className="flex flex-col w-full min-h-screen max-w-screen overflow-x-hidden gap-y-24">
      <div className=" w-full items-center justify-start flex flex-col pt-[13vh]">
        <div className="relative mx-4 flex w-4/5 flex-col items-center z-20">
          <div className="mb-8 flex">
            <a
              href="https://youthresearchinitiative.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]  bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full px-3 py-1 text-lg font-medium leading-5 backdrop-blur-xl bg-black text-slate-200">
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
          <p className="pt-6 pb-8 text-center text-6xl font-semibold bg-gradient-to-r from-sky-400 to-purple-400 text-transparent dark:bg-gradient-to-r decoration-clone bg-clip-text">
            The world&lsquo;s leading youth-oriented research organtization.
          </p>
          <p className=""></p>
          <div className="pt-12 pb-8 flex gap-4 items-center justify-center">
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

      <div className="flex flex-col w-full items-center justify-center pt-[10vh] z-20 pb-[4vh] gap-y-12">
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
      <div className="flex flex-col w-full items-center justify-center pt-12 z-20 pb-6 gap-y-12">
        <div className="text-white text-6xl text-semibold ">Trusted By</div>
        <Slider />
      </div>
      <div className="flex flex-col w-full items-center justify-center pt-12 z-20 pb-6 bg-inherit gap-y-12">
        <div className="text-white text-6xl text-semibold">
          State Of The Art Tools{" "}
          <span className="tracking-tight inline font-semibold from-[#FF705B] to-[#FFB457]  bg-clip-text text-transparent bg-gradient-to-b">
            in your hands.
          </span>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col px-10 w-1/4 grow h-full self-start gap-y-16">
            <div className="w-full text-wrap text-3xl text-white font-bold">
              Learn from the best.{' '}
              <span className="text-[#777777] font-normal">
                Trained on past winners & top scientific minds, our AI combines
                the best of the best.
              </span>
            </div>
            <Chip color="warning" variant="bordered" className='react-floater-animated self-start ml-[2.5vw] text-2xl px-4 py-6' size={'lg'}>
              Bordered
            </Chip>
            <Chip color="warning" variant="bordered" className='react-floater-animated-reverse self-end mr-[2.5vw] text-2xl px-4 py-6' size={'lg'}>
              Bordered
            </Chip>
            <Chip color="warning" variant="bordered" className='react-floater-animated self-start ml-[2.5vw] text-2xl px-4 py-6' size={'lg'}>
              Bordered
            </Chip>
          </div>
          <Player
            src={animationData}
            loop
            autoplay
            className="rounded-2xl react-floater-animated"
          />
          <div className="flex flex-col px-10 w-1/4 grow h-full self-start gap-y-16">
            <div className="w-full text-wrap text-3xl text-white font-bold">
              Always improving.{' '}
              <span className="text-[#777777] font-normal">
                Grows smarter and more powerful with every use.
              </span>
            </div>
            <Chip color="warning" variant="bordered" className='react-floater-animated-reverse self-end mr-[2.5vw] text-2xl px-4 py-6' size={'lg'}>
              Bordered
            </Chip>
            <Chip color="warning" variant="bordered" className='react-floater-animated self-start ml-[2.5vw] text-2xl px-4 py-6' size={'lg'}>
              Bordered
            </Chip>
            <Chip color="warning" variant="bordered" className='react-floater-animated-reverse self-end mr-[2.5vw] text-2xl px-4 py-6' size={'lg'}>
              Bordered
            </Chip>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-center justify-center pt-12 z-20 pb-6 bg-slate-900 gap-y-12">
        <div className="text-white text-6xl text-semibold">
          A{" "}
          <span className="tracking-tight inline font-semibold from-[#6FEE8D] to-[#17c964] bg-clip-text text-transparent bg-gradient-to-b">
            Dogged Pursuit
          </span>{" "}
          Of Knowledge
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



      <div className="flex flex-col w-full items-center justify-center pt-12 z-20 pb-6 bg-inherit gap-y-12">
        <div className="text-white text-6xl text-semibold">
          A{" "}
          <span className="tracking-tight inline font-semibold from-[#FF72E1] to-[#F54C7A]  bg-clip-text text-transparent bg-gradient-to-b">
            global
          </span>
          {" "}reach.
        </div>
        <div className='flex flex-row'>
          <div className='flex flex-col gap-y-3 w-1/4 text-white'>
            <p className='text-center w-full text-6xl font-semibold text-[rgb(255,143,143)]'>{currentUserNumber}</p>
            <p className='text-center w-full text-3xl '>Users</p>
            <p className='text-center w-full text-6xl font-semibold text-[#FF8F8F]'>{currentImpactNumber}</p>
            <p className='text-center w-full text-3xl'>Students Impacted</p>
          </div>
          <World />
          <div className='flex flex-col gap-y-3 w-1/4 text-white'>
            <p className='text-center w-full text-6xl font-semibold text-[#FF8F8F]'>{currentStateNumber}</p>
            <p className='text-center w-full text-3xl'>States</p>
            <p className='text-center w-full text-6xl font-semibold text-[#FF8F8F]'>{currentCountryNumber}</p>
            <p className='text-center w-full text-3xl'>Countries</p>
          </div>
        </div>

      </div>
      <div className="footer h-[50px]"></div>
    </main>
  );
}
