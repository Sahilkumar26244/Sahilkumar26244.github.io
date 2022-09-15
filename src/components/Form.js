import "./FormStyles.css";

import React from 'react'

export const Form = () => {
  return (
    <div className="form" >
        <form>
            <label>Your Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="text" />
            <label>Subject</label>
            <input type="text" />
            <label>Message</label>
            <textarea rows="6" placeholder="Type Your Message Here" />
            <button className="btn" >Submit</button>
        </form>
    </div>
  )
}
