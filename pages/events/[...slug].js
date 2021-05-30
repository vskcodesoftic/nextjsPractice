import { useRouter } from 'next/router'
import React from 'react'
import EventList from '../../components/events/EventList';
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
       return <p>Please adjust the filter , invalid filter</p>
   }

  const FilteredEvents = getFilteredEvents({
      year : numYear,
      month : numMonth
  })

  if(!FilteredEvents || FilteredEvents.length === 0) {
      return <p>no events found !</p>
  }



    return (
        <div>
            <EventList events={FilteredEvents} />
        </div>
    )
}

export default FilteredEvents
