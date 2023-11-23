import React from 'react'
import Skill from './Skill'

const Skills = () => {
    const skills = [
        'React',
        'NextJS',
        'Tailwind CSS',
        'DaisyUI',
        'Bootstrap CSS',
        'Firebase',
        'Azure',
        'AWS',
        'Python',
        'Django',
        'PHP',
        'JavaScript',
        'VBA',
        'Heroku',
        'NodeJS',
        'MYSQL',
        'Prisma',
        'Nodemailer',
        'Third-Party API'
    ]
  return (
    <div className='flex max-w-4xl flex-wrap m-5'>
        <h2>Skills</h2>
        {skills.map((skill)=>{ return <Skill skill={skill} />})}
    </div>
  )
}

export default Skills