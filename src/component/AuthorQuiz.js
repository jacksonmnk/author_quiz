import React, {Component} from 'react';
import '../App.css';
import 'bootstrap';


function Hero() {
    return (<div className="row">
        <div className='jumbotron col-10 offset-1'>
            <h1>Author Quiz</h1>
            <p>Select the book written by the author shown.</p>
        </div>
    </div>);
}

class AuthorQuiz extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <Hero/>
                <Turn/>
                <Continue/>
            </div>
        )
    }
}