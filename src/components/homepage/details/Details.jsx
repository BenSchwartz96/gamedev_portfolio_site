import './details.css'

import {BiCheck} from 'react-icons/bi'
import {VscCircleFilled} from 'react-icons/vsc'

const Details = () => {
  return (
    <section id="details">
      {/* <h5>About Me</h5> */}
      <h2>Further Details</h2>

      <div className="container details__container">

        {/* DETAILS LIST 1 */}
        <article className="details__section">
          <div className="details__head">
            <h3>Favorite Multiplayer Games</h3>
          </div>

          <ul className="details__list">
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>Hearthstone</p>
            </li>
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>Riftbound</p>
            </li>
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>League of Legends</p>
            </li>
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>Hunt: Showdown</p>
            </li>
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>Playerunknown's Battlegrounds</p>
            </li>
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>Valheim</p>
            </li>
          </ul>
        </article>
        {/* END OF DETAILS LIST 1 */}

        {/* DETAILS LIST 2 */}
        <article className="details__section">
          <div className="details__head">
            <h3>Favorite Games as Art</h3>
          </div>

          <ul className="details__list">
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>Outer Wilds</p>
            </li>
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>The FromSoftware Catalogue</p>
            </li>
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>Undertale</p>
            </li>
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>Hollow Knight & Silksong</p>
            </li>
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>Cairn</p>
            </li>
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>Night in the Woods</p>
            </li>

            {/* Other potential candidates: 
            Hyper Light Drifter 
            Zelda
            Final Fantasy
            Journey
            Clair Obscur

            */}

          </ul> 
        </article>
        {/* END OF DETAILS LIST 2 */}

        {/* DETAILS LIST 3 */}
        <article className="details__section">
          <div className="details__head">
            <h3>Not sure what we want here.</h3>
          </div>

          <ul className="details__list">

            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>Previously a list of experience.</p>
            </li>
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>Maybe game design values?</p>
            </li>
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>SWE in the IPTV Industry.</p>
            </li>
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>Lab/Research Assistant</p>
            </li>
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>Video Essay Production</p>
            </li>
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>Web Development Bootcamp</p>
            </li>
          </ul> 
        </article>
        {/* END OF DETAILS LIST 3 */}

      </div>
    </section>
  )
}

export default Details