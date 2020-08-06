import React, { Component } from 'react';

export default Home => {
        return (
                <div class="view">
                        <div class="container">
                                <div class="row">
                                        <div class="col-md-6 text-md-left mt-xl-5 mb-5">
                                                <h1 class="font-weight-bold mt-sm-5">Welcome</h1>
                                                <hr class="bg-light" />
                                                <h6 class="mb-4">I'm baby cliche small batch actually bushwick keytar YOLO. Flexitarian shoreditch flannel, direct trade farm-to-table vegan fixie selfies succulents typewriter roof party skateboard hammock bicycle rights. Subway tile yuccie jean shorts lumbersexual shabby chic sriracha cold-pressed YOLO chicharrones umami four dollar toast tofu echo park hoodie cray. Typewriter everyday carry hexagon microdosing tacos crucifix migas four dollar toast.</h6>
                                        </div>
                                        <div class="col-md-6">
                                                <img src={process.env.PUBLIC_URL + '/qr.svg'} alt="" class="img-fluid" />
                                        </div>
                                </div>
                        </div>
                </div>
        );
}

