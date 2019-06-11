import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';


const PostList = ({ posts }) => {

    const elements = posts.map((el) => {

        let isObject = false;

        for (const key in el) {
            isObject = true;
        }

        if (isObject) {
            const { id, ...itemProps } = el
            return (
                <li className='list-group-item' key={id}>
                    <PostListItem {...itemProps} />
                </li>
            )
        }
        return null
    })

    return (
        <ul className='app-list list-group'>
            {elements}

        </ul>
    );
};

export default PostList;
