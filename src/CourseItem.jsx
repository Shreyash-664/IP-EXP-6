import React from 'react';

const CourseItem = () => {
    return (
        <section id="contact" class="container mt-5">
        <h2>Contact Us</h2>
        <form>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Your Name"/>
            </div>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Your Email"/>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea class="form-control" id="message" rows="3" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
    </section>
    );
};

export default CourseItem;
