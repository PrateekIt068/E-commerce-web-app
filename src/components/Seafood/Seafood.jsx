import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgSeaFood from '../../assets/seafood-banner.jpg'

const Seafood = () => {
  return (
    <div>
      <CategoryPage title="Meat & SeaFood" bgImage={BgSeaFood} categories={['Meat', 'Seafood']} />
    </div>
  )
}

export default Seafood