import { createContext, ReactNode, useState } from "react";

export type UserType = {
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    Guarantor_f_name: string;
    Guarantor_l_Name: string;
    phone_number: string;
    emp_status: string;
    salary: string;
    Gurantor_email: string;
    residence_type: string;
    marital_tatus: string;
    children: number;
    education_level: string;
    Guarator_relationship: string;
    emp_sector: string;
    social_media: string;
    loan_repayment: string;
    emp_duration: string;
    date_joined: string;
    userStatus: string;
    organization: string;
    username: string;
    Guarantor_phoneNum: string;
}

export interface UserContextInterface {
    user: UserType[] | any,
    fetchUserData: ()=> void,
    lendsqrLocalStorage: (val: any) => void
}

const defaultState = {
    user: {
        first_name: '',
        last_name: "",
        email: "",
        gender: "",
        Guarantor_f_name: "",
        Guarantor_l_Name: "",
        phone_number: "",
        emp_status: "",
        salary: "",
        Gurantor_email: "",
        residence_type: "",
        marital_tatus: "",
        children: 0,
        education_level: "",
        Guarator_relationship: "",
        emp_sector: "",
        social_media: "",
        loan_repayment: "",
        emp_duration: "",
        date_joined: "",
        userStatus: "",
        organization: "",
        username: "",
        Guarantor_phoneNum: ""
    },  
       
    } as UserContextInterface

  export const UserContext = createContext(defaultState)

    type UserProviderProps ={
        children: ReactNode
    }

  export default function UserProvider ({children}: UserProviderProps){

    const [user, setUser] = useState<UserType[]>([]);

    //fetching data from api using async await
    const fetchUserData = async() =>{
      const res = await fetch("https://run.mocky.io/v3/7657048c-a9e8-433b-962c-a84e6bb90f84");
      const posts : UserType[] = await res.json();
      setUser(posts)
  
    }

    //retrieving user details on the user details page and storing it in the local storage
    const lendsqrLocalStorage = (val: any)=>{
        localStorage.setItem("Key", "LendsqrLocal");
        var localDB = JSON.parse(localStorage.getItem("LendsqrLocal") || "[]");
        // save to localStorage
        localStorage.setItem("LendsqrLocal", JSON.stringify(localDB));
        const setSpecificData = {
            id: val.id,
            first_name: val.first_name,
            last_name: val.last_name,
            email: val.email,
            gender: val.gender,
            Guarantor_f_name: val.Guarantor_f_name,
            Guarantor_l_Name: val.Guarantor_l_Name,
            phone_number: val.phone_number,
            emp_status: val.emp_status,
            salary: val.salary,
            Gurantor_email: val.Guarantor_email,
            residence_type: val.residence_type,
            marital_status: val.marital_status,
            children: val.children,
            education_level: val.education_level,
            Guarator_relationship: val.Guarantor_relationship,
            emp_sector: val.emp_sector,
            social_media: val.social_media,
            loan_repayment: val.loan_repayment,
            emp_duration: val.emp_duration,
            date_joined: val.date_joined,
            userStatus: val.userStatus,
            organization: val.organization,
            username: val.username,
            Guarantor_phoneNum: val.Guarantor_phoneNum
          }
      
          localStorage.setItem("LendsqrLocal", JSON.stringify(setSpecificData));     

    }

    const updateUserStatus = ()=>{
      
    }

 
      const allExports = {user, fetchUserData, lendsqrLocalStorage}
    return(
    <UserContext.Provider value = {allExports}>
    {children}
    </UserContext.Provider>
)
}


   