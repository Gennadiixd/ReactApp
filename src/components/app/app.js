import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import idGenerator from 'react-id-generator';
import './app.css';
import { isTSEnumMember } from '@babel/types';

export default class App extends Component {

    state = {
        data: [
            { label: 'Going to learn', important: true, liked: false, id: 1 },
            { label: 'Going to go', important: false, liked: false, id: 2 },
            { label: 'Going...', important: false, liked: false, id: 3 },
        ],
        term: '',
        filter: 'all' //Фильтр по умолчанию
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

        if (body.trim() === '') {
            return false
        }

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

    onToggleImportant = (id) => {
        this.setState(({ data }) => {
            const newArray = data.map((el) => el.id === id ? { ...el, important: !el.important } : el)

            return {
                data: newArray
            }
        })
    }

    onToggleLiked = (id) => {
        this.setState(({ data }) => {
            //const index = data.findIndex((el) => el.id === id)
            //const old = data[index]
            //const newItem = {...old, liked: !old.liked}
            //const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1) ]
            const newArray = data.map((el) => el.id === id ? { ...el, liked: !el.liked } : el)

            return {
                data: newArray
            }
        })
    }

    searchPost = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        })
    }

    filterPost = (items, filter) => {
        if (filter === 'liked') {
            return items.filter((item) => item.liked) //вернёт все где item.liked = true
        } else {
            return items
        }
    }

    onUpdateSearch = (term) => {
        this.setState({ term })
    }

    onFilterSelect = (filter) => {
        this.setState({ filter })
    }


    render() {
        const { data, term, filter } = this.state

        const liked = data.filter(item => item.liked).length
        const allPosts = data.length
        // ищем посты, а потом фильтруем. Отдаём всё в переменную visiblePosts и её рендерим
        const visiblePost = this.filterPost(this.searchPost(data, term), filter);

        return (
            <div className='app' >
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}
                />
                <div className='search-panel d-flex'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList
                    posts={visiblePost}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm
                    onAdd={this.addItem}
                />
            </div>
        );
    }


};


