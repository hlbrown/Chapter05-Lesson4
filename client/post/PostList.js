import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Post from './Post'

export default function PostList (props) {
    return (
        <div style={{marginTop: '24px'}}>
            {props.posts.map((items, i) => {
                return <Post post={item} key={i}
                                    onRemove={props.removeUpdate}/>
            })
            }
        </div>
    )
}
PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  removeUpdate: PropTypes.func.isRequired
}
export default PostList