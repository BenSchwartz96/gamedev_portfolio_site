import Navbar from '../components/common/navbar/Navbar'
import ProjectsHeader from '../components/projects/header/ProjectsHeader'
import AgisHeader from '../components/projects/agis/agis-header/AgisHeader'
import Agis from '../components/projects/agis/agis-section/Agis'

const Projects = () => {

    return (
        <>

            <Navbar/>
            <ProjectsHeader />
            <AgisHeader />
            <Agis />
        </>
    )
}

export default Projects