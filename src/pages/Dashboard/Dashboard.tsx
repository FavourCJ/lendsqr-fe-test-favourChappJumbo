import React, { useContext, useEffect, useState } from 'react'
import './dashboard.scss'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Cards from '../../components/cards/Cards'
import filter from '../../components/images/filter.svg'
import status from '../../components/images/userStaus.svg'
import dropdown from '../../components/images/dropdown.svg'
import {UserContext} from '../../components/contextFile/UserContext'
import eye from '../../components/images/eye.svg'
import blacklist from '../../components/images/blacklist.svg'
import active from '../../components/images/active.svg'
import { useHistory } from 'react-router-dom'

const Dashboard = () => {
  const {user, fetchUserData, lendsqrLocalStorage} = useContext(UserContext);
  const [displayDetails, setDisplayDetails] = useState([])
  const history = useHistory()
  // const displayXamount = (val: any) =>{

  //   user.map((val:any)=>{
  //     if (val.id <100){
  //       setDisplayDetails({...val, displayDetails})
  //       console.log(val)

  //     }
  //   })
  // }
  
  useEffect(()=>{
    fetchUserData();
  },[])


  return (
    <div className='project-container'>
      <div className='dashbord-header'>
      <Header/>
      </div>
      <div className='content-container'> 
      <Sidebar/>
      <div className='content'>
        <p className='dashboard-user-txt'>Users</p>
      <Cards/>
      <div className='content-sub-section'>
       {<p className='better-experience'>For better experience, use a bigger screen to display table</p>}
        <table className='dashboard-table'>
          <tr>
          <th className='dashboard-table-th'>ORGANIZATION 
            <img src= {filter} className='dashboard-filter-icon'/>
            </th>
          <th className='dashboard-table-th'>USERNAME
          <img src= {filter} className='dashboard-filter-icon'/>
          </th>
          <th className='dashboard-table-th'>EMAIL
          <img src= {filter} className='dashboard-filter-icon'/>
          </th>
          <th className='dashboard-table-th'>PHONE NUMBER
          <img src= {filter} className='dashboard-filter-icon'/>
          </th>
          <th className='dashboard-table-th'>DATE JOINED
          <img src= {filter} className='dashboard-filter-icon'/>
          </th>
          <th className='dashboard-table-th'>STATUS
          <img src= {filter} className='dashboard-filter-icon'/>
          </th>
          </tr>
         
          {user.map(( val:any)=>(
            <tr>
            <td className='dashboard-table-td'>{val.organization}</td>
            <td className='dashboard-table-td'>{val.username}</td>
            <td className='dashboard-table-td'>{val.email}</td>
            <td className='dashboard-table-td'>{val.phone_number.slice(1)}</td>
            <td className='dashboard-table-td'>{val.date_joined}</td>
            
            { val.userStatus == "blacklisted" 
                 ?
              <td className='dashboard-table-td'>
              <button className='dashboard-table-td-blacklisted-btn'>
                {val.userStatus}
                </button> 
              </td>
                 : 
                 <>
                 {val.userStatus == "inactive"
                  ?
                  <td className='dashboard-table-td'>
                    <button className='dashboard-table-td-inactive-btn'>
                      {val.userStatus}
                      </button>
                  </td> 
                  :
                  <>
                  {val.userStatus == "pending" ?
                  <td className='dashboard-table-td'>
                  <button className='dashboard-table-td-pending-btn'>
                    {val.userStatus}</button>
                </td>
                  :
                  <td className='dashboard-table-td'>
                    <button 
                    
                     className='dashboard-table-td-active-btn'>
                      {val.userStatus}</button>
                  </td>
                  }
                  </>

                 }
                 </>
                 
              }

              <td className='dashboard-table-td'>
              <div className="dashboard-table-dropdown">
                      <button className="dashboard-table-dropbtn">
                      <img src= {status} className='dashboard-status-icon'/>
                      </button>
                      <div className="dashboard-table-dropdown-content">
                      <button
                      className='view-details-btn'
                       onClick={()=>{ 
                        lendsqrLocalStorage(val);
                        history.push("/user-details")
                        }}><img src= {eye} className='dashboard-tb-dropdwn-icon'/>View Details</button>
                      <button className='view-details-btn'>
                        <img src= {blacklist} className='dashboard-tb-dropdwn-icon'/>Blacklist User</button>
                      <button className='view-details-btn'>
                        <img src= {active} className='dashboard-tb-dropdwn-icon'/>Activate User</button>
                      
                      </div>
                  </div> 
              </td>
           
          </tr>   
          ))}
             
        </table>
        
        <div className='dashboard-table-filter-container'>
          <div className='dashboard-table-filter-section'>
            <p className='dashboard-table-filter-txt'>Showing</p>
            <div className='dashboard-table-filter-num-container'>
            <p className='dashboard-table-filter-num'>100</p>
            <div className="dropdown">
            <button className="dropbtn">
            <img className='dashboard-dropdown-num-icon' src= {dropdown}/>
            </button>
            <div className="dropdown-content">
            <a href="#">200</a>
            <a href="#">300</a>
            <a href="#">400</a>
            <a href="#">500</a>
            </div>
          </div> 
            </div>
            
            <p className='dashboard-table-filter-out-of-num'>Out of 100</p>
            
          </div>

          <div className='dashboard-table-filter-num-section'>
           
          </div>

        </div>

      </div>
      </div>
        
      </div>
    </div>
  )
}

export default Dashboard

