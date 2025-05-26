import React from 'react'
import Hero from '../Components/section/Hero'
import OurServices from '../Components/section/Services'
import WhyChoose from '../Components/section/WhytoChoose'
import ThreeStepConsultation from '../Components/section/ThreeStepConsultation'
import Testimonial23 from '../Components/section/Testimonial'


function landing() {
  return (
    <div>
        <Hero/>
        <OurServices/>
        <WhyChoose/>
        <ThreeStepConsultation/>
        <Testimonial23/>
    </div>
  )
}

export default landing