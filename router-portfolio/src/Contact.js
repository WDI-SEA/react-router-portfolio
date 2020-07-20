import React from "react";

const Contact = () => {
  return (
    <div className="container center-align">
      <h1>Contact Me!</h1>
      <div className="row">
        <form>
          <div className="row">
            <div className="col m6">
              <input placeholder="First Name"></input>
            </div>
            <div className="col m6">
              <input placeholder="Last Name"></input>
            </div>
          </div>

          <div className="row">
            <div className="col m12">
              <input placeholder="Email"></input>
            </div>
          </div>

          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="textarea1"
                    className="materialize-textarea"
                  ></textarea>
                  <label for="textarea1">Send me a message!</label>
                </div>
              </div>

              <div className="row right-align">
                <input
                  type="submit"
                  className="btn green"
                  value="Send Message"
                ></input>
              </div>
            </form>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
