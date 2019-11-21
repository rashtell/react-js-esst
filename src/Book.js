import React from 'react';

const Book = ({ title = "No Title Provided", author="No Author", pages=0, freeBookmark }) => {
    return (
        <section>
            <li>
                <h2>{title}</h2>
                <p>by: {author}</p>
                <p>pages: {pages} pages</p>
                <p>Free Bookmark Today : {freeBookmark ? "yes" : "no"}</p>
            </li>
        </section>
    )
}

export default Book