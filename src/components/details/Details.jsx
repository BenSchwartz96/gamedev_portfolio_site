import React from 'react'
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
            <h3>Interests</h3>
          </div>

          <ul className="details__list">
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>Cooking</p>
            </li>
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>Hiking</p>
            </li>
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>Skiing</p>
            </li>
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>Reading</p>
            </li>
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>Films</p>
            </li>
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>Gaming</p>
            </li>
          </ul>
        </article>
        {/* END OF DETAILS LIST 1 */}

        {/* DETAILS LIST 2 */}
        <article className="details__section">
          <div className="details__head">
            <h3>Personal Traits</h3>
          </div>

          <ul className="details__list">
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>Friendly</p>
            </li>
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>Empathetic</p>
            </li>
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>Passionate</p>
            </li>
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>Curious</p>
            </li>
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>Analytical</p>
            </li>
            <li>
              <VscCircleFilled className="details__list-icon" />
              <p>Communicative</p>
            </li>


          </ul> 
        </article>
        {/* END OF DETAILS LIST 2 */}

        {/* DETAILS LIST 3 */}
        <article className="details__section">
          <div className="details__head">
            <h3>Experience</h3>
          </div>

          <ul className="details__list">

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