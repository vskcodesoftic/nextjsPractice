import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import EventList from '../../components/events/EventList'
import EventsSearch from '../../components/events/EventSearch'
import { getAllEvents } from '../../DummyData'

function AllEventsPage() {
    const router = useRouter();
    const Events = getAllEvents();
    
    const findEventsHandler = (year ,month) => {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath)
    }
    return (
        <Fragment>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList events={Events} />
        </Fragment>
    )
}

export default AllEventsPage
