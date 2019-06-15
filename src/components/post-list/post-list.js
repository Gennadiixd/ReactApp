import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './post-list.css';


const PostList = ({ posts, onDelete }) => {

    const elements = posts.map((el) => {

        if (el.constructor.name === 'Object') {
            const { id, ...itemProps } = el
            return (
                <ListGroup key={id}>
                    <ListGroupItem>
                        <PostListItem {...itemProps}
                            onDelete={() => { onDelete(id) }}
                        />
                    </ListGroupItem>
                </ListGroup>
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
