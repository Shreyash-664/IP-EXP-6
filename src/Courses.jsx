import React, { useState } from 'react';
import CourseItem from './CourseItem';

const Courses = () => {
   
    return (
        <div class="row">
       
            <section id="courses" class="col-lg-12">
                <h2>Our Courses</h2>
                <div class="row">
                    <div class="col-md-4 feature-box">
                        <h3>Bachelor in Engineering</h3>
                         <p> Computer</p>
                         <p> Electronics & Computer Science </p>
                         <p> Automation & Robotics</p>
                         <p> Electronics and Telecommunication</p>
                         <p> Information Technology</p>
                         <p> AI and data Science</p>
                    </div>
                    <div class="col-md-4 feature-box">
                        <h3>Master Of Computer Application</h3>
                         </div>
                    <div class="col-md-4 feature-box">
                        <h3>Master of Engineering</h3>
                    <p> Instrumentation and Control</p>    
                    <p> Electronics and Telecommunication</p>
                    <p> Information Technology</p>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Courses;
