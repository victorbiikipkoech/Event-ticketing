import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UserDashboard() {
    // const [userData, setUserData] = useState([])
    const [orderHistory, setOrderHistory] = useState([])

   useEffect(()=>{
    const fetchData = async () => {
        try {
            const accessToken = localStorage.getItem('access_token');
            const config = {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            };
            const response = await axios.get('/userorder',config)
            setOrderHistory(response.data)
            console.log(response.data)

        }
        catch(error) {
            console.log(error);
          }
    }



   },[])
        

  return (
    <div>
        <h1>Purchase History</h1>
    </div>
  )
}

export default UserDashboard