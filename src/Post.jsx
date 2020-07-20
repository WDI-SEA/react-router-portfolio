import React from 'react';

function Post(props) {
  return (
    <div>
      <div>
        {props.title}
      </div>
      <div>
        {props.body}
      </div>
    </div>
  )
}

export default Post