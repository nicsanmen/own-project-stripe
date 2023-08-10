import React from "react";

const Timeline = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="timeline">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="timeline-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-primary pb-2">
            Timeline
          </h2>

          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <li className="mb-20 ml-8">
              <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
                July 2023 - Present
              </time>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Working at Z1 Digital
              </h3>
              <p className="mb-5 mt-3 text-xl font-normal text-gray-500 dark:text-gray-400">
                Backend developer using Django, Python, PostgreSQL, Strawberry... Also learning about 
                frontend development with React, NextJS, TailwindCSS... In addition to this, here is where I am 
                practing my English skills, since all our clients are from US and Canada.
              </p>
            </li>
            <li className="mb-20 ml-8">
              <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
                September 2022 - July 2023
              </time>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Working at Vestigia/Blockess
              </h3>
              <p className="mb-5 mt-3 text-xl font-normal text-gray-500 dark:text-gray-400">
                Developing apps using PHP with Codeigniter 3/Codeigniter 4 on
                the backend and HTML, CSS & JS on the frontend. I usually used to work at the backend, 
                but I also have some experience with the frontend.
              </p>
            </li>
            <li className="mb-20 ml-8">
              <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
                April 2022 - September 2022
              </time>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Working at Tier1
              </h3>
              <p className="text-xl mt-3 font-normal text-gray-500 dark:text-gray-400">
                Working in Tier1 Technologies, building Java aplications (specifically their own software Comerzzia) using
                SpringBoot, MySQL, JSP...
              </p>
            </li>
            <li className="mb-20 ml-8">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-white-200">
                September 2021 - April2022
              </time>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Internship at Tier1
              </h3>
              <p className="mt-3 text-xl font-normal text-gray-500 dark:text-gray-400">
                I was learning about Java application development and the
                workflow itself within a company, from the initial phase to the
                release.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
