import React from 'react';
import './App.css'; // You can create a separate CSS file for styles
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <MainContent />
            <Contact />
            <Footer />
        </div>
    );
};

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
            <a className="navbar-brand d-flex align-items-center" href="#">
                <img src="https://vesit.ves.ac.in/navlogo.PNG" alt="College Logo" style={{ maxHeight: '40px', marginRight: '10px' }} />
                Vivekanand Education Society's Institute Of Technology (VESIT)
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#courses">Courses</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

const Hero = () => {
    return (
        <header className="hero" style={{
            background: `url('https://images.collegedunia.com/public/college_data/images/appImage/15528_VESIT.jpg?h=260&w=360&mode=crop/1500x500') no-repeat center center/cover`,
            color: '#fff',
            padding: '60px 0',
            textAlign: 'center'
        }}>
            <div className="container">
                <h1 style={{ fontSize: '3rem' }}>Welcome to Vivekanand Education Society's Institute Of Technology (VESIT)</h1>
                <p style={{ fontSize: '1.25rem' }}>Empowering students to achieve their dreams</p>
                <a href="#contact" className="btn btn-primary">Get in Touch</a>
            </div>
        </header>
    );
};

const MainContent = () => {
    return (
        <div className="container">
            <About />
            <Courses />
        </div>
    );
};

const About = () => {
    return (
        <section id="about">
            <h2>About Us</h2>
            <p>
                Vivekanand Education Society was founded in 1959 by Shri. Hashu Advani, along with ten other members, who shared the dream of providing qualitative education to the youth of our country. In the beginning, Vivekanand Education Society had a very modest launch, with just 256 students and six classrooms, in the humble barracks of Chembur Camp. But today, it proudly boasts of having 3, 75, 000 sq. ft. land, housing 12 buildings and 28 Institutions, ranging from a crèche to Ph.D. Centers. It has over 2000 teaching and non-teaching staff, and more than 18,000 students who pass through its hallowed portals each year.
            </p>
            <p>
                Vivekanand Education Society’s Institute of Technology (VESIT) was established in 1984, with the aim of providing professional education in the field of Engineering. This institute is affiliated to the University of Mumbai and follows the rules and regulations laid down by government, AICTE, and University for admission; 51% reserved for Sindhi Linguistic minority and 49% through CAP test. The management quota has been surrendered to DTE to make admission centralized.
            </p>
        </section>
    );
};

const Courses = () => {
    return (
        <section id="courses">
            <h2>Our Courses</h2>
            <div className="row">
                <CourseBox title="Bachelor in Engineering" courses={[
                    "Computer", 
                    "Electronics & Computer Science", 
                    "Automation & Robotics", 
                    "Electronics and Telecommunication", 
                    "Information Technology", 
                    "AI and Data Science"
                ]} />
                <CourseBox title="Master Of Computer Application" courses={[]} />
                <CourseBox title="Master of Engineering" courses={[
                    "Instrumentation and Control", 
                    "Electronics and Telecommunication", 
                    "Information Technology"
                ]} />
            </div>
        </section>
    );
};

const CourseBox = ({ title, courses }) => {
    return (
        <div className="col-md-4 feature-box" style={{ background: '#f8f9fa', padding: '20px', borderRadius: '5px', textAlign: 'center', marginBottom: '20px' }}>
            <h3>{title}</h3>
            {courses.map((course, index) => (
                <p key={index}>{course}</p>
            ))}
        </div>
    );
};

const Contact = () => {
    return (
        <section id="contact" className="container mt-5">
            <h2>Contact Us</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" rows="3" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="footer" style={{ background: '#333', color: '#fff', padding: '20px 0', textAlign: 'center' }}>
            <p>&copy; 2024 Vivekanand Education Society’s Institute of Technology (VESIT) | <a href="#" style={{ color: '#fff' }}>Privacy Policy</a> | <a href="#" style={{ color: '#fff' }}>Terms of Service</a></p>
        </footer>
    );
};

export default App;
