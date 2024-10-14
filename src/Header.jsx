import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand d-flex align-items-center" href="#">
            <img src="https://vesit.ves.ac.in/navlogo.PNG" alt="College Logo"/>
            Vivekanand Education Society's Institute Of Technology (VESIT)
        </a>
     
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="About">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="Courses">Courses</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="CourseItem">Contact</a>
                </li>
            </ul>
        </div>
    </nav>

  
    );
};

export default Header;
