import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import '../Navigation/navigation.css';
import Navigation from '../Navigation';
import Pictures from '../../Posts/images/Pictures';

import Home from '../Home';
import BuJu from '../BuJo';
import Programming from '../Programming';
import Travel from '../Travel';
import contact from '../Contact';

import august_blog_1 from '../../Posts/august/Blog_1';
import august_blog_2 from '../../Posts/august/Blog_2';
import august_blog_3 from '../../Posts/august/Blog_3';
import august_blog_4 from '../../Posts/august/Blog_4';
import Contact from '../Contact';

class App extends Component {
    render = () => {
        return (
            <div>
                <div>
                    <HashRouter>
                        <Navigation />
                        <div id = "title_container">
                            <div id = "blog_title">the traveling programmer</div>
                        </div>
                        <Route exact path='/' component={Home}/>
                        <Route  path='/BuJo' component={BuJu}/>
                        <Route  path='/Programming' component={Programming}/>
                        <Route  path='/Travel' component={Travel}/>
                        <Route  path='/contact' component={contact}/>

                        <Route  path='/curpost/august/blog_1' component={august_blog_1}/>
                        <Route  path='/curpost/august/blog_2' component={august_blog_2}/>
                        <Route  path='/curpost/august/blog_3' component={august_blog_3}/>
                        <Route  path='/curpost/august/blog_4' component={august_blog_4}/>

                    </HashRouter>
                </div>
            </div>
        );
    }
}

export default App;