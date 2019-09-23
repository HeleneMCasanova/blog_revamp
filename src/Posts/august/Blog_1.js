import React, { Component } from 'react';
import PostPage from '../PostsPage';
import Blog from './Blog_1.md';

class Blog_1 extends Component {

    constructor(props){
        super(props);
        this.state = {
            markdown:''
        }
    }
        
    componentDidMount() {
        fetch(Blog).then(res => res.text()).then(text => this.setState({ markdown: text }));
    }
    
    render = () => {
        return(
            <div>
                <PostPage toChild = {this.state.markdown}/>
            </div>
        );
    }
}

export default Blog_1;