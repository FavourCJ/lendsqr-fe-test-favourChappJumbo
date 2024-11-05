import './signIn.scss'
import loginImage from '../../components/images/pablo-sign-in 1.svg'
import logo from "../../components/images/Group.svg"
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'

const SignIn = () => {

    const history = useHistory()
    const [disable, setDisable] = useState(false)
    const [correctData, setCorrectData] = useState (false);
    const [show, setShow] = useState(false)
    const [values, setValues] = useState ({
        email: "",
        password: "",
      });
    
      type formValue = {
        email: string,
        password: string
      }

      type Errors = Partial<Record<keyof formValue, string>>

      //validating users input
        const validateLogin = (values:formValue): Errors =>{
            let newErr: Errors = {};
        
        if (!values.email){
            newErr.email = "Email is required"
        }else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
            newErr.email = "Email is invalid"
        }
        
        if (!values.password){
            newErr.password = "Pasword is required"
            }
            return newErr;
        }

        const [error, setError] = useState<Errors>({});
  
    
      useEffect (() => {
        if (Object.keys(error).length === 0 && correctData)
        {     
          setDisable(true)
          history.push('/user-list')
         
        }
    
      }, [error]);
    
      //submit form
      const handleSubmit =(e: any)=>{
        e.preventDefault();
        setError( validateLogin(values)
        )
        setCorrectData (true);
      }


  
  return (
    <div className='sign-in-container'>
        <div className='sign-in-logo-div'>
            <img src={logo} className='sign-in-logo-img'/>
        </div>
        <div className='sign-in-content-section'>
            <div className='sign-in-img'>
                <img src={loginImage} className='sign-in-img'/>
            </div>

            <div className='sign-in-form-container'>
                <div className='sign-in-txt-container'>
                <p className='sign-in-welcome'>Welcome!</p>
                <p className='sign-in-sub-txt'>Enter details to login.</p>
                </div>
              
                <form className='sign-in-form'>
                    <input
                    className='sign-in-form-input'
                    placeholder='Email'
                    type='text'
                    onChange={(e)=>{
                        setValues ({...values, email: e.target.value})
            
                      }}/>
                      {error.email && <p className='login-error'> {error.email}</p>}
                      <div className='login-show-container'>
                        {show ? 

                        <>
                        
                        <input
                          className='sign-in-form-input'
                          placeholder='Password'
                          type='text'
                          onChange={(e)=>{
                              setValues ({...values, password: e.target.value})
                          }}/>
                           <button 
                      className='sign-in-show-passwd'
                       onClick={(e)=>{
                        e.preventDefault();
                         setShow(!show)}}>HIDE</button> 
                        </>
                          
                        : 
                        <>
                         <input
                          className='sign-in-form-input'
                          placeholder='Password'
                          type='password'
                          onChange={(e)=>{
                              setValues ({...values, password: e.target.value})
                          }}/>
                        <button 
                      className='sign-in-show-passwd'
                       onClick={(e)=>{
                        e.preventDefault();
                         setShow(!show)}}>SHOW</button> 
                     
                        </>
                         
                        }
                     
                      </div>
                      {error.password && <p className='login-error'> {error.password}</p>}

                   
                    <a className='sign-in-forgot-passwd' href='#'>FORGOT PASSWORD?</a>
                    <div>
                    <button className='sign-in-login-btn' onClick={(e)=>{handleSubmit(e)}}>LOG IN</button>                
                    </div>
                   
                </form>
            </div>

        </div>
      
    </div>
  )
}

export default SignIn
