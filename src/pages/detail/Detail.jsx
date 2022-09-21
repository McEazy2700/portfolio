import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import ReactPlayer from 'react-player'
import AnimatedPage from '../../Components/animations/AnimatedPage'
import getUrl from '../../utils/getUrl'
import getData from '../../utils/getData'
import Tag from '../../Components/tag/Tag'
import styles from './Detail.module.css'
import './Detail.css'

const Detail = () => {
    const [project, setProject] = useState({})
    const [technologies, setTechnologies] = useState([])
    const projectPath = useParams()
    const isSmall = useMediaQuery({
        query: '(max-width: 700px)'
    })
    const isSmaller = useMediaQuery({
        query: '(max-width: 415px)'
    })
    const isSmallest = useMediaQuery({
        query: '(max-width: 400px)'
    })

    let width = '650px'
    let height = '360px'
    if (isSmall) {
        width = '400px'
        height = '225px'
    }else if (isSmaller) {
        width = '300px'
        height = '169px'
    }else if (isSmallest) {
        width = '250px'
        height = '140px'
    }

    useEffect(()=>{
        let projectUrl = getUrl(`projects/${projectPath.id}`)
        getData(projectUrl).then(data => {
            setProject(data)
            setTechnologies(data.technologies)})
    }, [project.id])

  return (
    <AnimatedPage className='portfoio__project-detail'>
        <Link className={styles.back} to='..'>
            <div className={styles.back}>
                  <span>&#8592;</span> <span>Back</span>
            </div>
        </Link>
        <section style={{ backgroundImage: `url(${project.image})`}} className={styles.section}>
            <div className={styles.container}>
                <div className="project__details-video">
                    <ReactPlayer
                    width={'100%'}
                    height={'100%'}
                    className='react-player'
                    style={{ aspectRatio: '16 / 9'}}
                    controls loop url={project.video} />
                </div>
                <div className="project__details-text">
                    <div className="project__title">
                        <h1>{project.name}</h1>
                    </div>
                    <div className={styles.description}>
                        <p>{project.description}</p>
                    </div>
                    <ul className="project__techStack">
                        <Tag name='stack'>
                            {technologies.map(tech=><li key={tech.id}>{tech.name}</li>)}
                        </Tag>
                    </ul>
                    <div className="project__cta">
                        <a className='project__github' href={project.github}>Github</a>
                        <a className='project__link' href={project.link}>Live Demo</a>
                    </div>
                </div>
                  
            </div>
        </section>
    </AnimatedPage>
  )
}

export default Detail