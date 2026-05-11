import './agis-intro.css'
import { useState } from 'react'


//Images
import agis_main_menu from '../../../../assets/Agis/MainMenu.jpg'
import agis_lvl_1 from '../../../../assets/Agis/Level1.jpg'
import agis_lvl_4 from '../../../../assets/Agis/Level4.jpg'
import agis_lvl_6 from '../../../../assets/Agis/Level6.jpg'

const AgisIntro = () => {

  const [currentImage, setCurrentImage] = useState(0)
  const images = [agis_main_menu, agis_lvl_1, agis_lvl_4, agis_lvl_6]

  const prev = () => setCurrentImage(currentImage === 0 ? 3 : currentImage - 1)
  const next = () => setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1)

  return (

    <div className='container agis-intro__container'>

        <div className='agis-intro__gallery'>
            <span className='agis-intro__gallery-counter'>
                {currentImage + 1}/{images.length}
            </span>
            <img src={images[currentImage]}/>
        </div>
        <div className='container agis-gallery-buttons__container'>
            <button className='agis-gallery-button' onClick={prev}> Prev </button>
            <button className='agis-gallery-button' onClick={next}> Next </button>
        </div>

        <div className='agis-intro__content-1'>
            <h5>Agis, a basic PvE card battler with a focus on positional effects, was my first proper game project following the initial tutorials I followed. It itself began following a tutorial before spinning out into something larger. Befitting its unstructured nature, it wasn't very consciously designed, with the design instead arising more naturally out of trying something spontanously and following whatever I decided I wanted to learn on the day. At a certain point I realised it had grown big enough to be a good candidate for my first proper project. </h5>
        </div>


    </div>
    
  )
}

export default AgisIntro