import React, { Component } from 'react';
import './post-add-form.css';
import { Button } from 'reactstrap';

export default class PostAddForm extends Component {
    state = { text: '' }

    onValueChange = async (e) => {
        await this.setState({ text: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onAdd(this.state.text)
        this.setState({ text: '' })
    }

    render() {

        return (
            <>
                <form
                    className="bottom-panel d-flex"
                    onSubmit={this.onSubmit}
                >
                    <input
                        type='text'
                        placeholder='о чём вы думаете сейчас?'
                        className="for,-control new-post-label"
                        onChange={this.onValueChange}
                        value={this.state.text}
                    />
                    <Button
                        type='submit'
                        outline
                        color="secondary"
                        className='btn btn-outline-secondary'
                    >
                        Добавить </Button>
                </form>
            </>
        );
    }

};


