import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousal from '../../components/HomeSectionCarousal/HomeSectionCarousal'
import { mens_kurta } from '../../../Data/mens_kurta'
const HomePage = () => {
  return (
    <div>
      <MainCarousel/>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousal data={mens_kurta} sectionName={"men's kurta"} />
        <HomeSectionCarousal data={mens_kurta} sectionName={"men's Shoes"}/>
        <HomeSectionCarousal data={mens_kurta} sectionName={"men's shirt"}/>
        <HomeSectionCarousal data={mens_kurta} sectionName={"Women's Saree"}/>
        <HomeSectionCarousal data={mens_kurta} sectionName={"women's co-ords"}/>
        <HomeSectionCarousal data={mens_kurta} sectionName={"Women's dresses"}/>
        <HomeSectionCarousal data={mens_kurta} sectionName={"women's shoes"}/>
      </div>
    </div>
  )
}

export default HomePage
