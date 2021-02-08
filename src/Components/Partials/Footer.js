import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return(
            <footer>
                <address>
                    <h5>Arthur D'Amato</h5>
                    <h6>Seattle, Washington</h6>
                    <h6>Email: <a href="mailto:mr.arthurdamato@gmail.com">mr.arthurdamato@gmail.com</a></h6>
                </address>
                    <a href="https://github.com/damatoaj" className="socialMedia"><img src="./GitHub-Logo.png" /></a>
                    <a href="https://www.instagram.com/thundrousprophet/?hl=en"  className="socialMedia"><img  src="./images/instagram_icon.svg" /></a>
                    <a href="https://www.linkedin.com/in/arthur-d-amato-45b6b169/" className="socialMedia"><img  src="./images/linked_in_logo.svg" /></a>
                    <a href="https://arthurdamato.wordpress.com/" className="socialMedia"><img src="./images/wordpress_logo.svg" /></a>
            </footer>
        )
    }
}

export default Footer;