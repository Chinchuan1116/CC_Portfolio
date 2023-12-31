import React,{useState, useEffect} from 'react'
import './Skills.scss'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'

const Skills = () => {
  useEffect(() => {
    const query = '*[_type == "experiences"]'
    const skillsQuery = '*[_type == "skills"]'

    client.fetch(query)
    .then((data)=>{
      setExperiences([...data].sort((a, b) => b.year - a.year));
    })

    client.fetch(skillsQuery)
    .then((data)=>{
      setSkills(data);
    })


  }, [])
  const [experiences, setExperiences] = useState([])
  const [skills, setSkills] = useState([])


  return (
    <>
      <h2 className='head-text'> Skill & Experiences</h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills?.map((skill)=>(
            <motion.div whileInView={{opacity:[0,1]}} transition={{duration:0.5}} className='app__skills-item app__flex' key={skills.name}>
              <div className='app__flex' style={{backgroundColor:'#edf2f8'}}>
                <img src={urlFor(skill.icon)} alt={skill.name}/>
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className='app__skills-exp'>
          {experiences.map((experience)=>(
            <motion.div className='app__skills-exp-item' key={experience.year}>
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                {experience?.works?.map((work)=>(
                  <>
                    <motion.div whileInView={{opacity:[0,1]}} transition={{duration:0.5}} className='app__skills-exp-work' data-tip data-for={work.name} key={work.name}>
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text'>{work.company}</p>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Skills,'app__skills'),'skills','app__whitebg')