import React from "react";

import "./About.css";

const About = () => {
    return (
        <div className="about d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="d-flex">
                    <h1>About Me</h1>
                </div>

                <p>Hey there! 👋 I'm Mradul, the creator of this To-Do app.<br/>

                    I built this app because I'm passionate about productivity and organization. I wanted to create a simple yet powerful tool that helps you stay on top of your tasks effortlessly.

                    With this app, you can add, edit, and delete tasks with ease, making it perfect for students, professionals, and anyone looking to boost their productivity.<br/>

                    I hope you find this app as helpful as I do! Feel free to reach out with any feedback. Let's make task management simpler together!
                    
                </p>
            </div>
        </div>
    );
};

export default About;