// import React from 'react'
// import ReactDom from 'react-dom'

// var style = {
//     backgroundColor: 'orange',
//     color: 'white',
//     fontFamily: 'Arial'
// }

// const title = React.createElement(
//     "ul",
//     {
//         id: 'title', className: 'header', style: style
//     },
//     React.createElement(
//         'li',
//         {},
//         'item on our list'
//     )
// )

// ReactDom.render(title, document.getElementById('root'))


// import React from 'react'
// import ReactDom from 'react-dom'

// var style = {
//     backgroundColor: 'orange',
//     color: 'white',
//     fontFamily: 'Arial'
// }

// ReactDom.render(
//     <div style={style}>
//         <h1>Hello World</h1>
//     </div>
//     , document.getElementById('root')
// )


// import React from 'react'
// import ReactDom from 'react-dom'

// class Message extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1 style={{ color: this.props.color }}>
//                     {this.props.msg}
//                 </h1>
//                 <p>I will be back in {this.props.minutes} minutes</p>
//             </div>

//         )
//     }
// }

// ReactDom.render(
//     <Message color="blue" msg="Wats gud" minutes={5} />
//     , document.getElementById('root'))


// import React from 'react'
// import ReactDom from 'react-dom'

// let skiData = {
//     total: 50,
//     powder: 20,
//     backcountry: 10,
//     goal: 100
// }

// class SkiiDayCounter extends React.Component {
//     render() {
//         return (
//             <section>
//                 <div>
//                     <p>Total Days: {this.props.total}</p>
//                 </div>
//                 <div>
//                     <p>Powder Days: {this.props.powder}</p>
//                 </div>
//                 <div>
//                     <p>Backcountry Days: {this.props.backcountry}</p>
//                 </div>
//                 <div>
//                     <p>Goal Days: {this.props.goal}</p>
//                 </div>
//             </section>
//         )
//     }
// }

// ReactDom.render(
//     <SkiiDayCounter
//         total={skiData.total}
//         powder={skiData.powder}
//         backcountry={skiData.backcountry}
//         goal={skiData.goal}
//     />
//     , document.getElementById("root"))


// import React, { Component } from 'react'
// import { render } from 'react-dom'

// let skiData = {
//     total: 50,
//     powder: 20,
//     backcountry: 10,
//     goal: 100
// }

// //OOP
// class SkiiDayCounterClass extends Component {

//     getPercent = decimal => {
//         return decimal * 100 + '%'
//     }

//     calcGoalProgress = (total, goal) => {
//         return this.getPercent(total / goal)
//     }

//     render() {
//         const { total, powder, backcountry, goal } = this.props
//         return (
//             <section>
//                 <h1>Class</h1>
//                 <div>
//                     <p>Total Days: {total}</p>
//                 </div>
//                 <div>
//                     <p>Powder Days: {powder}</p>
//                 </div>
//                 <div>
//                     <p>Backcountry Days: {backcountry}</p>
//                 </div>
//                 <div>
//                     <p>Goal Days: {this.calcGoalProgress(total, goal)}</p>
//                 </div>
//             </section>
//         )
//     }
// }

// //Function
// // const SkiiDayCounterFunc = (props) => {
// //     return (
// //         <section>
// //             <div>
// //                 <p>Total Days: {props.total}</p>
// //             </div>
// //             <div>
// //                 <p>Powder Days: {props.powder}</p>
// //             </div>
// //             <div>
// //                 <p>Backcountry Days: {props.backcountry}</p>
// //             </div>
// //             <div>
// //                 <p>Goal Days: {props.goal}</p>
// //             </div>
// //         </section>
// //     )
// // }

// const getPercent = decimal => {
//     return decimal * 100 + '%'
// }

// const calcGoalProgress = (total, goal) => {
//     return getPercent(total / goal)
// }

// const SkiiDayCounterFunc = ({ total, backcountry, goal, powder }) => {
//     return (
//         <section>
//             <h1>Function</h1>
//             <div>
//                 <p>Total Days: {total}</p>
//             </div>
//             <div>
//                 <p>Powder Days: {powder}</p>
//             </div>
//             <div>
//                 <p>Backcountry Days: {backcountry}</p>
//             </div>
//             <div>
//                 <p>Goal Days: {calcGoalProgress(total, goal)}</p>
//             </div>
//         </section>
//     )
// }

// render(
//     <div>
//         <SkiiDayCounterClass
//             total={skiData.total}
//             powder={skiData.powder}
//             backcountry={skiData.backcountry}
//             goal={skiData.goal}
//         />

