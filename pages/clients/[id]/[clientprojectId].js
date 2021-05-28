import React from 'react'
import { useRouter } from 'next/router'

const SpecificClientProjectPage = () => {
  const router = useRouter()
  console.log(router.query)
    return (
        <div>
            <h1>my spefic project</h1>
        </div>
    )
}

export default SpecificClientProjectPage
