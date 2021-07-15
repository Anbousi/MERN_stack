import React , {useState} from 'react'

const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPW, setconfirmPW] = useState("");  
    
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


    
    return(
        <>
            <form onSubmit={ createUser }>
                <table>
                    <tr>
                        <td><label>First Name: </label></td>
                        <td><input type="text" onChange={ (e) => setFirstName(e.target.value) } value={firstName} /></td>
                    </tr>

                    <tr>
                        <td><label>Last Name: </label></td>
                        <td><input type="text" onChange={ (e) => setLastName(e.target.value) } value={lastName} /></td>
                    </tr>

                    <tr>
                        <td><label>Email Address: </label> </td>
                        <td><input type="text" onChange={ (e) => setEmail(e.target.value) } value={email}/></td>
                    </tr>

                    <tr>
                        <td><label>Password: </label></td>
                        <td><input type="password" onChange={ (e) => setPassword(e.target.value) } value={password} /></td>
                    </tr>

                    <tr>
                        <td><label>Confirm Password: </label></td>
                        <td> <input type="password" onChange={ (e) => setconfirmPW(e.target.value) } value={confirmPW} /></td>
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
