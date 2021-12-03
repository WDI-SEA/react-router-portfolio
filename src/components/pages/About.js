import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <div class="section-light about-me" id="about-me">
                    <div class="container">
                        <div class="column is-12 about-me">
                            <h1 class="title has-text-centered section-title">About Me</h1>
                        </div>
                        <div class="columns is-multiline">
                            <div
                                class="column is-6 has-vertically-aligned-content"
                                data-aos="fade-right"
                            >
                                <p class="is-larger">
                                    <strong
                                    >Paulina Le</strong
                                    >
                                </p>
                                <br />
                                <p>
                                    I am a full stack software developer who strives to provide efficient and functional products. I am passionate about using technology to create a healthy space for users. My previous experience as a personal trainer has given me a creative outlook on how to approach different challenges and the patience to find effective solutions.
                                </p>
                                <br />
                                <div class="is-divider"></div>
                                <div class="columns about-links">
                                    <div class="column">
                                        <p class="heading">
                                            <strong>Give me a ring</strong>
                                        </p>
                                        <p class="subheading">
                                            (703) 577-6528
                                        </p>
                                    </div>
                                    <div class="column">
                                        <p class="heading">
                                            <strong>Email Me</strong>
                                        </p>
                                        <p class="subheading">
                                            paulinal3@outlook.com
                                        </p>
                                    </div>
                                    <div class="column">
                                        <p class="heading">
                                            <strong>View my GitHub</strong>
                                        </p>
                                        <p class="subheading">
                                            github.com/paulinal3
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-6 right-image " data-aos="fade-left">
                                <img
                                    class="is-rounded"
                                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--g1HuidbV--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4a6t7pmm323uaz9rv1rf.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="section-dark resume">
                    <div class="container">
                        <div
                            class="columns is-multiline"
                            data-aos="fade-in"
                            data-aos-easing="linear"
                        >
                            <div class="column is-12 about-me">
                                <h1 class="title has-text-centered section-title">
                                    View My Resume
                                </h1>
                            </div>
                            <div class="column is-10 has-text-centered is-offset-1">
                                <h2 class="subtitle">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et doloremagna aliqua
                                </h2>
                                <form action="example.docs">
                                    <button class="button">
                                        Download Resume&emsp;<i class="fad fa-download fa-lg"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="section-light skills" id="skills">
                    <div class="container">
                        <div class="columns is-multiline">
                            <div class="column is-12 about-me">
                                <h1 class="title has-text-centered section-title">Skills</h1>
                            </div>
                            <div
                                class="column is-6"
                                data-aos="fade-in"
                                data-aos-easing="linear"
                            >
                                <h1>React</h1>
                                <progress class="progress" value="25" max="100">30%</progress>
                                <h1>JavaScript</h1>
                                <progress class="progress" value="75" max="100">30%</progress>
                                <h1>HTML</h1>
                                <progress class="progress" value="85" max="100">45%</progress>
                                <h1>CSS</h1>
                                <progress class="progress" value="80" max="100">60%</progress>
                            </div>
                            <div
                                class="column is-6"
                                data-aos="fade-in"
                                data-aos-easing="linear"
                            >
                                <h1>Node.JS</h1>
                                <progress class="progress" value="65" max="100">30%</progress>
                                <h1>Express.JS</h1>
                                <progress class="progress" value="70" max="100">30%</progress>
                                <h1>PostgreSQL</h1>
                                <progress class="progress" value="50" max="100">45%</progress>
                                <h1>EJS</h1>
                                <progress class="progress" value="75" max="100">30%</progress>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
