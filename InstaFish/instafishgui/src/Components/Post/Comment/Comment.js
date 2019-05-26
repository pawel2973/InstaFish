import React, {Fragment, useState} from 'react';
import classes from "./Comment.module.css";
import {Button, Form, Image} from "react-bootstrap";
import TextareaAutosize from 'react-autosize-textarea';
import axios from "axios";


const PostComment = (props) => {

    const [content, setContent] = useState('');

    const handlePost = data => {
        // const headers = {Authorization: `JWT ${localStorage.getItem('token')}`};
        return (axios.post('/post/'+props.postId+'/comments', data, {headers:{Authorization: `JWT ${localStorage.getItem('token')}`}})
            .then(response => {
                console.log("OK");
                console.log(response);
            })
            .catch((error) => {
                console.log("Error");
                console.log(error);
            }));
    }

    return (<>
        <div className={classes.CommentWrite}>
            <Image
                src="https://cdn.pixabay.com/photo/2016/03/21/05/05/plus-1270001_960_720.png"
                roundedCircle/>
            <Form className={classes.CommentWrite__form}>
                <div className={classes.CommentWrite__form__inside}>
                    <TextareaAutosize
                        className={classes.CommentWrite__form__input}
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                        placeholder='Write a comment...'/>
                </div>
                <Button onClick={() => handlePost({user:props.user_id,content:content})}>Post</Button>
            </Form>
        </div>

        {props.comments.results ? props.comments.results.map((comment, i) => {
            console.log(comment)
            return (
                <Fragment key={i}>
                    <div className={classes.Comment}>
                        <div className={classes.Comment__image}>
                            <Image
                                src={comment.avatar}
                                roundedCircle/>
                            <button><i className="far fa-trash-alt"/></button>
                        </div>
                        <div className={classes.Comment__content}>
                            <a className={classes.Comment__author} href="/">{comment.first_name} {comment.last_name}</a>
                            {comment.content}
                        </div>
                    </div>
                </Fragment>
            )
        }) : null}


    </>)
};

export default PostComment;