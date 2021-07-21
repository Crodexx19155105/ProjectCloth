import React, { useState } from 'react'
import Button from '../buttonComponenet/button';
import FormComp from '../Form/FormComp';

function SignIn() {
    const [UserDetails, setUserDetails] = useState({
        Email:'',
        Password:'',
    })


    const handleSubmit=(e)=>{
        e.preventDefault();
        setUserDetails({
            Email:'',
        Password:'',
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
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormComp name="Email" type="email" value={UserDetails.Email} required handleChange={handleClick} label="Email"/>
                <FormComp name="Password" type="password" value={UserDetails.Password} required handleChange={handleClick} label="Password"/>
                <Button>SIGN-IN</Button>
                <Button style={{backgroundColor:"rgba(66,133,244,1)",}}>SIGN-IN WITH GOOGLE</Button>


            </form>
            
        </div>
    )
}

export default SignIn;
