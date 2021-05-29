import React from 'react'
import EventItem from './EventItem';

import classes from './event-list.module.css';

const EventList = (props) => {
    const {events } = props;
    return (
        <ul className={classes.list}>
           {events.map(event => 
               <EventItem key={event.id}
               id = {event.id} 
               title ={event.title}
               location ={event.location}
               date={event.date}
               image={event.image}/>
           )}     
        </ul>
    )
}

export default EventList
