'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import FluidNavbar from '../components/fluid-navbar'
import AchievementsSection from './achievements'
import SkillsetSection from './skillset'
import Career from './career'
// ['Skillset', 'Stories', 'Journey']
const Sections = () => {
  const [selected, setSelected] = useState<string | null>(null)
  return (
    <>
      <motion.div className="sticky top-4 z-50" layout>
        <FluidNavbar onNavbarValueChanged={value => setSelected(value)} />
      </motion.div>
      <div className="pt-4" />
      {(selected === null || selected === 'Stories') && (
        <AchievementsSection className="pt-4" />
      )}
      {selected === 'Skillset' && <SkillsetSection className="pt-4" />}
      {selected === 'Journey' && <Career className="pt-4" />}
    </>
  )
}

export default Sections
