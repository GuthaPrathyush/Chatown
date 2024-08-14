import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className="card-ba">
      <div className="card">
        <div className="card-body">
          <br />
          <h5 align="center" className="card-title">Create a new account</h5>
          <br />
          <form>
            <div className="input-group flex-nowrap mb-3">
              <span className="input-group-text" id="addon-wrapping">👤</span>
              <input type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="addon-wrapping" />
            </div>
            <div className="input-group flex-nowrap mb-3">
              <span className="input-group-text" id="addon-wrapping">📧</span>
              <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" />
            </div>
            <div className="input-group flex-nowrap mb-3">
              <span className="input-group-text" id="addon-wrapping">@</span>
              <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <div className="input-group flex-nowrap mb-3">
              <span className="input-group-text" id="addon-wrapping">🔒</span>
              <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" />
            </div>
            <div className="input-group flex-nowrap mb-3">
              <span className="input-group-text" id="addon-wrapping">🔒</span>
              <input type="password" className="form-control" placeholder="Confirm Password" aria-label="Confirm Password" aria-describedby="addon-wrapping" />
            </div>
            <center>
            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </center>
          
          </form>
          <div align="center">
            <Link to="/login">Already have an account? Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
