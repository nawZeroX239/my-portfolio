import React from "react"

import "./Contacts.css"

export default function Contacts() {
  return (
    <div className="contacts" id="contact">
      <h1 className="section-title">Contact</h1>

      <div className="form-container-centered">
        <form className="form-container">
          <label className="input-label">
            Name <span className="star-required">*</span>:
          </label>
          <input type="text" name="name" className="input-text"/>

          <label className="input-label">
            Email<span className="star-required">*</span>:
          </label>
          <input type="text" name="email"  className="input-text"/>

          <label className="input-label">
            Message<span className="star-required">*</span>:
          </label>
          <textarea className="input-text-area"/>

          <input type="submit" value="submit" className="form-submit-button"/>
        </form>
      </div>

    </div>
  )
}