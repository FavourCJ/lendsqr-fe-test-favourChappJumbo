import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './userDetails.scss'
import back from '../../components/images/back.svg'
import userDetailsSvg from '../../components/images/userDetails.svg'
import fullS from '../../components/images/fullS.svg'
import emptyS from '../../components/images/emptyS.svg'
import { useHistory } from 'react-router-dom'

const UserDetails = () => {
    const [userStaus, setUserStatus] = useState(false)
    const [notUpdated, setNotUpdated] = useState("")
    const history = useHistory()
    var userDetails = JSON.parse(localStorage.getItem("LendsqrLocal") || "[]")
    
    //updating user's status in the local storage
    const changeStatus = (e: any)=>{
        const setSpecificData ={
            id: userDetails.id,
            first_name: userDetails.first_name,
            last_name: userDetails.last_name,
            email: userDetails.email,
            gender: userDetails.gender,
            Guarantor_f_name: userDetails.Guarantor_f_name,
            Guarantor_l_Name: userDetails.Guarantor_l_Name,
            phone_number: userDetails.phone_number,
            emp_status: userDetails.emp_status,
            salary: userDetails.salary,
            Gurantor_email: userDetails.Gurantor_email,
            residence_type: userDetails.residence_type,
            marital_status: userDetails.marital_status,
            children: userDetails.children,
            education_level: userDetails.education_level,
            Guarator_relationship: userDetails.Guarator_relationship,
            emp_sector: userDetails.emp_sector,
            social_media: userDetails.social_media,
            loan_repayment: userDetails.loan_repayment,
            emp_duration: userDetails.emp_duration,
            date_joined: userDetails.date_joined,
            userStatus: e.target.value,
            organization: userDetails.organization,
            username: userDetails.username,
            Guarantor_phoneNum: userDetails.Guarantor_phoneNum
        }
        
        if(e.target.value == "blacklist"){
           if(userDetails.userStatus != "blacklist"){
            localStorage.setItem("LendsqrLocal", JSON.stringify(setSpecificData)); 
            setUserStatus(true)
            //reload page after 2 seconds
            setTimeout(() => {
                window.location.reload();
            }, (2000));
           
           
           }else{
            setNotUpdated("User has already been blacklisted")
            //reload page after 2 seconds
            setTimeout(() => {
                window.location.reload();
            }, (2000));
           
           
            
           }
        }else if (e.target.value == "activate"){
            if(userDetails.userStatus != "activate"){
                localStorage.setItem("LendsqrLocal", JSON.stringify(setSpecificData));  
                setUserStatus(true)
                //reload page after 2 seconds
                setTimeout(() => {
                    window.location.reload();
                }, (2000));
               }else{
                setNotUpdated("User has already been activated")
                //reload page after 2 seconds
                setTimeout(() => {
                    window.location.reload();
                }, (2000));
               }
        }
    }
     
  return (
    <div className='user-details-container'>
        <div className='user-details-section'>
        <Sidebar/>
        <div className='user-details-content'>

            <div className='user-details-head'>
                <a className='back-link' 
                onClick={()=>{history.push("/user-list")}}>
                <img src = {back} className='back-link-img'/>Back to users</a>
                
                <div className='user-details-head-content'>
                    <p className='user-details-head-txt'>User Details</p>

                    <div className='user-details-head-button-section'>
                        <button className='user-details-head-btn-blacklist' 
                            value= "blacklist"
                            onClick={e=>{changeStatus(e)}}>BLACKLIST USER</button>
                        <button className='user-details-head-btn-activate' 
                                value = "activate"
                                onClick={e=>{changeStatus(e)}}>ACTIVATE USER</button>
                    </div>
                </div>
                {userStaus ? <p className='user-staus-update'>User status has been updated successfully!!!</p>: ""}
                {notUpdated ? <p className='not-updated'>{notUpdated}</p>: ""}

            </div>

            <div className='user-details-header-container'>
                <div className='user-details-header-top'>
                    <div className='user-details-header-pic-name-container'>
                        <div className='user-details-header-pic-container'>
                            <img src={userDetailsSvg} className='user-details-header-img'/>
                        </div>
                        <div className='user-details-header-name-container'>
                            <p className='user-details-header-name'>{userDetails.first_name} {userDetails.last_name}</p>
                            <p className='user-details-header-ref'>LSQFf587g90</p>
                        </div>
                    </div>

                    <div className='user-details-header-tier-container'>
                        <p className='user-details-header-tier-txt'> User’s Tier</p>
                        <p><img src={fullS}/> <img src={emptyS}/> <img src={emptyS}/></p>
                    </div>

                    <div className='user-details-header-money-container'>
                        <p className='user-details-header-money'>₦200,000.00</p>
                        <p className='user-details-header-money-bank'>9912345678/Providus Bank</p>
                    </div>
                </div>

                <div className='user-details-bottom-container'>
                    <p className='user-details-bottom-txt-gen'>General Details</p>
                    <p className='user-details-bottom-txt'>Documents</p>
                    <p className='user-details-bottom-txt'>Bank Detials</p>
                    <p className='user-details-bottom-txt'>Loans</p>
                    <p className='user-details-bottom-txt'>Savings</p>
                    <p className='user-details-bottom-txt'>App and System</p>
                </div>

            </div>

            <div className='user-details-info-container'>
                <div className='user-details-personal-info-container'>
                    <p className='user-details-personal-info-title'>Personal Information</p>

                    <div className='user-details-personal-info-top'>
                        <div className='user-details-personaol-info-top-section'>
                            <p className='user-details-personal-info-header'>FULL NAME</p>
                            <p className='user-details-personal-info-txt'>{userDetails.first_name} {userDetails.last_name}</p>
                        </div>

                        <div className='user-details-personaol-info-top-section'>
                            <p className='user-details-personal-info-header'>PHONE NUMBER</p>
                            <p className='user-details-personal-info-txt'>{userDetails.phone_number.slice(1)}</p>
                        </div>

                        <div className='user-details-personaol-info-top-section'>
                            <p className='user-details-personal-info-header'>EMAIL ADDRESS</p>
                            <p className='user-details-personal-info-txt'>{userDetails.email}</p>
                        </div>

                        <div className='user-details-personaol-info-top-section'>
                            <p className='user-details-personal-info-header'>BVN</p>
                            <p className='user-details-personal-info-txt'>{userDetails.phone_number.slice(5)}</p>
                        </div>

                        <div className='user-details-personaol-info-top-section'>
                            <p className='user-details-personal-info-header'>GENDER</p>
                            <p className='user-details-personal-info-txt'>{userDetails.gender}</p>
                        </div>
                    </div>

                        
                    <div className='user-details-personal-info-down'>
                        <div className='user-details-personaol-info-down-section'>
                            <p className='user-details-personal-info-header'>MARITAL STATUS</p>
                            <p className='user-details-personal-info-txt'>{userDetails.marital_status}</p>
                        </div>

                        <div className='user-details-personaol-info-down-section'>
                            <p className='user-details-personal-info-header'>CHILDREN</p>
                            <p className='user-details-personal-info-txt'>{userDetails.children}</p>
                        </div>

                        <div className='user-details-personaol-info-down-section'>
                            <p className='user-details-personal-info-header'> TYPE OF RESIDENCE</p>
                            <p className='user-details-personal-info-txt'>{userDetails.residence_type}</p>
                        </div>

                     
                    </div>

                </div>


                <div className='user-details-personal-info-container'>
                    <p className='user-details-personal-info-title'>Education and Employment</p>

                    <div className='user-details-personal-info-top'>

                        <div className='user-details-personaol-info-top-section'>
                            <p className='user-details-personal-info-header'>LEVEL OF EDUCATION</p>
                            <p className='user-details-personal-info-txt'>{userDetails.education_level}</p>
                        </div>

                        <div className='user-details-personaol-info-top-section'>
                            <p className='user-details-personal-info-header'>EMPLOYMENT STATUS</p>
                            <p className='user-details-personal-info-txt'>{userDetails.emp_status}</p>
                        </div>

                        <div className='user-details-personaol-info-top-section'>
                            <p className='user-details-personal-info-header'>SECTOR OF EMPLOYMENT</p>
                            <p className='user-details-personal-info-txt'>{userDetails.emp_sector}</p>
                        </div>

                        <div className='user-details-personaol-info-top-section'>
                            <p className='user-details-personal-info-header'>DURATION OF EMPLOYMENT</p>
                            <p className='user-details-personal-info-txt'>{userDetails.emp_duration}</p>
                        </div>
                    </div>

                        
                    <div className='user-details-personal-info-down'>
                        <div className='user-details-personaol-info-down-section'>
                            <p className='user-details-personal-info-header'>OFFICE EMAIL</p>
                            <p className='user-details-personal-info-txt'>{userDetails.email}</p>
                        </div>

                        <div className='user-details-personaol-info-down-section'>
                            <p className='user-details-personal-info-header'>MONTHLY INCOME</p>
                            <p className='user-details-personal-info-txt'>{userDetails.salary}</p>
                        </div>

                        <div className='user-details-personaol-info-down-section'>
                            <p className='user-details-personal-info-header'> LOAN REPAYMENT</p>
                            <p className='user-details-personal-info-txt'>{userDetails.loan_repayment}</p>
                        </div>

                     
                    </div>

                </div>          

                <div className='user-details-personal-info-container'>
                    <p className='user-details-personal-info-title'>Socials</p>

                    <div className='user-details-personal-info-top-socials'>
                        <div className='user-details-personaol-info-top-section-socials'>
                            <p className='user-details-personal-info-header'>{userDetails.social_media}</p>
                            <p className='user-details-personal-info-txt'>{userDetails.username}</p>
                        </div>

                    </div>

                </div>

                <div className='user-details-personal-info-container'>
                    <p className='user-details-personal-info-title'>GUARANTOR</p>

                    <div className='user-details-personal-info-top-socials'>
                        <div className='user-details-personaol-info-top-section-socials'>
                            <p className='user-details-personal-info-header'>FULL NAME</p>
                            <p className='user-details-personal-info-txt'>{userDetails.Guarantor_f_name}</p>
                        </div>

                        <div className='user-details-personaol-info-top-section-socials'>
                            <p className='user-details-personal-info-header'>PHONE NUMBER</p>
                            <p className='user-details-personal-info-txt'>{userDetails.Guarantor_phoneNum.slice(1)}</p>
                        </div>

                        <div className='user-details-personaol-info-top-section-socials'>
                            <p className='user-details-personal-info-header'>EMAIL ADDRESS</p>
                            <p className='user-details-personal-info-txt'>{userDetails.Gurantor_email}</p>
                        </div>

                        <div className='user-details-personaol-info-top-section-socials'>
                            <p className='user-details-personal-info-header'>RELATIONSHIP</p>
                            <p className='user-details-personal-info-txt'>{userDetails.Guarator_relationship}</p>
                        </div>

                    </div>

                </div>

                
                <div className='user-details-personal-info-container'>
                    
                    <div className='user-details-personal-info-top-socials'>
                        <div className='user-details-personaol-info-top-section-socials'>
                            <p className='user-details-personal-info-header'>FULL NAME</p>
                            <p className='user-details-personal-info-txt'>{userDetails.Guarantor_f_name}</p>
                        </div>

                        <div className='user-details-personaol-info-top-section-socials'>
                            <p className='user-details-personal-info-header'>PHONE NUMBER</p>
                            <p className='user-details-personal-info-txt'>{userDetails.phone_number.slice(1)}</p>
                        </div>

                        <div className='user-details-personaol-info-top-section-socials'>
                            <p className='user-details-personal-info-header'>EMAIL ADDRESS</p>
                            <p className='user-details-personal-info-txt'>{userDetails.Gurantor_email}</p>
                        </div>

                        <div className='user-details-personaol-info-top-section-socials'>
                            <p className='user-details-personal-info-header'>RELATIONSHIP</p>
                            <p className='user-details-personal-info-txt'>{userDetails.Guarator_relationship}</p>
                        </div>

                    </div>

                </div>


            </div>

        </div>
        </div>
        
      
    </div>
  )
}

export default UserDetails
