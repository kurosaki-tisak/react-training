import React from 'react';

const PostsItem = ({match}) => {
    return <div>{match.params.id}</div>
}

export default PostsItem;
