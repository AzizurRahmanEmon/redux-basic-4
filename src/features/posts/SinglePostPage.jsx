import React from 'react'
import { useSelector } from 'react-redux'
import { selectPostById } from './postsSlice'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButton from './ReactionButton'

const SinglePostPage = () => {
    const post = useSelector((state) => selectPostById(state, postId))

    if( !post ) {
        return (
            <section>
                <h2>Post not Found</h2>
            </section>
        )
    }
  return (
    <article>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p className='postCredit'>
            <PostAuthor userId={post.userId}/>
            <TimeAgo timestamp={post.date}/>
        </p>
        <ReactionButton post={post}/>
    </article>
  )
}

export default SinglePostPage