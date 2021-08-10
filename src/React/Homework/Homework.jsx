import React from 'react';

import { useMediaQuery } from 'common/mediaQueries/useMediaQuery.js';

import Essay from './Essay.jsx';
import SunAndMoon from '../SunAndMoon/SunAndMoon.jsx';

const Homework = () => {

    const { media } = useMediaQuery ();

    console.log('media' , media);

    return (
    <div>
        { media.mdUp && <SunAndMoon /> }
       

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
                <p> When embedding files into our html code, it’s important to understand which file path to use. This is where site relative, document relative and absolute relative paths become important for developers.  

                    Absolute paths give the entire URL of the linked document. In our HTML code we would use the entire protocol and domain. Absolute paths are inflexible and do not automatically update when any adjustments have been made to the page linked and are best for assets hosted on another server. 

                </p>
                <p> Document relative paths are best for local links and are very useful when the current and linked document are in the same folder and will remain together. Unlike absolute paths, relative paths can exclude the part of the path that is the same for both documents. 

                    Site root-relative paths are best for larger sites that are hosted on multiple servers. If documents or links are moved often on a site it’s best to use site root-relative as you will not need to change links as they are relative to the site’s root. The downside is if you rename a document targeted by site root-relative links, those links must be updated even if the documents’ paths relative to each other remain the same. 

                    In conclusion, a relative URL is best within a site when transferring the users from one point to the next within the same domain. An absolute path is best when sending the user to a page hosted outside your server. 
                </p>
        </Essay>
        <Essay
                number={ 6 }
                question='What is the difference between jpg, gif, png and SVG images?'
            >
                <p> JPG files (joint photographic experts group) are compressed digital images used in different operating systems and across the internet. These image files allow a compression ratio of 10:1 which allows for much smaller image files, which are easier to share and store. Photographs are often JPG files for this reason. 

                GIFs (graphics interchange format) are dynamic files which allow for showing movement and details static images can’t. Animations are a common use of GIFs as they are relatively small in size compared to other animated formats. 
                </p>
                <p> 
                SVG files are scalable vector graphics. They do not rely on pixels that make up the images we see. Instead they use Vector data which means they can retain image quality as they sale up or down (something PNGs cannot). They are great for logo design, charts, diagrams and graphs. They are also much smaller than high resolution similars in other formats.  

                A PNG file is a portable network graphic often used in web design as they have transparent background. It’s great for digital art as it uses lossless compression and also allows for the ability to convert image files to animations. 
                </p>
                
        </Essay>
        <Essay
                number={ 7 }
                question='Define the following roles: Project Manager, Business Analyst, Scrum Master, UX designer, Web Developer/Engineer, Quality Assurance Tester, and DevOps.'
            >
                <p> Project Manager: The project manager is responsible for the leading their team and play the lead role in planning, executing, monitoring, controlling and closing out projects. They are responsible for prioritizing, motivating, problem-solving and strategic business decisions. Their main roles are executing the project and leading the team to victory. 
                    Business Analyst: Business analysts are data focused professionals who help bridge the gap between business and IT. They are focused on assessing processes, determining requirements and delivering data-driven recommendations to executives and stakeholders. They are often the catalysts for change in an organization and work closely with IT teams and financial reporting.  
                    Scrum Master: Scrum masters are responsible for managing communication between team members, ensuring the team lives agile values and principles and follows the processes the team agreed to. Scrum is from rugby when the team huddles together which is what a scrum master does. They lead projects daily, even though they are not singularly responsible for project outcomes, they help determine what can be achieved in a period of time, keep the team focused, helps find a consensus and overcome any obstacles. 

                </p>
                <p> UX Designer: UX designers is responsible for the interaction between the product and the user. These designers are responsible for the process of supporting user behavior through usability, usefulness and desirability while interacting with the product. UX designers must combine aspects of psychology, business, market research, design and technology in order to make their decisions. They do prototyping, wire framing, testing & tweaking, etc. 
                    Web Developer / Engineer: A web developer / software engineer develops systems and softwares ranging from business applications, and games, to network control systems and operating systems. They focus both on web applications and websites along with the development of software. Software engineers use their computer science background to create software products while web developers specialize in web-based applications such as websites, e-commerce and mobile development. 
                    Quality Assurance: QA is any systemic process of determining whether a product or service meets specified requirements. They focus on delivering products free of mistakes and defects and increasing customer confidence in a company’s credibility. Help a company create products and services that meet the needs, expectations and requirements of customers. Failure testing, etc. 
                    Tester: A software tester conducts tests to provide stakeholders with information about the quality of the software product or service. They test software for bugs, errors, defects or any problem that could negatively affect the performance of the software or application under inspection. Testers ensure the software performs as expected both functionally and non-functionally. 
                    DevOps: combination of practices and tools designed to increase an organizations ability to deliver applications and services faster. Speed, rapid delivery, reliability, improved collaboration and security and the focus on DevOps. 
                </p>
                
        </Essay>
        <Essay
                number={ 8 }
                question='What is considered the right size for an image or video asset?'
            >
                <p> The correct size for an image is between 1500 and 2500 pixels wide. When working with images smaller than 1500px the concern is raised regarding the quality of the image. The file size limit is 20MB for an image. Full width images are recommended to be 2400px x 1600px to ensure these hero images look good across any device. For inside content images the horizontal max width is 1500px and the vertical max width is 1000px.  
                </p>
                <p> The recommended length and size for videos is 30-40 seconds long with a maximum file size of 25MB. The minimum recommended resolution for videos is 720p or higher. Also, it is recommended that mp4 video files are used on websites. 
                </p>
                
        </Essay>
        <Essay
                number={ 9 }
                question='What does it mean for a company to be Agile? What is the purpose of using Agile, and its pros and cons'
            >
                <p> The correct size for an image is between 1500 and 2500 pixels wide. When working with images smaller than 1500px the concern is raised regarding the quality of the image. The file size limit is 20MB for an image. Full width images are recommended to be 2400px x 1600px to ensure these hero images look good across any device. For inside content images the horizontal max width is 1500px and the vertical max width is 1000px.  
                </p>
                <p> The recommended length and size for videos is 30-40 seconds long with a maximum file size of 25MB. The minimum recommended resolution for videos is 720p or higher. Also, it is recommended that mp4 video files are used on websites. 
                </p>
                
        </Essay>
    </div>
    );
}

export default Homework;