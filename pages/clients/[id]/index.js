import React from 'react'
import { useRouter } from 'next/router'

function ClientProjectPage() {
    const router = useRouter();

const Clickhandler =()=>{
    router.push(
        { 
            pathname : '/clients/[id]/[clientprojectid]',
            query : { id : 'siva' , clientprojectid : 'newproject'}
        }
    ) 
}
    return (
        <div>
            <h1>the projects of given client</h1>
            <button onClick={Clickhandler}>load project</button>
        </div>
    )
}

export default ClientProjectPage