//         <SkiiDayCounterFunc
//             total={skiData.total}
//             powder={skiData.powder}
//             backcountry={skiData.backcountry}
//             goal={skiData.goal}
//         />
//     </div>
//     , document.getElementById("root"))


// import React from 'react'
// import { render } from 'react-dom'

// const Book = ({ title, author, pages }) => {
//     return (
//         <section>
//             <li>
//                 <h2>{title}</h2>
//                 <p>by: {author}</p>
//                 <p>pages: {pages}</p>
//             </li>
//         </section>
//     )
// }

// const Library = () => {
//     return (
//         <div>
//             <h1>Welcome to the Library</h1>
//             <ul>
//                 <Book title="The Sun Also Rises" author="Ernest Hemingway" pages={260} />
//                 <Book title="White Teeth" author="Zadie Smith" pages={480} />
//                 <Book title="Cat's Cradle" author="Kurt Vonnegut" pages={304} />
//             </ul>
//         </div>
//     )
// }

// render(
//     <Library />,
//     document.getElementById('root')
// )


// import React from 'react'
// import { render } from 'react-dom'

// let bookList = [
//     { 'title': "The Sun Also Rises", 'author': "Ernest Hemingway", 'pages': 260 },
//     { "title": "White Teeth", "author": "Zadie Smith", "pages": 480 },
//     { "title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304 }
// ]

// const Book = ({ title, author, pages }) => {
//     return (
//         <section>
//             <li>
//                 <h2>{title}</h2>
//                 <p>by: {author}</p>
//                 <p>pages: {pages} pages</p>
//             </li>
//         </section>
//     )
// }

// const Library = ({ books }) => {
//     return (
//         <div>
//             <h1>Welcome to the Library</h1>
//             <ul>
//                 {books.map(
//                     (book, i) =>
//                         <Book
//                             key={i}
//                             title={book.title}
//                             author={book.author}
//                             pages={book.pages}
//                         />
//                 )}
//             </ul>
//         </div>
//     )
// }

// render(
//     <Library books={bookList} />,
//     document.getElementById('root')
// )


// import React, { Component } from 'react'
// import { render } from 'react-dom'

// let bookList = [
//     { 'title': "The Sun Also Rises", 'author': "Ernest Hemingway", 'pages': 260 },
//     { "title": "White Teeth", "author": "Zadie Smith", "pages": 480 },
//     { "title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304 }
// ]

// const Book = ({ title, author, pages, freeBookmark }) => {
//     return (
//         <section>
//             <li>
//                 <h2>{title}</h2>
//                 <p>by: {author}</p>
//                 <p>pages: {pages} pages</p>
//                 <p>Free Bookmark Today : {freeBookmark ? "yes" : "no"}</p>
//             </li>
//         </section>
//     )
// }

// const Hiring = () =>
//     <div>
//         <p>The Library is hiring. Go to wwww.library.com/jobs for more.</p>
//     </div>

// const NotHiring = () =>
//     <div>
//         <p>The Library is not hiring. Check back later for more info.</p>
//     </div>

// class Library extends Component {
//     // constructor() {

//     // }

//     // getDerivedStateFromProps() {

//     // }

//     // shouldComponentUpdate() {

//     // }

//     // render() {

//     // }

//     // getSnapshotBeforeUpdate() {

//     // }

//     componentDidMount() {
//         console.log("The component is now mounted")
//     }

//     componentDidUpdate() {
//         console.log("The component just updated")
//     }

//     componentWillUnmout() {
//         console.log("The componet will unmount")
//     }

//     // constructor(props) {
//     //     super(props)
//     //     this.state = {
//     //         open: true
//     //     }
//     //     this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
//     // }

//     // toggleOpenClosed() {
//     //     this.setState({
//     //         open: !this.state.open
//     //     })
//     // }


//     state = {
//         open: false,
//         freeBookmark: true,
//         hiring: true
//     }

//     toggleOpenClosed = () => {
//         this.setState(prevState => ({
//             open: !prevState.open
//         }))
//     }

//     render() {
//         // const books = this.props.books
//         const { books } = this.props
//         return (
//             <div>
//                 <h1>Welcome to the Library</h1>

//                 <h3>The Library is {this.state.open ? "open" : "closed"}</h3>

//                 {this.state.hiring ? <Hiring /> : <NotHiring />}

//                 <button onClick={this.toggleOpenClosed}>Change status</button>

//                 <ul>
//                     {books.map(
//                         (book, i) =>
//                             <Book
//                                 key={i}
//                                 title={book.title}
//                                 author={book.author}
//                                 pages={book.pages}
//                                 freeBookmark={this.state.freeBookmark}
//                             />
//                     )}
//                 </ul>
//             </div>
//         )
//     }
// }

