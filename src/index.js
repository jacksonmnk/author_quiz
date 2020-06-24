import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AuthorQuiz from "./component/AuthorQuiz";

const authors = [
    {
        name: 'Mark Twain',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Mark_Twain_by_AF_Bradley.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The adventures of Huckleberry Finn']
    }
];
const state = {
    turnData: {
        author: authors[0],
        books: authors[0].books
    }
}

ReactDOM.render(
    <React.StrictMode>
        <AuthorQuiz {...state} />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
