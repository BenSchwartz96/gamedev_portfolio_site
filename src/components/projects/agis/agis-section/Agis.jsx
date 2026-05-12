import './agis.css'
import { useState } from 'react'


//Images
import agis_main_menu from '../../../../assets/Agis/MainMenu.jpg'
import agis_lvl_1 from '../../../../assets/Agis/Level1.jpg'
import agis_lvl_4 from '../../../../assets/Agis/Level4.jpg'
import agis_lvl_6 from '../../../../assets/Agis/Level6.jpg'

const Agis = () => {

  const [currentImage, setCurrentImage] = useState(0)
  const images = [agis_main_menu, agis_lvl_1, agis_lvl_4, agis_lvl_6]

  const prev = () => setCurrentImage(currentImage === 0 ? 3 : currentImage - 1)
  const next = () => setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1)

  return (

    <div className='container agis__container'>

        <div className='agis__content-1'>
            <p>My first proper project and the beginning of my game dev journey with Godot, Agis is a rudimentary single player card game, played on a 2x3 grid and with a focus on positional effects. The project began following a tutorial on how to implement basic card game mechanics. As I kept fiddling, adding things, and wondering how to implement a given thing, I decided to spin it out into a full project. I did this to see how far I could take it, to begin getting experience managing something larger in scope than the small-scale tutorials I'd be doing up to then, and to get some practice structuring a larger codebase. Also, of course, to just see how things went and what lessons would present themselves to me. </p>
        </div>

        <div className='agis__middle-section'>
            <div className='agis__content-2'>
                <p>Befitting the unstructured and haphzard nature of the development, the main systems and game flow weren't very consciously designed, instead arising more naturally out of whatever I was learning at the time. I chose not to worry about this, deciding that an early mess-around learning project wasn't the right place to try and carefully design game systems and make a 'good' game. I embraced the meandering, unstructured nature of this design philosophy and just let things happen, keeping an open mind and aiming primarily to learn. Adhering to a 'follow the fun' philosophy, this led me towards the design focusing on positional elements. I'd made a basic grid on which to place units, and it became clear that planning turns and positional synergies was the most interesting and enjoyable part of playing it. </p>
            </div>
            <div className='agis__gallery'>
                <span className='agis__gallery-counter'>
                    {currentImage + 1}/{images.length}
                </span>
                <img src={images[currentImage]}/>
                <div className='agis-gallery-buttons__container'>
                    <button className='agis-gallery-button' onClick={prev}> Prev </button>
                    <button className='agis-gallery-button' onClick={next}> Next </button>
                </div>
            </div>
        </div>

        <div className='agis__content-3'>
            <p>It was a very enjoyable experience, and indeed a very educational one. I learned a lot about the sorts of things that happen when you don't plan ahead, and the limitations this places on you. I learned a lot of crucial basics. General things like implementing basic animations, music, and art, and creating basic UIs in Godot. On the design side, designing a satisfying player deck that helped teach the player the basics while leaving room for depth and mastery, and creating varied levels that challenged the player while taking advantage of the mechanical possibility space my systems created. From a programming perspective, organising my code and using tools like custom resources, and from an administrative/organisation perspective, keeping track of everything I'd done and was doing. I don't think the final product is a great game. But I'm proud of it nonetheless, and wrapped eager to take the lessons learned forward. </p>
        </div>


    </div>
    
  )
}

export default Agis