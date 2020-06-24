import React, {Component} from 'react';
import '../App.css';
import 'bootstrap';

class AuthorQuiz extends Component{
    render() {
        return(
            <div className='container-fluid'>
                <Hero/>
                <Turn/>
                <Continue/>
            </div>
        )
    }
}