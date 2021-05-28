import Link from 'next/link'
import React from 'react'

const ClientsPage = () => {
    const clients = [
        { id : "1", name:"siva"},
        { id : "2", name:"sam"}

    ]
    return (
        <div>
           <h1>Clients Page</h1> 
           <ul>
             

                  {clients.map(client => <li key={client.id}>
                      <Link href= {{
                        pathname :"/clients/[id]",
                        query : {id : client.id},
                    }}
                    >{client.name}</Link>
                    </li>
                    )}
                
            {/* alternative way  */}
             <h2>alternate way</h2>
            {clients.map( client => <li key={client.id}>
                <Link 
                href={`/clients/${client.name}`}>
                    {client.name}
                </Link>
            </li>)}
            
           </ul>
        </div>
        
    )
}

export default ClientsPage
