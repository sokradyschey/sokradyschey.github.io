import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/Sokrady.jpg'
import pic02 from '../assets/images/Sokrady2.jpg'
import pic04 from '../assets/images/quote-thumbnail.png'
import pic05 from '../assets/images/Pokemon.jpg'
import pic06 from '../assets/images/Wes-Bos-Tutorial.png'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Sokrady Chey";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>About Me</h2>
                            </header>
                            <p>I'm a Front-End Developer at Brand Llama in Fishtown. My day-to-day at Brand Llama is building Wordpress sites for our clients using PHP, HTML, CSS, and Javascript.</p>
                            <p>Before Brand Llama, I was a Sales Associate at <a href="https://www.revzilla.com/">RevZilla</a>. I provided motorcycle enthusiates the customer support and experience they need to choose motorcycle gear for their journey on two wheels.</p>
                            <p>During my time at RevZilla, I was in attending Temple University Fox School of Business 
                            majoring in Marketing and minoring in Management Information Systems. While I was at completing my degree and working at RevZilla,
                            I decided to teach myself HTML, CSS, and Javascript to start my career as a Front-End Developer which lead me to where I am today!</p>
                            <p>If you want to more about me, feel free to reach out via <a href="https://www.linkedin.com/in/sokrady-chey-a158a3a1/">Linkedin</a> or email me 
                            at  <a href="mailto:sokradychey@gmail.com"><span className="label">sokradychey@gmail.com</span></a></p>
                            </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon style1 major fa-html5"></span></li>
                                <li><span className="icon style2 major fa-code"></span></li>
                                <li><span className="icon style3 major fa-github"></span></li>
                                <li><span className="icon style4 major fa-wordpress"></span></li>
        
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Skills</h2>
                            </header>
                            <p>At Brand Llama is building Wordpress sites for our clients using PHP, HTML, CSS, and Javascript. 
                            I work with the project manager and other developers to ensure that the client's site is built up to standards and efficiently!</p>
                            <p>When I am not at Brand Llama, I work through Wes Bos "React for Beginners" tutorial to learn React.js. 
                            I try my best to use the new skills that I learn in the tutorials and reuse it to build projects in order to understand React better.</p>
                            <p>To learn more about my skills and background, please download a PDF of my <a href="https://sokradychey.dev/images/Sokrady-Chey-Rev-Resume-2019.pdf" target="_blank">CV Here</a>.</p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Portfolio</h2>
                            </header>
                            <p></p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic05} alt="" /></span>
                            <h3>Pokemon Flash Card</h3>
                            <p>Simple who's that Pokemon Flash Card. It is built with vanilla JS.</p>
                            <ul className="actions">
                                <li><a href="https://codepen.io/Schey1993/pen/rPeKNm" target="_blank" className="button">Demo</a></li>
                                <li><a href="https://github.com/sokradyschey/Pokemon-Flash-Cards" target="_blank" className="button">Code</a></li>

                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>Random Quote Machine</h3>
                            <p>Random Quote Machine that generates new quotes. This is built with HTML, CSS, and JS.</p>
                            <ul className="actions">
                                <li><a href="https://codepen.io/Schey1993/pen/jZvPoV" target="_blank" className="button">Demo</a></li>
                                <li><a href="https://github.com/sokradyschey/random-quote-machine" target="_blank" className="button">Code</a></li>  
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic06} alt="" /></span>
                            <h3>Wes Bos React Tutorial</h3>
                            <p>I am learning React through Wes Bos' Beginners React Tutorial.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/sokradyschey/catch-of-the-day" target="_blank" className="button">Code</a></li>
                            </ul>
                        </div>

                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;