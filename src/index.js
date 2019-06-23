import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
            author={ faker.name.firstName() }
            timeAgo="Today at 4:45PM" 
            image_src={ faker.image.avatar() } 
            comment={ faker.hacker.phrase() }
            />
            <CommentDetail 
            author={ faker.name.firstName() }
            timeAgo="Yesterday at 3:45AM" 
            image_src={ faker.image.avatar() } 
            comment={ faker.hacker.phrase() }
            />
            <CommentDetail author={ faker.name.firstName() }
            timeAgo="Today at 4:45AM" 
            image_src={ faker.image.avatar() } 
            comment={ faker.hacker.phrase() }
            />
            <CommentDetail author={ faker.name.firstName() } 
            timeAgo="Today at 1:45PM" 
            image_src={ faker.image.avatar() } 
            comment={ faker.hacker.phrase() }
            />
            <CommentDetail author={ faker.name.firstName() }
            timeAgo="Yesterday at 2:45PM" 
            image_src={ faker.image.avatar() } 
            comment={ faker.hacker.phrase() }
            />
            <CommentDetail 
            author={ faker.name.firstName() } 
            timeAgo="Today at 5:45PM"
            image_src={ faker.image.avatar() }  
            comment={ faker.hacker.phrase() }
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));