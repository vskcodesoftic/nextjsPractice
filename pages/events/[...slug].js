import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/ResultsTitle';
import Button from '../../components/ui/Button';
import ErrorAlert from '../../components/ui/ErrorAlert';
import { getFilteredEvents } from '../../DummyData';

function FilteredEvents() {
   const router = useRouter();
   console.log(router.query);

   const FilterData = router.query.slug;

   if(!FilterData){
       return <p className="center">Loading...</p>
   }

   const FilteredYear = FilterData[0];
   const FilteredMonth = FilterData[1];
  
   //string to num
   const numYear = +FilteredYear;
   const numMonth = +FilteredMonth;

   // if numyear is nont a number or following condition is true then router is  not valid
   if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear <2021 ||  numMonth <1 || numMonth > 12){
       return <Fragment>
        
       <ErrorAlert><p>  Invalid Filter  !</p></ErrorAlert>
       <div className="center">
           <Button link="/events">Show All Events</Button>
     </div></Fragment>
   }

  const FilteredEvents = getFilteredEvents({
      year : numYear,
      month : numMonth
  })

  if(!FilteredEvents || FilteredEvents.length === 0) {
      return <Fragment>
          <ErrorAlert><p>no events found !</p></ErrorAlert>
          <div className="center">
              <Button link="/events">Show All Events</Button>
        </div></Fragment>
  }
//month begins from 0
 const date = new Date(numYear, numMonth - 1 )

    return (
        <Fragment>
            <ResultsTitle date={date} />
            <EventList events={FilteredEvents} />
        </Fragment>
    )
}

export default FilteredEvents
