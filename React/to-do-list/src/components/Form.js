import React , {useState} from 'react'

const Form = (props) => {
    const {input , setInput} = props;
    const [value , setValue] = useState({'value':'','state':''});
    const [formInput,setFormInput] = useState('');
    const ToDo = (e) =>{
        e.preventDefault();
        // setInput([...input,value]);
        setInput(value);
        // console.log(input)
        setFormInput('');
    }

    const onChange =(e) =>{
        setValue({'value':e.target.value,
                    'state': false})
        setFormInput(e.target.value)
    }
    return (
        <div>
            <form onSubmit={ ToDo }>
                <div>
                    <label>Username: </label> 
                    <input type="text" value={formInput} onChange={onChange} />
                </div>
                <input type="submit" value="Add" />
            </form>
            
        </div>
    )
}

export default Form
