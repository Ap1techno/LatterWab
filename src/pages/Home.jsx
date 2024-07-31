
import React, { useState } from "react";
import "./home.css";

const Home = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [linkText, setLinkText] = useState("");

  const urlLocation = window.location.origin;

  function nameHandler(e) {
    setName(e.target.value);
  }

  function messageHandler(e) {
    setMessage(e.target.value);
  }

  function generateLink() {
    const link = `${urlLocation}/letter?name=${encodeURIComponent(
      btoa(name)
    )}&message=${encodeURIComponent(btoa(message))}`;
    setLinkText(link);
  }

  function copyLinkHandler() {
    navigator.clipboard.writeText(linkText);
  }

  return (
    <div className="box">
      <h1 className="header">Create Your Personalized Letter</h1>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          onChange={nameHandler}
          value={name}
          type="text"
          id="name"
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          maxLength={226}
          value={message}
          onChange={messageHandler}
          id="message"
          className="textarea-field"
        ></textarea>
      </div>
      <button className="generate-button" onClick={generateLink}>
        Generate Link
      </button>
      <br />
      <div className={`copyBtn ${linkText === "" && "hidden"}`}>
        <span>{linkText}</span>
        <button onClick={copyLinkHandler}>Copy</button>
      </div>
    </div>
  );
};

export default Home;
