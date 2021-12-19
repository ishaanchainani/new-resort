import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaSkiing, FaTram, FaSwimmingPool } from 'react-icons/fa';


export default class Services extends Component {
        
state = {
    
    services: [
        {
            icon:<FaCocktail/>,
            title:"All-Inclusive Bar",
            info: "We have an amazing variety of drinks at various bars located throughout the lodge. Feel free to open/close a tab and enjoy a nice complimentarty cocktail while hitting the slopes!"
        },
        { 
            icon:<FaSkiing/>,
            title:"Ski/Snowboard Rentals and Passes",
            info: "If you left your skis at home, no problem! We have a wide variety of skis and snowboards for all ages at afforable rental prices!"
        },
        {
            icon:<FaTram/>,
            title:"Gondola Rides",
            info: "Enjoy a nice scenic ride through the mountains with family and friends. Gondola rides are open Monday-Friday and are open to all guests of the resort!"
        },
        {
            icon:<FaSwimmingPool/>,
            title:"Heated Pools",
            info: "Throughout the lodge, heated pools are open 24/7. After a long day on the mountain, nothing is better than a warm and relaxing heated pool"
        }
    ]
}

    render(){
        return(
            <section className="services">
                <Title title = "amenities" />
                <div className="services-center">

                    {this.state.services.map( (item,index) => {

                        return <article key={index} className="service">

                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                            </article>
                        
                    })}

                </div>
                
            </section>
        )
    }

}


