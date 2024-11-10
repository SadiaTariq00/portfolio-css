import React from 'react'
import Heading from './Heading'
import Card from './Card'
const data=[
    {
        id:0,
        title:"Static Resume Builder",
        desc:"A Typescript based resume built with HTML and CSS ",
        img: "/resume.png",
        tags:["HTML", "CSS", "Typescript"],
    },
    {
        
        id:1,
        title:"Temp-Counter",
       desc:"A Javascript based counter using with HTML and CSS ",
        img: "/Temp.png",
        tags:["HTML", "CSS" , "Javascript" ],
    },

    {
    id:2,
    title:"Todo-list",
    desc:"A NextJS based app using with tailwindcss ",
    img: "/todo.png",
    tags:["NextJS", "TailwindCSS" ],
    },
    {
        id:4,
        title:"Shopping-website",
       desc:"A NextJS based website using with tailwindcss ",
        img: "/ecommerce.png",
        tags:["NextJS", "TailwindCSS" ],
        },
    ]





export default function Projects() {
  return (
<div id="projects" className='container pt-30'>
    <Heading  title={'My Projects'} />
    <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-2 place-items-center">

     {data.map((el) => (<Card 
     key={el.id}
     title={el.title}
     desc ={el.desc}
     img ={el.img}
     tags={el.tags}
   

     
     
     />))}   
    </div>

</div>
  )
}
