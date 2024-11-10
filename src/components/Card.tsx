// import React from 'react'
// import Image from 'next/image';
// interface propsType{
//     title:string;
//     desc:string;
//     img:string;
//     tags:string[];
// }

// const Card: React.FC <propsType> =({title , desc, img, tags }) => {
//   return (
//     <div className=' bg-white border-4  border-b-8 rounded-lg border-amber-900 w-[300px] sm:w-[350px]' data-aos="zoom-in-up">
//       <div>
//         <Image className='w-[300px] sm:w-[350px] h-auto'
//         src={img}
//         width={350}
//         height={350}
//         alt={title}
        
//         />
//       </div>

// <div className="p-4 gap-20 space-y-6">
//   <div className="text-4xl  text-neutral-600 font-extralight">{title}</div>
//   <div className='text-neutral-600'>{desc}</div>
//   <div>
//     {tags.map((el) => (
//       <div className='tags' key={el}>
//         {el}

//       </div>))}
//   </div>
// </div>





//     </div>
//   )
// }

// export default Card



import React from 'react'
import Image from 'next/image';

interface propsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  return (
    <div className="bg-white border-4 rounded-lg border-amber-900 w-full sm:w-[350px] lg:w-[300px] " data-aos="zoom-in-up">
      <div >
        <Image
          className="w-full h-[200px] object-cover object-center"
          src={img}
          width={350}
          height={200}
          alt={title}
        />
      </div>

      <div className="p-4 space-y-4">
        <h3 className="text-2xl font-semibold text-neutral-600">{title}</h3>
        <p className="text-neutral-600 text-base">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((el) => (
            <span key={el} className="bg-amber-900 text-white py-1 px-3 rounded-lg text-sm">
              {el}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card;
