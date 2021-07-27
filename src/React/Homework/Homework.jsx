import React from 'react';

import Essay from './Essay.jsx';
import SunAndMoon from '../SunAndMoon/SunAndMoon.jsx';

const Homework = () => {
    return (
    <div>
        <SunAndMoon />

        <h2>HOMEWORK</h2>
        <Essay
            number={ 1 }
                question='What is the difference between Git, Github and Heroku?'
        >
                <p>
                Git is an open-source version control system that allows developers to keep track of our code history. We can easily “undo” changes and get back to earlier versions of the code if and when necessary. You do not need GitHub to use Git but you need Git to use GitHub. This is because GitHub is a web-based repository system that stores Git projects. It’s a hosting service whereas Git is a source code management system with an emphasis on speed. 
                GitHub is known for collaborating and contributing and requires a separate server to be utilized to host web apps. Heroku has its own server allowing you to purchase a hosting plan and deploy web apps easily. It’s for backend stack available for collaboration. 

                </p>
                <p> Heroku is a platform for deploying, managing and scaling modern apps. It is a web host that uses the Git revision control system. The benefit to Heroku is its fully managed so developers can focus on their core product without the hassle and distraction of having to maintain servers, hardware or infrastructure. When you push your code to Heroku using Git it then builds a server for you which everyone else can see. 
                </p>
        </Essay>
        <Essay
                number={ 2 }
                question={'Explain the difference between HTML, CSS and JS.'}
            >
                <p>HTML is what describes and communicates the structure of web pages. It’s the formatting of the page where CSS is the style sheet. CSS describes the presentation of design of the pages. We need both CSS and HTML to have a structurally cohesive and visually appealing website. HTML is responsible for headings, paragraphs, margins, etc. CSS is responsible for design, colors, fonts, and layout. The HTML language consists of tags which surround the content. This is what we have been doing in Visual Studio code. CSS consists of selectors followed be a declaration block for instance ( property : value; ). Selectors indicate which HTML element you want to style. 

                </p>
                <p>Javascript is a programming language that allows you to create dynamic content, complex features on your web pages, display interactive maps, animated 2D/3D graphics, etc. HTML is the markup language giving structure and meaning to our web content. CSS is the language of style rules that we use to style our HTML content and JavaScript is a scripting language that allows us to create dynamically updating content, control multimedia, animate images and do most everything else. From what I understand, it’s necessary to have all three on a single site to create a unique layout, design and interactions. 
                </p>
        </Essay>
        <Essay
                number={ 3 }
                question='What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?'
            >
                <p> A single-page application is a page we don’t need to reload during its use and it works within the browser. Your browser downloads a program in JS. It’s a complete application like if you installed a complete one on your browser. Once running you don’t need to reload that page. SPAs give you the impression that the page is changing, with some content coming and going. The URL also changes during the time however, a new page has not been loaded from the server. Two examples are Gmail and Instagram. 
                    </p>
                <p> Clicking on Gmail’s inbox, outbox, etc. means the content and URL are changing however, you don’t have the impression the page is reloading. This is a major benefit of the SPA. There is no page refresh. It’s a single HTMP page that loads upon opening the website and doesn’t refresh. This means SPAs have a faster display of the component and reduce server load as it doesn’t have to process HTML during each request.
                </p>
        </Essay>
        <Essay
                number={ 4 }
                question='What is the difference between Web Designer, Front End Development and Back End Developer?'
            >
                <p> Front end developers build the front end of websites and are responsible for user-facing code. To make the building process more efficient, front end developers will use repositories and libraries like React to build the front end of their sites. These developers are responsible for everything the user sees when they visit a site and must use CSS, Html and JavaScript. Front end developers also need to be familiar with frameworks like Bootstrap, Foundation, Backbone, Angular JS, ReactJs and EMberJS. These allow us to have beautiful sites no matter the device. 
                    </p>
                <p> A backend developer builds and maintains the backend of the website which enables the user side of the site to exist. The server and application need to communicate with each other. Back-end developers use server-side languages like PHP, Ruby, Python, Java and .Net. These languages help to build the application and tools such as MySQL, Oracle and SQL to find, save or change data and service it back to the user in front-end code. 

A web designer focuses on the design side of the equation primarily. While some web designers know how to code, web designers are able to complete their jobs without having to code. Platforms such as Wordpress and Webflow and templates on these platforms take care of most coding needs so users can use them without having to code. However, many web designers incorporate code for advanced interactions on the website. Wireframes, the site’s flow, button sizing, colors, fonts, graphics, etc are all part of the web designers job.
                </p>
        </Essay>
        <Essay
                number={ 5 }
                question='Distinguish the difference between Site Relative, Document Relative and?'
            >
                <p> Front end developers build the front end of websites and are responsible for user-facing code. To make the building process more efficient, front end developers will use repositories and libraries like React to build the front end of their sites. These developers are responsible for everything the user sees when they visit a site and must use CSS, Html and JavaScript. Front end developers also need to be familiar with frameworks like Bootstrap, Foundation, Backbone, Angular JS, ReactJs and EMberJS. These allow us to have beautiful sites no matter the device. 
                    </p>
                <p> A backend developer builds and maintains the backend of the website which enables the user side of the site to exist. The server and application need to communicate with each other. Back-end developers use server-side languages like PHP, Ruby, Python, Java and .Net. These languages help to build the application and tools such as MySQL, Oracle and SQL to find, save or change data and service it back to the user in front-end code. 

A web designer focuses on the design side of the equation primarily. While some web designers know how to code, web designers are able to complete their jobs without having to code. Platforms such as Wordpress and Webflow and templates on these platforms take care of most coding needs so users can use them without having to code. However, many web designers incorporate code for advanced interactions on the website. Wireframes, the site’s flow, button sizing, colors, fonts, graphics, etc are all part of the web designers job.
                </p>
        </Essay>
    </div>
    );
}

export default Homework;