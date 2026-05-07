import Navbar from '../components/common/navbar/Navbar'
import ProjectsHeader from '../components/projects/header/ProjectsHeader'
import AgisHeader from '../components/projects/agis/agis-header/AgisHeader'
import AgisIntro from '../components/projects/agis/agis-intro/AgisIntro'

const Projects = () => {

    return (
        <>

            <Navbar/>
            <ProjectsHeader />
            <AgisHeader />
            <AgisIntro />
        </>
    )
}

export default Projects