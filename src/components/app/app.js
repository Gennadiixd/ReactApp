import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import idGenerator from 'react-id-generator';
import './app.css';

export default class App extends Component {

    state = {
        data: [
            { label: 'Going to learn', important: true, id: 1 },
            { label: 'Going to go', important: false, id: 2 },
            { label: 'Going...', important: false, id: 3 },
        ]
    }

    deleteItem = async (id) => {
        await this.setState(({ data }) => {
            const index = this.state.data.findIndex((el) => el.id === id)
            const newArray = [...data.slice(0, index), ...data.slice(index + 1)]
            data.splice(index, 1)
            return {
                data: newArray
            }
        })
    }

    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: idGenerator(),
        }

        this.setState(({ data }) => {
            const newArray = [...data, newItem];

            return {
                data: newArray
            }
        })
    }


    render() {
        return (
            <div className='app' >
                <AppHeader />
                <div className='search-panel d-flex'>
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList posts={this.state.data}
                    onDelete={this.deleteItem}
                />
                <PostAddForm
                    onAdd={this.addItem}
                />
            </div>
        );
    }


};


