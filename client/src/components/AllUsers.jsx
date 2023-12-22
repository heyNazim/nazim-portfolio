import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'


const AllUsers = () => {
  const [alluser, setAlluser]= useState([])

  useEffect(()=>{
    nazim()
  },[])

  const nazim =async()=>{
      const result = await axios.get(`${process.env.REACT_APP_API}/api/all-users`)
      if(result){
setAlluser(result.data.alluser)
      }
  }
  return (
    <>
      <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>All Users</h2>
        </div>
<table borser={1}>
<tr>
  <th>S.no</th>
  <th>Name</th>
  <th>Email</th>
  <th>Phone</th>
  <th>Message</th>
</tr>
{alluser.map((value,index)=>(

<tr>
<td key={index}>{index+1}</td>
<td>{value.name}</td>
<td>{value.email}</td>
<td>{value.phone}</td>
<td>{value.message}</td>
</tr>
)
)
}
</table>
        </div>
      </section>
    

    </>
  )
}

export default AllUsers