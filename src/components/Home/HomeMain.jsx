import React from 'react'
import AwardSection from "../Pages/AwardSection"
import HeroSection from "../Pages/HeroSection"
import TeamSection from "../Pages/TeamSection"
import TransportSection from "../Pages/TransportSection"
import ClientSection from "../Pages/ClientSection"
import BlogSection from "../Pages/BlogSection"
import VisiterSection from "../Pages/VisiterSection"
import LogisticSection from '../Pages/LogisticSection'
import LikeSection from '../Pages/LikeSection'

const HomeMain = () => {
  return (
    <div>
      <HeroSection />
      <LogisticSection />
      <LikeSection/>
      <AwardSection />
      <VisiterSection />
      <TeamSection />
      <TransportSection />
      <ClientSection />
      <BlogSection />
    </div>
  )
}

export default HomeMain