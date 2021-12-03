import React, { Component } from 'react'

export default class Resume extends Component {
    render() {
        return (
            <div className="iframe-flex">
                <iframe title="CV" className="resumepage" src="https://docs.google.com/document/d/e/2PACX-1vTxD5SXWOLCDBm6tNMwCvsq9Z75HJbvBeT-fvchIhE4JDY_-JOBH0GTS2CjGXmJCFuDm2huC6rZFy5M/pub?embedded=true"></iframe>
                <a href="https://docs.google.com/document/d/1Ukx6GgmXld2YqSqD6yKCMJAlPJz8nWSdKQlAApKk4_U/edit?usp=sharing" className="button is-info buttonmargin">Download CV</a>
            </div>
        )
    }
}
