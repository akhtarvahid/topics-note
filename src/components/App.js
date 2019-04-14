import React from 'react';
import CommentBox from './CommentBox'
import CommentList from './CommentList';

const App = (props) => {
    return (
      <div>
       <CommentBox />
       <CommentList />
      </div>  
    );
};

export default App; 