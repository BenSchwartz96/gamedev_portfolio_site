import React from 'react'
import './portfolio.css'


const data = [
  {
    id: 1,
    image: '',
    title: 'This Website',
    description: 'The site you\'re on right now, designed to present myself to potential employers. Made with CRA, React, JS, & CSS.',
    github: 'https://github.com/BenSchwartz96/portfolio-website',
    demo: 'none'
  },
  {
    id: 2,
    image: '',
    title: 'Reprovisioning Script',
    description: 'A Python script from my last job, designed to read customer files and automate the process of identifying and fixing regular provisioning errors.',
    github: 'https://github.com/BenSchwartz96/Redacted_Reprovisioning_Script',
    demo: 'none'
  },
  {
    id: 3,
    image: '',
    title: 'Movie API w NodeJS',
    description: 'An API, built with NodeJS, Express, MongoDB & Mongoose, for the purposes of tying into the MyFlix projects. The API interacts with a database containing information about movies, directors, and users.',
    github: 'https://github.com/BenSchwartz96/Movie-API',
    demo: 'https://elt-myflix.herokuapp.com/documentation.html'
  },
  {
    id: 4,
    image: '',
    title: 'MyFlix (React)',
    description: 'My initial learning project with React. A basic site that allows you to sign up, peruse information about movies, directors, and genres, and select favorites.',
    github: 'https://github.com/BenSchwartz96/myFlix-client',
    demo: 'https://bms-myflix.netlify.app/'
  },
  {
    id: 5,
    image: '',
    title: 'MyFlix (Angular)',
    description: 'Another version of MyFlix, this time made with (and for the purposes of learning) Angular. Though the surface differences are largely minor and cosmetic, the underlying structure is completely different.',
    github: 'https://github.com/BenSchwartz96/myflix_angular',
    demo: 'https://benschwartz96.github.io/myflix_angular/welcome'
  },
  {
    id: 6,
    image: '',
    title: 'Meet',
    description: 'A PWA built using a test-driven development approach, which linked to the Google Calendar API to find events and present information about them. In this project, I began learning how to use OAuth2 and AWS, as well as various testing tools and libraries such as Enzyme, Jest, Puppeteer, and Cucumber. ',
    github: 'https://github.com/BenSchwartz96/meet',
    demo: 'https://benschwartz96.github.io/meet/'
  },
  // {
  //   id: 7,
  //   image: '',
  //   title: 'React Native Chat App',
  //   description: 'Chat app made with (and for the purposes of learning) React Native. Developed with Expo and GiftedChat, the app made a functional chat room for multiple users.',
  //   github: 'https://github.com/BenSchwartz96/chat_app',
  //   demo: 'https://www.youtube.com/watch?v=x8qeEnUMcTc'
  // },
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Learning Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

          {
            data.map(({id, image, title, description, github, demo}) => {
              return (
                <article key={id} className="portfolio__item">
                  <div className="portfolio__item-img">
                    {/* <img src={image} alt={title} /> */}
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="portfolio__item-cta">
                    <a href={github} className="btn" target='_blank'>Github</a>
                    {demo !== 'none' && (
                      <a href={demo} className="btn btn-primary" target='_blank'>Demo</a>
                    )}
                  </div>
              </article>
              )
            })
          }

      </div>

    </section>
  )
}

export default Portfolio