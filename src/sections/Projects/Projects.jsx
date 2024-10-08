import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png';
import ProjectCard from '../../common/ProjectCard.jsx';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={viberr} 
            link={'https://github.com/Ade-mir/html-css-js-portfolio-tutorial-2'}
            h3='Viberr'
            p='Streaming App'
            />
            <ProjectCard src={viberr} 
            link={'https://github.com/Ade-mir/html-css-js-portfolio-tutorial-2'}
            h3='Viberr'
            p='Streaming App'
            />
            <ProjectCard src={viberr} 
            link={'https://github.com/Ade-mir/html-css-js-portfolio-tutorial-2'}
            h3='Viberr'
            p='Streaming App'
            />
        </div>
    </section>
    
  )
}

export default Projects
