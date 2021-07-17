import React , {useState} from 'react'

const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [errorFN , seterrorFN] = useState("");
    const [lastName, setLastName] = useState("");
    const [errorLN , seterrorLN] = useState("");
    const [email, setEmail] = useState("");
    const [errorEmail , seterrorEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [errorPW , seterrorPW] = useState("");
    const [confirmPW, setconfirmPW] = useState("");
    const [errorPWC , seterrorPWC] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password , confirmPW };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setconfirmPW("");
    };

    const validationFN = (e) =>{
        setFirstName(e.target.value);
        if(e.target.value.length === 0){
            seterrorFN("Enter first name");
        }
        else if (e.target.value.length <= 2){
            seterrorFN("Fisrt Name should be more than 2 chars");
        }
        else{
            seterrorFN("");
        }
    }

    const validationLN = (e) =>{
        setLastName(e.target.value);
        if(e.target.value.length === 0){
            seterrorLN("Enter last name");
        }
        else if (e.target.value.length <= 2){
            seterrorLN("Last Name should be more than 2 chars");
        }
        else{
            seterrorLN("");
        }
    }

    const validationPW = (e) =>{
        setPassword(e.target.value);

    if (e.target.value.length < 8){
        seterrorPW("Password should be 8 chars at least");
        }
    else{
        seterrorPW("");
    }
    }

    
    const validationPWC = (e) =>{
        setconfirmPW(e.target.value);

    if (e.target.value === {password}){
        seterrorPWC("");
        }
    else{
        seterrorPWC("Password should match");
    }
    }

    
    return(
        <>
            <form onSubmit={ createUser }>
                <table>
                    <tr>
                        <td><label>First Name: </label></td>
                        <td>
                            <input type="text" onChange={ validationFN } value={firstName} />
                        </td>
                        <td>{errorFN}</td>
                    </tr>

                    <tr>
                        <td><label>Last Name: </label></td>
                        <td><input type="text" onChange={ validationLN } value={lastName} /></td>
                        <td>{errorLN}</td>
                    </tr>

                    <tr>
                        <td><label>Email Address: </label> </td>
                        <td><input type="email" onChange={ (e) => setEmail(e.target.value) } value={email}/></td>
                    </tr>

                    <tr>
                        <td><label>Password: </label></td>
                        <td><input type="password" onChange={ validationPW } value={password} /></td>
                        <td>{errorPW}</td>
                    </tr>

                    <tr>
                        <td><label>Confirm Password: </label></td>
                        <td> <input type="password" onChange={ validationPWC } value={confirmPW} /></td>
                        <td>{errorPWC}</td>
                    </tr>
                </table>
                <input type="submit" value="Create User" />
            </form>
            <p>Your Form Data</p>
            
            <table>
                <tr>
                    <td>First Name</td>
                    <td>{firstName}</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>{lastName}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td>Password</td>
                    {
                        password ? 
                        <td>Password</td> :
                        <td></td> 
                    }
                </tr>
                <tr>
                    <td>Confirm Password</td>
                    {
                        confirmPW ? 
                        <td>Password</td> :
                        <td></td> 
                    }
                </tr>
            </table>
            
        </>
    );
}

export default HookForm
