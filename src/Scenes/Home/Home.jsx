import React from 'react';
import FilterBy from '../../Components/Filter/FilterBy';
import Map from '../../Components/Map/Map'

function Home() {
  return (
    <div className='home'>
      <FilterBy />
        <Map />
    </div>
  )
}

export default Home