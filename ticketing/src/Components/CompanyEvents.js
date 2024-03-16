import React, {useState, useEffect} from 'react'
import axios from 'axios';

function CompanyEvents() {
  const [events, setEvents] = useState([]);

  useEffect(()=> {
    const fetchEvents= async()=>{
      try{
        const accessToken=localStorage.getItem('access_token');
        const config = {
          headers:{
            Authorization: `Bearer ${accessToken}`,

          },
        };
        const response = await axios.get('/companyevents',config);
        setEvents(response.data);
        console.log(response.data)
      }
      catch(error){
        console.log(error);
      }
    };

    fetchEvents();

  },[]);

 

  return (
    
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Company Events</h1>
      <ul>
        {events.map((event, index) => (
          <li key={index} className="mb-8">
            <div className="bg-gray-200 rounded-lg p-4">
              <p className="text-xl font-semibold">{event.event_name.toUpperCase()}</p>
              <p className="text-gray-700">{event.description.toUpperCase()}</p>
              <div className="flex items-center mt-2">
                <p className="mr-4">
                  <strong>Start Date:</strong> {event.start_date}
                </p>
                <p>
                  <strong>End Date:</strong> {event.end_date}
                </p>
              </div>
              <div className="flex items-center mt-2">
                <p className="mr-4">
                  <strong>Venue:</strong> {event.venue_name}
                </p>
                <p>
                  <strong>Location:</strong> {event.location}
                </p>
              </div>
              <div className="mt-2">
                <p className="font-semibold">Ticket Categories:</p>
                <ul>
                  {Object.entries(event.ticket_categories).map(([category, quantity]) => (
                    <li key={category} className="ml-4">
                      {category}: {quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default CompanyEvents




 
