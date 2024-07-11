import React from 'react'
import ServiceCard from './ServiceCard';
import {Col} from 'reactstrap';
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizeImg from '../assets/images/customization.png'

const serviceData = [
    {
        imgUrl: weatherImg,
        title: 'Sri Lanka Weather',
        desc: 'Get the latest weather updates to plan your perfect trip to Sri Lanka.'
    },
    {
        imgUrl: guideImg,
        title: 'Expert Local Guides',
        desc: 'Explore Sri Lanka with our experienced guides who know the best spots.'
    },
    {
        imgUrl: customizeImg,
        title: 'Personalized Itineraries',
        desc: 'Tailor your journey to Sri Lanka with customized travel plans just for you.'
    }
    
]

const ServiceList = () => {
  return (
    <>
    {
        serviceData.map((item,index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
                <ServiceCard item={item} />
            </Col>
        ))
    }
    </>
  )
}

export default ServiceList
