import { useRouter } from 'next/router'
import React from 'react'

function FilteredEvents() {
   const router = useRouter();
   console.log(router.query);
    return (
        <div>
            <h1>FiltredEvent posts</h1>
        </div>
    )
}

export default FilteredEvents
