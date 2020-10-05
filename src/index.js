import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App =()=>{
    return (
      <div className="ui container comments">
          <ApprovalCard>
            <CommentDetail 
                author="sam"  
                timeAgo ="posted at 2:00 Am" 
                blogpost="i love grace fountain"
                avatar={faker.image.avatar()} 
                />
            </ApprovalCard>


            <ApprovalCard>
                <CommentDetail 
                author="jane" 
                timeAgo ="posted at 4:30 Am" 
                blogpost="i love grace fountain G.O" 
                avatar={faker.image.avatar()}
                /> 
            </ApprovalCard> 
        </div>  
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))
