import React from "react";
import HeroImg from "../assets/hero-img.png";

import {
  AiOutlineGithub, AiOutlineLink,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl text-secondery">
            Hi, <br />I am <span className="text-accent">N</span>ico <br />
            Software Engineer
          </h1>

          <p className="py-5 text-xl text-secondery">
            from Seville, Spain.
          </p>

          <div className="flex py-8 ">
            <a
              href="https://github.com/nicsanmen"
              className="pr-4 inline-block bt-accent hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
            <a 
              target="_blank"
              rel="noreferrer"
              href="https://www.linktr.ee/nicsanmen"
              className="pr-4 inline-block bt-accent hover:text-white"
            >
              {" "}
              <AiOutlineLink size={40} />{" "}
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-secondery border-2 border-[#7477FF] text-white px-7 py-3 hover:bg-white hover:text-sky-900 my-5"
          >
            <b>See Projects</b>
          </a>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
