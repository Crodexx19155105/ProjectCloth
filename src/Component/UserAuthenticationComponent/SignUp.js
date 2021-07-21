import React, { useState } from 'react'
import Button from '../buttonComponenet/button';
import FormComp from '../Form/FormComp';

function SignIn() {
    const [UserDetails, setUserDetails] = useState({
        DisplayName:'',
        Email:'',
        Password:'',
        ConfirmPassword:'',
    })


    const handleSubmit=(e)=>{
        e.preventDefault();
        const {Password,ConfirmPassword}=UserDetails;
        if(Password!=ConfirmPassword)
        alert('BHosdiek Sahi passworddaalo');
        setUserDetails({
            DisplayName:'',
            Email:'',
            Password:'',
            ConfirmPassword:'',
        })
    }
    const handleClick=(e)=>{
        const {name,value}=e.target;
        console.log(name);
        console.log(value);
        setUserDetails({ ...UserDetails,[name]:value,});
        console.log(UserDetails);


    }
    return (
        <div className="SignIn">
            <h2>I do not have an account</h2>
            <span>Sign Up here</span>
            <form onSubmit={handleSubmit}>
                <FormComp name="DisplayName" type="name" value={UserDetails.DisplayName} required handleChange={handleClick} label="Display Name"/>
                <FormComp name="Email" type="email" value={UserDetails.Email} required handleChange={handleClick} label="Email"/>
                <FormComp name="Password" type="password" value={UserDetails.Password} required handleChange={handleClick} label="Password"/>
                <FormComp name="ConfirmPassword" type= "password" value={UserDetails.ConfirmPassword} required handleChange={handleClick} label="Confirm Password"/>
                <Button>SIGN-UP</Button>

            </form>
            
        </div>
    )
}

export default SignIn;
