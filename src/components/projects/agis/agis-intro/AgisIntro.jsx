import './agis-intro.css'

import agis_main_menu from '../../../../assets/Agis/MainMenu.jpg'

const AgisIntro = () => {
  return (

    <div className='container agis-intro__container'>

        <div className='agis-intro__pic1'>
            <img src={agis_main_menu} alt="Agis title screen" />
        </div>

        <div className='agis-intro__content-1'>
            <h5>Agis, a basic PvE card battler with a focus on positional effects, was my first proper game project following the initial tutorials I followed. It itself began following a tutorial before spinning out into something larger. Befitting its unstructured nature, it wasn't very consciously designed, with the design instead arising more naturally out of trying something spontanously and following whatever I decided I wanted to learn on the day. At a certain point I realised it had grown big enough to be a good candidate for my first proper project. </h5>
        </div>


    </div>
    
  )
}

export default AgisIntro