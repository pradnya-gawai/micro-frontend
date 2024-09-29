import React, { useState, useEffect, useRef } from 'react';
import { json } from 'react-router';

const initialInfo = {
    city: "",
    state: "",
    country: ""
}

export default function UseRefDemo() {
    const cityRef = useRef(null)
    const stateRef = useRef(null)
    const countryRef = useRef(null)
    const [info, setInfo] = useState(initialInfo);
    const onChangeHandler = (event) => {
        setInfo({ ...info, [event.target.name]: event.target.value });
    }
    const getEmptyFields = (obj) => {
        return Object.keys(obj).filter((key) => obj[key].trim() === '');
    }

    const onSubmitHandler = (event) => {
        console.dir(stateRef)
        const emptyFields = getEmptyFields(info);
        emptyFields.forEach(element => {
            if (element == "city") {
                cityRef.current.focus()
                cityRef.current.placeholder = 'Enter City';
            }
            if (element == "state") {
                stateRef.current.focus()
                stateRef.current.placeholder = 'Enter state';
            }
            if (element == "country") {
                countryRef.current.focus()
                countryRef.current.placeholder = 'Enter country';
            }



        });
        console.log(emptyFields)
        event.preventDefault()
        localStorage.setItem("fromData", JSON.stringify(info))
    }

    useEffect(() => {
        console.log(info);
    }, [info]);

    return (
        <>
            <div className='d-flex justify-content-between'>
                <div>
                    <h2>This is the useRef page</h2>
                    <p>useRef is a React Hook that lets you reference a value that’s not needed for rendering.</p>
                    <h4>useRef Examples: Accessing DOM elements</h4>
                    <ul className='list-group'>
                        <li className='list-group-item'>Focus on specific input fields: <code>cityRef.current.focus();</code></li>
                        <li className='list-group-item'>Get input values: <code>const cityName = cityRef.current.value;</code></li>
                        <li className='list-group-item'>Set input values: <code>cityRef.current.value = 'New York';</code></li>
                        <li className='list-group-item'>Enable/Disable input fields: <code>cityRef.current.disabled = true;</code></li>
                        <li className='list-group-item'>Add event listeners: <code>cityRef.current.addEventListener("blur",eventListenFunction)</code></li>
                        <li className='list-group-item'>Scroll to specific elements: <code>cityRef.current.scrollIntoView();</code></li>
                        <li className='list-group-item'>Validate input fields: <code>if (cityRef.current.checkValidity())</code></li>
                        <li className='list-group-item'>Reset input fields: <code>cityRef.current.reset();</code></li>
                        <li className='list-group-item'>Get input field types: <code>const inputType = cityRef.current.type;</code></li>
                    </ul>

                </div>
                <div>
                    <form onSubmit={onSubmitHandler}>
                        <label htmlFor='city' className='form-label'>City </label>
                        <input
                            type="text"
                            className='form-control'
                            id="city"
                            name="city"
                            value={info.city}
                            onChange={onChangeHandler}
                            ref={cityRef}
                        />
                        <label htmlFor='state' className='form-label'>State </label>
                        <input
                            type="text"
                            className='form-control'
                            id="state"
                            name="state"
                            value={info.state}
                            onChange={onChangeHandler}
                            ref={stateRef}

                        />
                        <label htmlFor='country' className='form-label'>Country </label>
                        <input
                            type="text"
                            className='form-control'
                            id="country"
                            name="country"
                            value={info.country}
                            onChange={onChangeHandler}
                            ref={countryRef}

                        />
                        <button className='btn btn-dark mt-3 aligned-end' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}