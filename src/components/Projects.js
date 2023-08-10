import React from "react";
import traffic from "../assets/traffic.jpg";
import aiding from "../assets/aiding.png";
import learning from "../assets/learning.png";

const Projects = () => {
  const projects = [
    {
      img: aiding,
      title: "aiding",
      desc: " Aiding is a tool to assist NGOs. It features different modules tailored to their specific needs. Built with React and Django.",
      live: "https://aiding-web.vercel.app/",
      code: "https://github.com/ISPP-2023-NGO-P3",
    },
    {
      img: learning,
      title: "relational machine learning",
      desc: "From a graph, existing patterns between different nodes are explored using Machine Learning techniques. Built with Python.",
      // live: "https://github.com/piikuman/AprendizajeAutomaticoRelacional",
      code: "https://github.com/piikuman/AprendizajeAutomaticoRelacional",
    },
    {
      img: traffic,
      title: "traffic sign recognition",
      desc: "Desktop application software for traffic sign detection using a CNN and image preprocessing. Built with Python.",
      // live: "https://github.com/Josdelsan/SW-PID-Proyecto",
      code: "https://github.com/Josdelsan/SW-PID-Proyecto",
    },
    // {
    //   img: getInspirred,
    //   title: "get Inspirred",
    //   desc: "Quote search app. Used Quotable API for the quotes and React, Redux on the frontend",
    //   live: "https://get-inspirred.netlify.app/",
    //   code: "https://github.com/Coderamrin/get-inspired",
    // },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-secondery pb-2 text-secondery">
            Projects
          </h2>

          <p className="pb-5 text-xl text-secondery">
            These are some of my projects. I have built these with React, Django, Python ... Check them out!
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  {project.live && (
                    <a
                      href={project.live}
                      className="px-5 py-2 bg-live mr-5 font-bold"
                    >
                      Live
                    </a>
                  )}
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-code font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
