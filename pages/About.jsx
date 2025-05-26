import React from 'react'
import Team from '../Components/section/Team'
import ArtGallerySlider from '../Components/section/ArtGallery'
import MissionSection from '../Components/section/Mission'

function About() {
  return (
    <div>
        <MissionSection/>
        <Team/>
        <ArtGallerySlider/>
    </div>
  )
}

export default About