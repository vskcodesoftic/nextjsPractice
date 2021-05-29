import React, { Fragment } from 'react'
import EventList from '../../components/events/EventList'
import EventsSearch from '../../components/events/EventSearch'
import { getAllEvents } from '../../DummyData'

function AllEventsPage() {
    const Events = getAllEvents()
    return (
        <Fragment>
            <EventsSearch />
            <EventList events={Events} />
        </Fragment>
    )
}

export default AllEventsPage
