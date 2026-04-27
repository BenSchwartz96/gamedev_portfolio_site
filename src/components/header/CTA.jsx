import React from 'react'

import CV from '../../assets/BenSchwartz_CV.pdf'
import CV2025 from '../../assets/BenSchwartz_CV_2025.pdf'

// Call to action buttons
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV2025} download className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Contact</a>

    </div>
  )
}

export default CTA