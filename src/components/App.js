import React from 'react';
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList';

const App = (props) => {
    return (
      <div>
       <CommentBox />
       <CommentList />
      </div>  
    );
};

export default App; 