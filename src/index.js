import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
                </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author={ faker.name.firstName() }
                timeAgo="Today at 4:45PM" 
                image_src={ faker.image.avatar() } 
                comment={ faker.hacker.phrase() }
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author={ faker.name.firstName() }
                timeAgo="Yesterday at 3:45AM" 
                image_src={ faker.image.avatar() } 
                comment={ faker.hacker.phrase() }
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={ faker.name.firstName() }
                timeAgo="Today at 4:45AM" 
                image_src={ faker.image.avatar() } 
                comment={ faker.hacker.phrase() }
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={ faker.name.firstName() } 
                timeAgo="Today at 1:45PM" 
                image_src={ faker.image.avatar() }
                comment={ faker.hacker.phrase() }
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={ faker.name.firstName() }
                timeAgo="Yesterday at 2:45PM" 
                image_src={ faker.image.avatar() } 
                comment={ faker.hacker.phrase() }
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author={ faker.name.firstName() } 
                timeAgo="Today at 5:45PM"
                image_src={ faker.image.avatar() }  
                comment={ faker.hacker.phrase() }
                />
            </ApprovalCard>           
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));