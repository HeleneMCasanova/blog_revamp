import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

import prof_pic from '../../images/blog.jpeg';

import '../BuJo/buju.css';

class Contact extends Component {

    render = () => {
        return(
            <div id = "main-body-container">
                
                <div id = "left-home-container">
                    <div style = {{textAlign:"center"}}>
                        <SocialIcon className = "icon-style-contact" bgColor = "#ed9985" url = "https://github.com/" />
                        <SocialIcon className = "icon-style-contact" bgColor = "#ed9985" url = "https://www.linkedin.com/in/helenecasanova/" />
                        <SocialIcon className = "icon-style-contact" bgColor = "#ed9985" url = "https://www.pinterest.com/helenemcasanova/" />
                        <SocialIcon className = "icon-style-contact" bgColor = "#ed9985" url = "https://twitter.com/helene_casanova"/>

                        <p><em>Email: </em> helenemcasanova@gmail.com</p>

                        <p><em>Were you looking for my portfolio? </em> <a href = "https://helenemcasanova.com/#/">helenemcasanova.com</a></p>
                    </div>
                </div>

                <div id = "right-home-container">
                    <div id = "about-me">
                        <img src = {prof_pic} id = "blog_prof_pic" />
                        <p style = {{textAlign:'center'}}>Helene Casanova</p>
                        <p className="title-text">writer && programmer && author</p>

                        <p style = {{fontSize:".9em"}}>I am a programming enthusiest, a writer, an innovator and mostly a self-starter. This is my work, programming is my life and writing is my passion (a very time consuming one). Overall, I wanted a place to display what I work so hard on everyday and what I continue to work on, whether it be book I write, the programs I've written or the new hobby I've started.</p>
                    </div>

                    <div id = "current_months">
                        <p className = "title-text">archive</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Contact;