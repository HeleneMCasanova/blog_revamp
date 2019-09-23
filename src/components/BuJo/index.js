import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

import prof_pic from '../../images/blog.jpeg';

import Blog_1 from '../../Posts/Last_Five_Preview/Blog_1.md';
import Blog_2 from '../../Posts/Last_Five_Preview/Blog_2.md';
import Blog_3 from '../../Posts/Last_Five_Preview/Blog_3.md';
import Blog_4 from '../../Posts/Last_Five_Preview/Blog_4.md';
import Blog_5 from '../../Posts/Last_Five_Preview/Blog_5.md';

import Blog_1_full from '../../Posts/august/Blog_1.md';
import Blog_2_full from '../../Posts/august/Blog_2.md';
import Blog_3_full from '../../Posts/august/Blog_3.md';
import Blog_4_full from '../../Posts/august/Blog_4.md';


import './buju.css';

class BuJu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            markdown_1: '',
            markdown_2: '',
            markdown_3: '',
            markdown_4: '',
            markdown_5: '',
            full_1: '',
            full_2:'',
            full_3:'',
            full_4:''
        }
    
    }

    componentWillMount() {
        fetch(Blog_1).then(res => res.text()).then(text => this.setState({ markdown_1: text }));
        fetch(Blog_2).then(res => res.text()).then(text => this.setState({ markdown_2: text }));
        fetch(Blog_3).then(res => res.text()).then(text => this.setState({ markdown_3: text }));
        fetch(Blog_4).then(res => res.text()).then(text => this.setState({ markdown_4: text }));
        fetch(Blog_5).then(res => res.text()).then(text => this.setState({ markdown_5: text }));

        fetch(Blog_1_full).then(res => res.text()).then(text => this.setState({ full_1: text }));
        fetch(Blog_2_full).then(res => res.text()).then(text => this.setState({ full_2: text }));
        fetch(Blog_3_full).then(res => res.text()).then(text => this.setState({ full_3: text }));
        fetch(Blog_4_full).then(res => res.text()).then(text => this.setState({ full_4: text }));
    }

    render = () => {
        return(
            <div id = "main-body-container">
                
                <div id = "left-home-container">
                    <div className = "min-card-body">
                        <div>
                            <ReactMarkdown source={this.state.markdown_1} escapeHtml={false}/>

                            <Link to={{
                                    pathname:'/curpost/august/blog_1'
                                }}><span style = {{float: "right", paddingBottom:'2%'}}>Read More</span></Link>
                            <br></br>
                        </div>
                    </div>

                    <div className = "min-card-body">
                        <ReactMarkdown source={this.state.markdown_2} escapeHtml={false}/>

                        <Link to={{
                                    pathname:'/curpost/august/blog_2'
                                }}><span style = {{float: "right", paddingBottom:'2%'}}>Read More</span></Link>
                        <br></br>
                    </div>

                    <div className = "min-card-body">
                        <ReactMarkdown source={this.state.markdown_3} escapeHtml={false}/>

                        <Link to={{
                                    pathname:'/curpost/august/blog_3'
                                }}><span style = {{float: "right", paddingBottom:'2%'}}>Read More</span></Link>
                        <br></br>
                    </div>

                    <div className = "min-card-body">
                        <ReactMarkdown source={this.state.markdown_4} escapeHtml={false}/>

                        <Link to={{
                                    pathname:'/curpost/august/blog_4'
                                }}><span style = {{float: "right", paddingBottom:'2%'}}>Read More</span></Link>
                        <br></br>
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

export default BuJu;