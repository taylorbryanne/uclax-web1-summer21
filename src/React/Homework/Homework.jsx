import React from 'react';

import Essay from './Essay.jsx';

const Homework = () => {
    return (
    <div>
        HOMEWORK
        <Essay
        number={ 1 }
        question='What is the difference between Git, Github and Heroku?'
        >
            <p>
            Git is an open-source version control system that allows developers to keep track of our code history. We can easily “undo” changes and get back to earlier versions of the code if and when necessary. You do not need GitHub to use Git but you need Git to use GitHub. This is because GitHub is a web-based repository system that stores Git projects. It’s a hosting service whereas Git is a source code management system with an emphasis on speed. 
            GitHub is known for collaborating and contributing and requires a separate server to be utilized to host web apps. Heroku has its own server allowing you to purchase a hosting plan and deploy web apps easily. It’s for backend stack available for collaboration. 

            </p>
            <p>
            Heroku is a platform for deploying, managing and scaling modern apps. It is a web host that uses the Git revision control system. The benefit to Heroku is its fully managed so developers can focus on their core product without the hassle and distraction of having to maintain servers, hardware or infrastructure. When you push your code to Heroku using Git it then builds a server for you which everyone else can see. 
            </p>
        </Essay>
        <Essay
        number={ 2 }
        question='Explain the difference between HTML, CSS and JS.'
        >
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam fugit, a dolor rerum quaerat, sint nostrum, natus excepturi necessitatibus sequi maiores. Non dolorum asperiores magnam impedit perferendis! Nemo, dignissimos cumque.

            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quibusdam eaque aliquid, autem repellendus labore vel blanditiis repudiandae ullam numquam beatae ipsa corrupti nisi accusamus illo! Dicta officia eum consequuntur.
            </p>
        </Essay>
    </div>
    );
}

export default Homework;