import React from 'react'
import FreightSection from '../Pages/FreightSection'
import LikeSection from '../Pages/LikeSection'
import LogisticSection from '../Pages/LogisticSection'
import TeamSection from '../Pages/TeamSection'
import WorkingSection from '../Pages/WorkingSection'
import Award from './Award'
import Visit from './Visit'

const OrderMain = () => {
  return (
    <div>
        <FreightSection/>
        <Award/>
        <LikeSection/>
        <LogisticSection/>
        <Visit/>
        <TeamSection/>
        <WorkingSection/>
    </div>
  )
}

export default OrderMain