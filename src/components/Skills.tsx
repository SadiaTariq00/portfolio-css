import React from "react";

function Skills() {
  return (
    <div id="skills" className="container mx-auto px-6 py-16 sm:py-24">
      <div className="grid sm:grid-cols-2 gap-12 items-start">
        <div >
          <h2 className="text-3xl md:text-4xl font-semibold" data-aos="zoom-in-up">My Skills...</h2>
          <p className="text-neutral-400 pt-2">
            I have a solid foundation in web development with a focus on HTML,
            CSS, and JavaScript. My experience also includes working with modern
            tools like Next.js and Tailwind CSS, which help me build responsive
            and user-friendly web applications. I&apos;m always eager to learn new
            technologies and improve my skills.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-amber-700 text-xl sm:text-2xl " data-aos="zoom-in-up">HTML</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-amber-700 h-2.5 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div>
                <h3 className="text-amber-700 text-xl sm:text-2xl" data-aos="zoom-in-up">CSS</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-amber-700 h-2.5 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div>
                <h3 className="text-amber-700 text-xl sm:text-2xl" data-aos="zoom-in-up">
                  JavaScript
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-amber-700 h-2.5 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-amber-700 text-xl sm:text-2xl" data-aos="zoom-in-up">Next.js</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-amber-700 h-2.5 rounded-full"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>
              <div>
                <h3 className="text-amber-700 text-xl sm:text-2xl" data-aos="zoom-in-up">
                  Tailwind CSS
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-amber-700 h-2.5 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
              <div>
                <h3 className="text-amber-700 text-xl sm:text-2xl" data-aos="zoom-in-up">
                  TypeScript
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-amber-700 h-2.5 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
