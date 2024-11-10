import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className="container pt-32">
        <div className="grid md:grid-cols-2 gap-20 items-center">
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl'data-aos="zoom-in-up">Technologies I Work With</h2>
                <p className="text-gray-500 pt-1"> 
                    i have a solid  function in web development spacializing in HTML CSS and Javascript.My experiance extends ti using framework like react and next.js to create dynamic and user-freindly applications,i am also proficientin tailwand css for efficient styling and design.with a passion for learning,i stay updated on the latest Technologies to enhance my skills set and controbite effectively to projects</p>
            </div>
            <div>
                <div className="grid grid-cols-2 text-accent text-3xl sm:text-4xl">
                    <div className='space-y-2'>

                        <h2 data-aos="zoom-in-up">Typescript</h2>
                        <h2 data-aos="zoom-in-up" >React.js</h2>
                        <h2 data-aos="zoom-in-up" >Next.js</h2>
                        </div>
                        <div className="space-y-2">
                        <h2 data-aos="zoom-in-up">Tailwind</h2>
                        <h2 data-aos="zoom-in-up" >CSS</h2>
                        <h2 data-aos="zoom-in-up">Node.JS</h2>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills