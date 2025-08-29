import React from 'react'
import TransportSection from '../Pages/TransportSection'
import AwardSection from '../Pages/AwardSection'
import LikeSection from '../Pages/LikeSection'
import LogisticSection from '../Pages/LogisticSection'
import TeamSection from '../Pages/TeamSection'
import ClientSection from '../Pages/ClientSection'
import FrequentSection from '../Pages/FrequentSection'

const AboutMain = () => {
  return (
    <div>
        <AwardSection/>
        <LikeSection/>
        <LogisticSection/>
        <TeamSection/>
        <ClientSection/>
        <FrequentSection/>
    </div>
  )
}

export default AboutMain