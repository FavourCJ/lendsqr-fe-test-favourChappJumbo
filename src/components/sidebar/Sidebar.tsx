import React, { useState } from 'react'
import './sidebar.scss'
import guarantors from '../../components/images/users.svg'
import users from '../../components/images/users.svg'
import loans from '../../components/images/loans.svg'
import dashboard from '../../components/images/dashboard.svg'
import dm from '../../components/images/dm.svg'
import savings from '../../components/images/savings.svg'
import lr from '../../components/images/lr.svg'
import whitelist from '../../components/images/whitelist.svg'
import karma from '../../components/images/karma.svg'
import organization from '../../components/images/organization.svg'
import lp from '../../components/images/lp.svg'
import sa from '../../components/images/sa.svg'
import reports from '../../components/images/reports.svg'
import settlement from '../../components/images/settlement.svg'
import al from '../../components/images/al.svg'
import transaction from '../../components/images/transaction.svg'
import sp from '../../components/images/sp.svg'
import service from '../../components/images/service.svg'
import fc from '../../components/images/fc.svg'
import preference from '../../components/images/prefernce.svg'
import fp from '../../components/images/fp.svg'
import switchOrg from '../../components/images/switchOrg.svg'
import dropdown from '../../components/images/dropdown.svg'
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {
    const [showMenu, setShowMenu] = useState(false);
    
  return (

    <div className='sidebar-container'>
        <button 
         className='mobile-menu-icon'
         onClick={() =>{
           setShowMenu(!showMenu)
           console.log(showMenu)
         }}>
       <MenuIcon />
       </button>
        <div >

        </div>
       
        { showMenu ? 
        <div id = {showMenu ? "showSidebar": ""}> 
        
           <div className='sidebar-dashboard-home-title-container'>
      <img className='sidebar-dashboard-title-icon' src= {switchOrg}/>
      <p className='sidebar-title-dashboard-switch'> Switch Organization</p> 
      <div className="dropdown">
            <button className="dropbtn">
            <img className='sidebar-dashboard-dropdown-icon' src= {dropdown}/>
            </button>
            <div className="dropdown-content">
            <a href="#">Link 1</a>
            </div>
        </div> 
      </div>
      
      <div className='sidebar-dashboard-home-title-container'>
      <img className='sidebar-dashboard-title-icon' src= {dashboard}/>
        <p className='sidebar-title-dashboard'>Dashboard</p>
      </div>

      <div className='sidebar-dashboard-title-container'>
        <p className='sidebar-dashboard-header'>Customers</p>
        <div className='sidebar-dashboard-title'>
            <img className='sidebar-dashboard-title-icon' src= {users}/>
            <a className='sidebar-title-link' href='/dashboard'>Users</a>
        </div>

        <div className='sidebar-dashboard-title'>
            <img className='sidebar-dashboard-title-icon' src= {guarantors}/>
            <a className='sidebar-title-link' href='#'>Guarantors</a>
        </div>

        <div className='sidebar-dashboard-title'>
            <img className='sidebar-dashboard-title-icon' src= {loans}/>
            <a className='sidebar-title-link' href='#'>Loans</a>
        </div>

        <div className='sidebar-dashboard-title'>
            <img className='sidebar-dashboard-title-icon' src= {dm}/>
            <a className='sidebar-title-link' href='#'>Decision Models</a>
        </div>

        <div className='sidebar-dashboard-title'>
           <img className='sidebar-dashboard-title-icon' src= {savings}/>
            <a className='sidebar-title-link' href='#'>Savings</a>
        </div>

        <div className='sidebar-dashboard-title'>
            <img className='sidebar-dashboard-title-icon' src= {lr}/>
            <a className='sidebar-title-link' href='#'>Loan Requests</a>
        </div>

        <div className='sidebar-dashboard-title'>
            <img className='sidebar-dashboard-title-icon' src= {whitelist}/>
            <a className='sidebar-title-link' href='#'>Whitelist</a>
        </div>

        <div className='sidebar-dashboard-title'>
           <img className='sidebar-dashboard-title-icon' src= {karma}/>
            <a className='sidebar-title-link' href='#'>Karma</a>
        </div>  

          <div className='sidebar-dashboard-title-container'>
        <p className='sidebar-dashboard-header'>BUSINESSES</p>

        <div className='sidebar-dashboard-title'>
          <img className='sidebar-dashboard-title-icon' src= {organization}/>
            <a className='sidebar-title-link' href='#'>Organization</a>
        </div>  

        <div className='sidebar-dashboard-title'>
           <img className='sidebar-dashboard-title-icon' src= {lp}/>
            <a className='sidebar-title-link' href='#'>Loan Products</a>
        </div>

        <div className='sidebar-dashboard-title'>
         <img className='sidebar-dashboard-title-icon' src= {sp}/>
            <a className='sidebar-title-link' href='#'>Savings Products</a>
        </div>

        <div className='sidebar-dashboard-title'>
        <img className='sidebar-dashboard-title-icon' src= {fc}/>
            <a className='sidebar-title-link' href='#'>Fees and Charges</a>
        </div>

        <div className='sidebar-dashboard-title'>
        <img className='sidebar-dashboard-title-icon' src= {transaction}/>
            <a className='sidebar-title-link' href='#'>Transactions</a>
        </div>

        <div className='sidebar-dashboard-title'>
        <img className='sidebar-dashboard-title-icon' src= {service}/>
            <a className='sidebar-title-link' href='#'>Services</a>
        </div>

        <div className='sidebar-dashboard-title'>
        <img className='sidebar-dashboard-title-icon' src= {sa}/>
            <a className='sidebar-title-link' href='#'>Service Account</a>
        </div>

        <div className='sidebar-dashboard-title'>
        <img className='sidebar-dashboard-title-icon' src= {settlement}/>
            <a className='sidebar-title-link' href='#'>Settlements</a>
        </div>

        <div className='sidebar-dashboard-title'>
        <img className='sidebar-dashboard-title-icon' src= {reports}/>
            <a className='sidebar-title-link' href='#'>Reports</a>
        </div>      

      </div>

        <div className='sidebar-dashboard-title-container'>
        <p className='sidebar-dashboard-header'>SETTINGS</p>
        <div className='sidebar-dashboard-title'>
        <img className='sidebar-dashboard-title-icon' src= {preference}/>
            <a className='sidebar-title-link' href='#'>Preferences</a>
        </div>

        <div className='sidebar-dashboard-title'>
           <img className='sidebar-dashboard-title-icon' src= {fp}/>
            <a className='sidebar-title-link' href='#'>Fees and Pricing</a>
        </div>

        <div className='sidebar-dashboard-title'>
        <img className='sidebar-dashboard-title-icon' src= {al}/>
            <a className='sidebar-title-link' href='#'>Audit Logs</a>
        </div>     

      </div>    

      </div>
      </div>
        : 
         
        <div className='sidebar-content-container'> 
           <div className='sidebar-dashboard-home-title-container'>
      <img className='sidebar-dashboard-title-icon' src= {switchOrg}/>
      <p className='sidebar-title-dashboard-switch'> Switch Organization</p> 
      <div className="dropdown">
            <button className="dropbtn">
            <img className='sidebar-dashboard-dropdown-icon' src= {dropdown}/>
            </button>
            <div className="dropdown-content">
            <a href="#">Link 1</a>
            </div>
        </div> 
      </div>
      
      <div className='sidebar-dashboard-home-title-container'>
      <img className='sidebar-dashboard-title-icon' src= {dashboard}/>
        <p className='sidebar-title-dashboard'>Dashboard</p>
      </div>

      <div className='sidebar-dashboard-title-container'>
        <p className='sidebar-dashboard-header'>Customers</p>
        <div className='sidebar-dashboard-title'>
            <img className='sidebar-dashboard-title-icon' src= {users}/>
            <a className='sidebar-title-link' href='/dashboard'>Users</a>
        </div>

        <div className='sidebar-dashboard-title'>
            <img className='sidebar-dashboard-title-icon' src= {guarantors}/>
            <a className='sidebar-title-link' href='#'>Guarantors</a>
        </div>

        <div className='sidebar-dashboard-title'>
            <img className='sidebar-dashboard-title-icon' src= {loans}/>
            <a className='sidebar-title-link' href='#'>Loans</a>
        </div>

        <div className='sidebar-dashboard-title'>
            <img className='sidebar-dashboard-title-icon' src= {dm}/>
            <a className='sidebar-title-link' href='#'>Decision Models</a>
        </div>

        <div className='sidebar-dashboard-title'>
           <img className='sidebar-dashboard-title-icon' src= {savings}/>
            <a className='sidebar-title-link' href='#'>Savings</a>
        </div>

        <div className='sidebar-dashboard-title'>
            <img className='sidebar-dashboard-title-icon' src= {lr}/>
            <a className='sidebar-title-link' href='#'>Loan Requests</a>
        </div>

        <div className='sidebar-dashboard-title'>
            <img className='sidebar-dashboard-title-icon' src= {whitelist}/>
            <a className='sidebar-title-link' href='#'>Whitelist</a>
        </div>

        <div className='sidebar-dashboard-title'>
           <img className='sidebar-dashboard-title-icon' src= {karma}/>
            <a className='sidebar-title-link' href='#'>Karma</a>
        </div>  

          <div className='sidebar-dashboard-title-container'>
        <p className='sidebar-dashboard-header'>BUSINESSES</p>

        <div className='sidebar-dashboard-title'>
          <img className='sidebar-dashboard-title-icon' src= {organization}/>
            <a className='sidebar-title-link' href='#'>Organization</a>
        </div>  

        <div className='sidebar-dashboard-title'>
           <img className='sidebar-dashboard-title-icon' src= {lp}/>
            <a className='sidebar-title-link' href='#'>Loan Products</a>
        </div>

        <div className='sidebar-dashboard-title'>
         <img className='sidebar-dashboard-title-icon' src= {sp}/>
            <a className='sidebar-title-link' href='#'>Savings Products</a>
        </div>

        <div className='sidebar-dashboard-title'>
        <img className='sidebar-dashboard-title-icon' src= {fc}/>
            <a className='sidebar-title-link' href='#'>Fees and Charges</a>
        </div>

        <div className='sidebar-dashboard-title'>
        <img className='sidebar-dashboard-title-icon' src= {transaction}/>
            <a className='sidebar-title-link' href='#'>Transactions</a>
        </div>

        <div className='sidebar-dashboard-title'>
        <img className='sidebar-dashboard-title-icon' src= {service}/>
            <a className='sidebar-title-link' href='#'>Services</a>
        </div>

        <div className='sidebar-dashboard-title'>
        <img className='sidebar-dashboard-title-icon' src= {sa}/>
            <a className='sidebar-title-link' href='#'>Service Account</a>
        </div>

        <div className='sidebar-dashboard-title'>
        <img className='sidebar-dashboard-title-icon' src= {settlement}/>
            <a className='sidebar-title-link' href='#'>Settlements</a>
        </div>

        <div className='sidebar-dashboard-title'>
        <img className='sidebar-dashboard-title-icon' src= {reports}/>
            <a className='sidebar-title-link' href='#'>Reports</a>
        </div>      

      </div>

        <div className='sidebar-dashboard-title-container'>
        <p className='sidebar-dashboard-header'>SETTINGS</p>
        <div className='sidebar-dashboard-title'>
        <img className='sidebar-dashboard-title-icon' src= {preference}/>
            <a className='sidebar-title-link' href='#'>Preferences</a>
        </div>

        <div className='sidebar-dashboard-title'>
           <img className='sidebar-dashboard-title-icon' src= {fp}/>
            <a className='sidebar-title-link' href='#'>Fees and Pricing</a>
        </div>

        <div className='sidebar-dashboard-title'>
        <img className='sidebar-dashboard-title-icon' src= {al}/>
            <a className='sidebar-title-link' href='#'>Audit Logs</a>
        </div>     

      </div>    

      </div>
      </div>
        }
   
      
    </div>
  )
}

export default Sidebar
