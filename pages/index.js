import Link from 'next/link'
import EventList from '../components/events/EventList'
import { getFeaturedEvents } from '../DummyData'

export default function Home() {
  const feauturedEvents = getFeaturedEvents();
  return (
    <div>
      
        <EventList  events={feauturedEvents}/>
      
    </div>
  )
}
