import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'
import Hiring from './Hiring'
import NotHiring from './NotHiring'

class Library extends Component {

    static defaultProps = {
        books: [
            { "title": "Tahoe Tales", "author": "Chet Whitley", "pages": 1000 },
        ]
    }

    componentDidMount() {
        console.log("The component is now mounted")
        this.setState({ loading: true })
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(data => this.setState({ data, loading: false }))
    }

    state = {
        open: false,
        freeBookmark: true,
        hiring: true,
        data: [],
        loading: false
    }

    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }

    render() {
        // const books = this.props.books
        const { books } = this.props
        return (
            <div>
                <h1>Welcome to the Library</h1>

                <h3>The Library is {this.state.open ? "open" : "closed"}</h3>

                {this.state.hiring ? <Hiring /> : <NotHiring />}

                {
                    this.state.loading
                        ? "loading..."
                        : <div>
                            {this.state.data.map((product, i) => {
                                return (
                                    <div key={product.id}>
                                        <h3>Library Product of the Week!</h3>
                                        <h4>{product.name}</h4>
                                        <img src={product.image} alt={product.image_title} height={100} />
                                        <br>
                                        </br><big>Price: {product.price}</big>
                                        <p>{product.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                }

                <button onClick={this.toggleOpenClosed}>Change status</button>

                <ul>
                    {books.map(
                        (book, i) =>
                            <Book
                                key={i}
                                title={book.title}
                                author={book.author}
                                pages={book.pages}
                                freeBookmark={this.state.freeBookmark}
                            />
                    )}
                </ul>
            </div>
        )
    }
}

Library.propTypes = {
    books: PropTypes.array
}

Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookmark: PropTypes.bool
}

export default Library