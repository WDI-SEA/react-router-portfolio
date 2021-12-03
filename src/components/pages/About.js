import React, { Component } from 'react'
import resume from '../../pdfs/Bopp_Resume_Draft.pdf'

// import material ui
import Button from '@mui/material/Button';
import Stack from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


export default class About extends Component {
    render() {
        return (
            <div>
                <h1>About Devin</h1>
                <div>
                    <ButtonGroup>
                        <Button href={resume} target="_blank">
                            View Resume
                        </Button>
                        <Button href={resume} download>
                            Download Resume
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        )
    }
}
