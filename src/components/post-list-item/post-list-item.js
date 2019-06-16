import React, { Component } from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {
    state = {
        important: false,
        like: false,
    }

    //
    // onLike = () => {
    //     //деструкт state на like
    //     this.setState(({ like }) => ({
    //         //задать like противоположное значение
    //         like: !like
    //     }))
    // }
    // //
    // onImportant = () => {
    //     //деструкт state на important
    //     this.setState(({ important }) => ({
    //         //задать important противоположное значение
    //         important: !important
    //     }))
    // }

    render() {
        const { label, onDelete, onToggleImportant, onToggleLiked, important, liked } = this.props;
        // const { important, like } = this.state;

        let classNames = 'app-list-item d-flex justify-content-between'
        //добавить в класс important
        if (important) {
            classNames += ' important';
        }
        //добавить в класс like
        if (liked) {            
            classNames += ' like';
        }

        return (
            <div className={classNames}>
                <span className='app-list-item-label' onClick={onToggleLiked}>
                    {label}
                </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button
                        type='button'
                        className='btn-star btn-sm'
                        onClick={onToggleImportant}
                    >
                        <i className='fa fa-star' ></i>
                    </button>
                    <button
                        type='button'
                        className='btn-trash btn-sm'
                        onClick={onDelete}
                    >
                        <i className='fa fa-trash-o' ></i>
                    </button>
                    <i className='fa fa-heart' ></i>
                </div>
            </div>

        )
    }
}
