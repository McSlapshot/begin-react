import React, { Component } from 'react'
import Article from '../components/Article';

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        }
    }
    componentDidMount = async () => {
        const res = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=58e18ab7605c4e32a32e585d22d5dd19&pageSize=10')
        const data = await res.json()
        const my_articles = data.articles
        this.setState({articles: my_articles})
    }

    render() {
        return (
            <div className='row'>
                {this.state.articles.map(a => <Article article={a}/>)}

            </div>
        )
    }
}
