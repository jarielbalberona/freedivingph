"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Freediving PH</span>
              <img
                className="w-auto h-16"
                src="/assets/images/freedivingph-light.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      <div className="relative isolate pt-14">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          />
        </svg>
        <div className="w-full p-4 pb-12 mt-12 text-center bg-white">
          <h3 className="mb-2 text-3xl font-bold text-red-900 dark:text-red">
            Project has been discontinued
          </h3>
          <p className="mb-5 text-base text-gray-500 sm:text-base dark:text-gray-400">
            ⚠️ This web application project has been discontinued as we shift
            focus to other priorities. If you're interested in reviving this
            project or purchasing the domain, feel free to reach out at
            <a href="mailto:hello@saltandsun.life">
              <p className="text-base text-blue-500 sm:text-base dark:text-blue-400">
                hello@saltandsun.life
              </p>
            </a>
          </p>
        </div>
        <div className="px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:pt-32 lg:pb-10">
          <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="order-last mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-lg mt-10 font-serif text-3xl font-bold text-gray-900 sm:leading-20 sm:text-6xl">
                  Your Digital Dive Buddy
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                  Revolutionizing the World of Freediving in the Philippines
                </p>

                <p className="my-5 text-base text-gray-500 sm:text-base dark:text-gray-400">
                  Discover a new level of safety and convenience with our
                  innovative digital platform — the ultimate guide to exploring
                  the underwater world of the Philippines, designed to enhance
                  your diving experience and help you connect with fellow
                  enthusiasts. With our new digital dive buddy, divers from
                  around the world would be able to experience the thrill of
                  freediving in the Philippines in a whole new way.
                </p>
              </div>

              <div className="mt-4 lg:mt-0 lg:col-span-5 lg:flex">
                <img
                  src="/assets/images/landpage-showcase-min.png"
                  alt="Show case app"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="w-full p-4 pb-12 text-center bg-white">
          <h3 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            Coming soon to your pocket: our mobile app!
          </h3>
          <p className="mb-5 text-base text-gray-500 sm:text-base dark:text-gray-400">
            Stay tuned for our mobile release.
          </p>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a className="w-full mx-1 flex w-40  bg-gray-800  text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 ">
              <svg
                className="mr-3 w-7 h-7"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="apple"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                ></path>
              </svg>
              <div className="text-left">
                <div className="hidden mb-1 text-xs">Download on the</div>
                <div className="-mt-1 font-sans text-sm font-semibold">
                  App Store
                </div>
              </div>
            </a>
            <a className="w-full  mx-1 flex w-40  bg-gray-800  text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 ">
              <svg
                className="mr-3 w-7 h-7"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google-play"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                ></path>
              </svg>
              <div className="text-left">
                <div className="hidden mb-1 text-xs">Get in on</div>
                <div className="-mt-1 font-sans text-sm font-semibold">
                  Google Play
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="justify-center block w-full p-4 pb-12 mt-12 text-center bg-white sm:flex">
        <div className="m-4">
          <a href="mailto:hello@saltandsun.life">
            <p className="text-base text-gray-500 sm:text-base dark:text-gray-400">
              hello@saltandsun.life
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
