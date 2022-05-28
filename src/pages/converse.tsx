import React from 'react'
import type { NextPage } from 'next'
import NavBar from '@/components/navigation/NavBar'
import MatchesBox from '@/components/connection/MatchesBox'

const Converse: NextPage = () => {
  return (
    <>
      <NavBar />
      <div>Converse</div>
      <div className="ml-2">
        <MatchesBox />
      </div>
    </>
  )
}

export default Converse
