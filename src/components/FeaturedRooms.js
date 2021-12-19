import React,  { Component } from 'react'
import { RoomContext } from "../context" 
import Loading from "./Loading"
import Room from "./Room"
import Title from "./Title"

export default class FeaturedRooms extends Component {
static contextType = RoomContext;
    render(){ 
        
        return (<section className= "featured-rooms">

            <Title tile = "Ski Rentals" />

            <div className="featured-rooms-center">
                
            </div>
            
            </section>)
    }

}
