import React from "react";

const Contact = () => {
  return (
    <section className="bg-primary px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl text-secondery font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-secondery pb-2">
          Contact Me
        </h2>
        <p className="text-xl text-secondery">
        Currently, I am in the final stages of completing my university studies and working part-time as a developer. In my free time, I dedicate myself to progressing in my personal projects, such as the ones mentioned 
        earlier, and others as well. If you have any questions, you can contact me here:
        </p>

        <p className="py-2 text-xl text-secondery">
          <span className="font-bold">Personal Email:</span> nicosanchezmendoza@gmail.com
        </p>

        <p className="py-2 text-xl text-secondery">
          <span className="font-bold">Work Email:</span> nicosanchezjob@gmail.com
        </p>
      </div>
    </section>
  );
};

export default Contact;
