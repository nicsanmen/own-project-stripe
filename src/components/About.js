import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-primary pb-2">
            About Me
          </h2>

          <p className="pb-5 text-xl">
            Hello, my name is Nicolás, but everyone calls me Nico. I am a Software Engineering student at the University of Seville, in Spain.
          </p>
          
          <p className="pb-5 text-xl">
            In addition to my studies, I have almost 2 years of work experience as a developer, working on both backend and frontend projects.
          </p>

          <p className="pb-5 text-xl">
            I am passionate about exploring various technologies, and currently, I am focusing on learning Django and Express for backend development, as well as React and React Native for frontend development.
          </p>

          <p className="pb-5 text-xl">
          Additionally, I have a passion for entrepreneurship, and as a result, I have successfully launched several projects while others are currently in development. These ventures provide me with valuable opportunities for continuous learning and personal growth beyond the confines of my professional and academic pursuits. Some notable projects I have worked on include Woodmenu and SolitoApp, Instak3y, among others.
          </p>

        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
