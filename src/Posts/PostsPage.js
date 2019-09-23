import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import prof_pic from '../images/blog.jpeg';
import './posts.css';

class PostsPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            markdown:''
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ markdown: nextProps.toChild });  
    }

    render = () => {
        return(
            <div id = "main-body-container">
                <div id = "left-home-container">
                    <div className = "post_container">
                        <ReactMarkdown source={this.state.markdown} escapeHtml={false}/>
                    </div>
                </div>

                <div id = "right-home-container">
                    <div id = "about-me">
                        <img src = {prof_pic} id = "blog_prof_pic" />
                        <p className="title-text">writer && programmer && author</p>

                        <p style = {{fontSize:".9em"}}>I am a programming enthusiest, a writer, an innovator and mostly a self-starter. This is my work, programming is my life and writing is my passion (a very time consuming one). Overall, I wanted a place to display what I work so hard on everyday and what I continue to work on, whether it be book I write, the programs I've written or the new hobby I've started.</p>
                    </div>

                    <div id = "current_months">
                        <p className = "title-text">archive</p>
                    </div>
                </div>
            
            </div>
        )
    }
}

export default PostsPage;