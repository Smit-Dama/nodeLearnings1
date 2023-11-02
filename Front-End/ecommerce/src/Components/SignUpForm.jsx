
import React from 'react';

export default function SignUpForm() {


    return (
        <section className='sign_up_form'>
            <div className='sign_up'>
                <label>Username:</label>
                <input type='text' className='textbox' placeholder=' Enter Username' />
                <label>Email:</label>
                <input type='email' className='textbox' placeholder=' Enter Email Address' />
                <label>Password:</label>
                <input type='password' className='textbox' placeholder=' Enter Password' />
                <label>Address:</label>
                <input type='text' className='textbox' placeholder=' Enter Address' />
                <label>New user?</label>
                <select>
                    <option>True</option>
                    <option>False</option>
                </select>
                <label>Role</label>
                <input type='text' className='textbox' placeholder=' Enter Role' />
                <label>Number</label>
                <input type='number' className='textbox' placeholder=' Enter Number' />
                <label>Rating</label>
                <input type='number' className='textbox' placeholder=' Enter Rating ' />
                <button className='submit-btn'>Sign Up</button>
            </div>
        </section>
    )
}
