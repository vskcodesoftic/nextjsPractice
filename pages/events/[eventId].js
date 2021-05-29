import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import EventContent from '../../components/events/EventContent';
import EventLogistics from '../../components/events/EventLogistics';
import EventSummary from '../../components/events/EventSummary';
import { getEventById } from '../../DummyData';

const EventDetailPage = () => {
   const router = useRouter()
  const eventId =  router.query.eventId;
  const event = getEventById(eventId);
  if(!event){
      return <p>no event found !</p>
  }
    return (
       <Fragment>
           <EventSummary title={event.title} />
           <EventLogistics date={event.date} address={event.location} imageAlt={event.title} image={event.image}/>
           <EventContent >
               <p>
               {event.description}
               </p>
            </EventContent>
       </Fragment>
    )
}

export default EventDetailPage
