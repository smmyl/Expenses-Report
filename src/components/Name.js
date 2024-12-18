import React, {useState} from 'react';
import axios from 'axios';

function NameForm() {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/names/', {
                name: name,
            });
            console.log('Name created', response.data);
        } catch (error) {
            console.error('Error creating item:', error);
        }
    };

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <p>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' value={name} onChange={handleChange}/>
                </p>
                <p class='button'>
                    <button type='submit'>Add Name</button>
                </p>
            </form>
        </div>
    )
}

export default NameForm;
