import {useState, useRef, useEffect} from 'react'

const Name = (props) => {
    return (
        <div>
            <form>
                <p>
                    <label for='name'>Name:</label>
                    <input type='text' id='name' name='name'/>
                </p>
                <p class='button'>
                    <button type='submit'>Add Name</button>
                </p>

            </form>
        </div>
    )
}

export default Name;
