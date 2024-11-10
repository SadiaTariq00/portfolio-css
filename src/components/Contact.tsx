// import React from "react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { IoMdMail } from "react-icons/io";

// function Contact() {
//   return (
//     <div id="contact" className="pt-32 container">
//       <div className="grid md:grid-cols-2 gap-10">
//         <div className="space-y-8">
//           <h2 className="text-5xl" data-aos="zoom-in-up">Get in touch</h2>
//           <p className="text-neutral-400 text-[18px] pt-2">
//             I’m always open to discussing new projects, creative ideas, or
//             opportunities to be part of your vision. If you’re looking to
//             collaborate or need any assistance with your project, feel free to
//             drop me a message. Let’s make something great together!
//           </p>
//           <div className="flex gap-3 items-center" data-aos="zoom-in-up">
//           <IoMdMail size={30}/> shaziatariq1989@gmail.com
//           </div>
//           <div className="flex gap-3 items-center"data-aos="zoom-in-up">
//           <FaGithub  size={30}/>https://github.com/SadiaTariq00
//           </div>

//           <div className="flex gap-3 items-center" data-aos="zoom-in-up">
//           <FaLinkedin  size={30}/>https://www.linkedin.com/in/sadia-tariq-51018b324
//           </div>
//         </div>
//         <div className="space-y-8">
//             <div className="flex flex-col gap-1">
//             <label htmlFor="name ">Name</label>
//             <input type="text"
//             className="h-[40px] bg-transparent border border-amber-900"
//             id="name" />
//             </div>

//             <div className="flex flex-col gap-1">
//             <label htmlFor="email ">Email</label>
//             <input type="text"
//             className="h-[40px] bg-transparent border border-amber-900"
//          id="email" />
//             </div>

//             <div className="flex flex-col gap-1">
//             <label htmlFor="msg ">Message</label>
//             <textarea 
//             className=" bg-transparent border border-amber-900"
//          id="msg" rows={6} >
//             </textarea>
//             </div>
//             <button className="bg-amber-800 p-2 px-6 rounded-xl hover:bg-amber-600" data-aos="zoom-in-up">Sent</button>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Contact;











import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Contact() {
  return (
    <div id="contact" className="pt-32 container">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-8">
          <h2 className="text-5xl" data-aos="zoom-in-up">Get in touch</h2>
          <p className="text-neutral-400 text-[18px] pt-2">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. If you’re looking to
            collaborate or need any assistance with your project, feel free to
            drop me a message. Let’s make something great together!
          </p>
          
          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <IoMdMail size={30}/>
            <a href="mailto:shaziatariq1989@gmail.com" target="_blank" rel="noopener noreferrer">
            Gmail
            </a>
          </div>
          
          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <FaGithub size={30}/>
            <a href="https://github.com/SadiaTariq00" target="_blank" rel="noopener noreferrer">
            Github
            </a>
          </div>

          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <FaLinkedin size={30}/>
            <a href="https://www.linkedin.com/in/sadia-tariq-51018b324" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
    
        </div>

        <div className="space-y-8">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input type="text" className="h-[40px] bg-transparent border border-amber-900" id="name" />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input type="text" className="h-[40px] bg-transparent border border-amber-900" id="email" />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="msg">Message</label>
            <textarea className="bg-transparent border border-amber-900" id="msg" rows={6}></textarea>
          </div>

          <button className="bg-amber-800 p-2 px-6 rounded-xl hover:bg-amber-600" data-aos="zoom-in-up">Send</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
