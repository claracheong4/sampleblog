import axios from 'axios';
import React from 'react';

import Info from './components/Info.js';
import Posts from './components/Posts.js';

import './css/App.css';

export default class App extends React.Component {
    state = {
        name: '',
        phone: 0,
        companyBs: '',
        address: [],
        posts: []
    }

    getUserData() {
        axios
        .get("https://jsonplaceholder.typicode.com/users/1")
        .then(res => {
            this.setState({
                name: res.data.name,
                phone: res.data.phone,
                companyBs: res.data.company.bs,
                address: res.data.address
            });
        })
        .catch(err => console.log(err));
    }

    getUserPosts() {
        axios
            .get("https://jsonplaceholder.typicode.com/posts?userId=1")
            .then(res => {
                var postsArr = res.data.map(post => {
                    return {
                        title: post.title,
                        body: post.body
                    };
                });
                this.setState({
                    posts: postsArr
                });
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.getUserData();
        this.getUserPosts();
    }

    render() {
        return (
            <div class="row">
                <div class="column">
                    <Info
                        name={this.state.name}
                        phone={this.state.phone}
                        companyBs={this.state.companyBs}
                        address={this.state.address} />
                </div>
                <div class="column">
                    <Posts
                        name={this.state.name}
                        posts={this.state.posts} />
                </div>
            </div>
        );
    }
}

