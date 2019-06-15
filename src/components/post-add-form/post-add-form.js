import React from 'react';
import './post-add-form.css';
import { Button } from 'reactstrap';

const PostAddForm = ({ onAdd }) => {

    return (
        <div>
            <div className="bottom-panel d-flex">
                <input
                    type='text'
                    placeholder='о чём вы думаете сейчас?'
                    className="for,-control new-post-label"
                />
                <Button
                    type='submit'
                    outline 
                    color="secondary"
                    className='btn btn-outline-secondary'
                    onClick={() => { onAdd('hello') }}
                >
                    Добавить </Button>
            </div>
        </div>
    );
};

export default PostAddForm;
