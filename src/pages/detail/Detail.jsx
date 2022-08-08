import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import ReactPlayer from 'react-player'
import AnimatedPage from '../../Components/animations/AnimatedPage'
import getUrl from '../../utils/getUrl'
import getData from '../../utils/getData'
import Tag from '../../Components/tag/Tag'
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

    let width = '650px'
    let height = '360px'
    if (isSmall) {
        width = '400px'
        height = '225px'
    }else if (isSmaller) {
        width = '100vw'
        height = '169px'
    }

    useEffect(()=>{
        let projectUrl = getUrl(`projects/${projectPath.id}`)
        getData(projectUrl).then(data => {
            setProject(data)
            setTechnologies(data.technologies)})
    }, [project.id])

  return (
    <AnimatedPage className='portfoio__project-detail'>
        <div className="project__backButton">
            <Link to='..'>&#8592; Back</Link>
        </div>
        <section className='project__details'>
            <div style={{ backgroundImage: `url(${project.image})`}} className="protfolio__hero"></div>
            <div className="project__details-text">
                <div className="project__title">
                    <h1>{project.name}</h1>
                </div>
                <div className="project__description">
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
            <div className="project__details-video">
                <ReactPlayer
                width={width}
                height={height}
                className='react-player'
                 controls loop url={project.video} />
            </div>
        </section>
    </AnimatedPage>
  )
}

export default Detail