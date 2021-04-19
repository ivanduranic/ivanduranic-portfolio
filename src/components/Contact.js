import React, { useState } from "react";
import { db } from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Message has been submitted 👍");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex items-center h-screen w-full bg-teal-lighter">
      <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
        <h2 className="block w-full text-center text-grey-darkest mb-6">
          Toronto, ON | Phone: +1 (437) 774-6800 | Email: ivan.duranic@gmail.com
        </h2>

        <h1 className="block w-full text-center text-grey-darkest mb-6">
          <strong>Contact form</strong>📲
        </h1>
        <form
          className="mb-4 md:flex md:flex-wrap md:justify-between"
          onSubmit={handleSubmit}
        >
          <div className="field-group mb-4 md:w-1/2">
            <label className="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest">
              Name
            </label>
            <input
              className="border py-2 px-3 text-grey-darkest md:mr-2"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col mb-4 md:w-full">
            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">
              Email
            </label>
            <input
              className="border py-2 px-3 text-grey-darkest"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col mb-6 md:w-full">
            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">
              Message
            </label>
            <textarea
              className="border py-2 px-3 text-grey-darkest"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            className="block bg-teal hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded"
            type="submit"
            style={{ background: loader ? "#ccc" : "rgb(2, 2, 110)" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
