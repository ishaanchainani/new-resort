import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'

import {Link} from 'react-router-dom'
 

const Rooms = () => {
    return <Hero hero="roomsHero">

        <Banner title="rooms and suites" subtitle = "please call our hotline to make a booking (1-800) 334 7342">
            <Link to='/' className="btn-primary">
                return home
            </Link>
            </Banner>
    </Hero>
    
};

export default Rooms;