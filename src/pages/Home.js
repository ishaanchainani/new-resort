import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from 'react-router-dom'
import Amenities from '../components/Amenities'
import FeaturedRooms from '../components/FeaturedRooms'

export default function Home(){
    return (
    <>
    <Hero>
        <Banner title="new year's vacation package" subtitle="luxury rooms starting at $499">
        <Link to ="/rooms" className="btn-primary">
            view all rooms
        </Link>

        </Banner>
        
        
    </Hero>
    <Amenities></Amenities>
    <FeaturedRooms></FeaturedRooms>
   </>
    )
}