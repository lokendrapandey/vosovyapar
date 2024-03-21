import React, { useState, useEffect } from 'react';

const Card = () => {

    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');

    useEffect(() => {
        // Retrieve user data from local storage
        const userDataString = localStorage.getItem('user');

        if (userDataString) {
            // Parse the JSON string to an object
            const userData = JSON.parse(userDataString);
            
            // Extract email and mobile number from the parsed object
            const { email, mobile } = userData;

            // Update component state with retrieved values
            setEmail(email);
            setMobile(mobile);
        }
    }, []);

    return (
        <div className='text-center'>
            <p>{email}</p>
            <p>{mobile}</p>
            {/* <p>Email: {email}</p>
            <p>Mobile: {mobile}</p> */}
        </div>
    );
};

export default Card;

