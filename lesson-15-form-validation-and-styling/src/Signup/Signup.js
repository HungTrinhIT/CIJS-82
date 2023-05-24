import React, { useState } from "react";

const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    fullname: "",
    password: "",
    username: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    fullname: "",
    password: "",
    username: "",
  });

  const onFormChange = (e) => {
    const { name, value } = e.target;

    // kiem tra value=> value là rỗng => setErrors
    // ....
    // ...
    setUser({
      ...user,
      [name]: value,
    });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    // Logic xu ly form => GOI API
    console.log({ user });
  };
  return (
    <form onSubmit={onFormSubmit}>
      <h3>Create a new account</h3>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          name="email"
          onChange={onFormChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          onChange={onFormChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="fullname" className="form-label">
          Fullname
        </label>
        <input
          type="text"
          className="form-control"
          id="fullname"
          name="fullname"
          onChange={onFormChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          onChange={onFormChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Signup;
