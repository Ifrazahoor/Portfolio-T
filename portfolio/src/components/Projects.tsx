import React from 'react'
import Heading from './Heading'
import Card from './Card'
const data =[
    {
        id: 0,
        title:"Food Website",
        desc:"A React & TypeScript based app for managing and orginization",
         img: "/pic1.jpeg",
         tags:["React" ,"Node","CSS","TypeScript"],
    },
    {
        id: 1,
        title:"Blogger",
        desc:"A Next.js and TypeScript Powered website to track time",
        img: "/pic5.jpeg",
        tags:["NextJs","React","Node","CSS","TypeScript"]
    },
    {
      id: 3,
      title:"Interactive Resume",
      desc:"A typescript -based interactive resume build with HTML,CSS Alowing user to showcase their skill dynamically",
       img:"/pic4.jpeg",
       tags :["Node" ,"Next JS", "cSS", "typescript" ]
    },

]

const projects = () => {
  return (
    <div id="projects" className='container pt-32'>
     <Heading title="My Projects"/>
     <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
      {data.map((el) => (<Card
      key={el.id}
      title={el.title}
      desc={el.desc}
      img={el.img}
      tags={el.tags}
      />
      ))}
     </div>
    </div>
  )
}

export default projects