// render(
//     <Library books={bookList} />,
//     document.getElementById('root')
// )


// import React, { Component } from 'react'
// import { render } from 'react-dom'
// import PropTypes from 'prop-types'

// let bookList = [
//     { 'title': "Hunger", 'author': "Roxane Gay", 'pages': 320 },
//     { 'title': "The Sun Also Rises", 'author': "Ernest Hemingway", 'pages': 260 },
//     { "title": "White Teeth", "author": "Zadie Smith", "pages": 480 },
//     { "title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304 }
// ]

// const Book = ({ title = "No Title Provided", author = "No Author", pages = 0, freeBookmark }) => {
//     return (
//         <section>
//             <li>
//                 <h2>{title}</h2>
//                 <p>by: {author}</p>
//                 <p>pages: {pages} pages</p>
//                 <p>Free Bookmark Today : {freeBookmark ? "yes" : "no"}</p>
//             </li>
//         </section>
//     )
// }

// const Hiring = () =>
//     <div>
//         <p>The Library is hiring. Go to wwww.library.com/jobs for more.</p>
//     </div>

// const NotHiring = () =>
//     <div>
//         <p>The Library is not hiring. Check back later for more info.</p>
//     </div>

// class Library extends Component {

//     static defaultProps = {
//         books: [
//             { "title": "Tahoe Tales", "author": "Chet Whitley", "pages": 1000 }
//         ]
//     }

//     componentDidMount() {
//         console.log("The component is now mounted")
//         this.setState({ loading: true })
//         fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
//             .then(data => data.json())
//             .then(data => this.setState({ data, loading: false }))
//     }

//     state = {
//         open: false,
//         freeBookmark: true,
//         hiring: true,
//         data: [],
//         loading: false
//     }

//     toggleOpenClosed = () => {
//         this.setState(prevState => ({
//             open: !prevState.open
//         }))
//     }

//     render() {
//         // const books = this.props.books
//         const { books } = this.props
//         return (
//             <div>
//                 <h1>Welcome to the Library</h1>

//                 <h3>The Library is {this.state.open ? "open" : "closed"}</h3>

//                 {this.state.hiring ? <Hiring /> : <NotHiring />}

//                 {
//                     this.state.loading
//                         ? "loading..."
//                         : <div>
//                             {this.state.data.map((product, i) => {
//                                 return (
//                                     <div key={product.id}>
//                                         <h3>Library Product of the Week!</h3>
//                                         <h4>{product.name}</h4>
//                                         <img src={product.image} alt={product.image_title} height={100} />
//                                         <br />
//                                         <big>Price: {product.price}</big>
//                                         <p>{product.description}</p>
//                                     </div>
//                                 )
//                             })}
//                         </div>
//                 }

//                 <button onClick={this.toggleOpenClosed}>Change status</button>

//                 <ul>
//                     {books.map(
//                         (book, i) =>
//                             <Book
//                                 key={i}
//                                 title={book.title}
//                                 author={book.author}
//                                 pages={book.pages}
//                                 freeBookmark={this.state.freeBookmark}
//                             />
//                     )}
//                 </ul>
//             </div>
//         )
//     }
// }

// Library.propTypes = {
//     books: PropTypes.array
// }

// Book.propTypes = {
//     title: PropTypes.string,
//     author: PropTypes.string,
//     pages: PropTypes.number,
//     freeBookmark: PropTypes.bool
// }

// render(
//     <Library books={bookList} />,
//     // <Library />,
//     document.getElementById('root')
// )


// import React, { Component } from 'react'
// import { render } from 'react-dom'

// class FavoriteColorForm extends Component {

//     state = { value: '' }

//     newColor = e => {
//         this.setState({ value: e.target.value })
//     }

//     submit = e => {
//         console.log("New Color: $(this.state.value)")
//         e.preventDefault()
//     }

//     render() {
//         return (
//             <form onSubmit={this.submit}>
//                 <label>Favorite Color:
//                     <input type="color"
//                         onChange={this.newColor}
//                     />
//                 </label>
//                 <button>Submit</button>
//             </form>
//         )
//     }
// }

// render(
//     <FavoriteColorForm />,
//     document.getElementById('root')
// )


import React from 'react'
import { render } from 'react-dom'
import Library from './Library'

let bookList = [
    { 'title': "Hunger", 'author': "Roxane Gay", 'pages': 320 },
    { 'title': "The Sun Also Rises", 'author': "Ernest Hemingway", 'pges': 260 },
    { "title": "White Teeth", "author": "Zadie Smith", "pages": 480 },
    { "title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304 }
]

render(
    <Library books={bookList} />,
    document.getElementById('root')
)
