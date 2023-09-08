// BlogPosts.js

import React, { useEffect, useState } from "react";
import client from "./sanity";
import SanityBlockContent from "@sanity/block-content-to-react";

function BlogPosts() {
    const [post, setPosts] = useState([]);

    function formatDate(date) {
        return new Date(date).toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }
}

useEffect(() => {
    client
    .fetch(
        `*[_type == "post"] {
            title,
            body,
            "authorName": author->name,
            publishedAt
        }`
    )
    .then((data) => setPosts(data))
    .catch((error) => console.error('Error fetching data:', error));
})

return (
    <>
    <h1 className="hero">Leia o Nosso Blog</h1>
    <div className="blog-container">
        {post.map((post) => (
            <div className="card" key={post.title}>
                <div className="main-content">
                    <div className="header">
                        <span>Artigo para ler</span>
                        <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    <p className="heading">{post.title}</p>
                    <BlockContent blocks={post.body} />
                </div>
                <div className="footer">By {post.authorName}</div>
                </div>
        ))}
    </div>
    </>
);


export default BlogPosts;