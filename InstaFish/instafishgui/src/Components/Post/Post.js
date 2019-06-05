import React, {Component, Fragment} from 'react';
import {Row, Col, Image, Nav, Tab, Table, Button, Collapse, DropdownButton, Dropdown, Form} from "react-bootstrap";
import classes from './Post.module.css';
import Wrapper from "../UI/Wrapper/Wrapper";
import axios from "../../axios";
import TextareaAutosize from 'react-autosize-textarea';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import {Link} from "react-router-dom";


class Post extends Component {
    state = {
        isCommentOpen: false,
        isMoreNavActive: true,
        isDescriptionNavActive: true,
        likes: {},
        likesCount: 0,
        comments: [],
        commentsCount: 0,
        commentContent: '',
        isLiked: false,
        comment_next: ''
    };

    componentDidMount() {
        //get likes for every post
        const headers = {Authorization: `JWT ${localStorage.getItem('token')}`};
        axios
            .get('/post/' + this.props.postId + '/likes', {headers})
            .then(res => {
                // console.log(res.data);
                const isLiked = !!res.data.results.find(like => like.user === this.props.user_id);
                this.setState({
                    likes: res.data,
                    likesCount: res.data.count,
                    isLiked: isLiked
                });
            })
            .catch(error => {
                // console.log(error);
            });

        this.getPostsForComment()
    };

    getPostsForComment = (link) => {
        const headers = {Authorization: `JWT ${localStorage.getItem('token')}`};

        //get comments for every post
        if (link) {
            axios
                .get(this.state.comment_next, {headers})
                .then(res => {
                    this.setState({
                        comments: [...this.state.comments, ...res.data.results],
                        commentsCount: res.data.count,
                        comment_next: res.data.next

                    });
                }).catch(error => {
                // console.log(error)
            });
        } else {
            axios
                .get('/post/' + this.props.postId + '/comments', {headers})
                .then(res => {
                    this.setState({
                        comments: res.data.results,
                        commentsCount: res.data.count,
                        comment_next: res.data.next

                    });
                }).catch(error => {
                // console.log(error)
            });
        }
    }
    handleLikeBtn = () => {
        // this.setState({isLiked: !this.state.isLiked});
        //
        // console.log(this.props.user_id)
        const data = {
            user: this.props.user_id,
            isLiked: true,
            post: this.props.postId
        };
        !this.state.isLiked
            ?
            axios.post('/post/' + this.props.postId + '/likes', data, {headers: {Authorization: `JWT ${localStorage.getItem('token')}`}})
                .then(response => {
                    this.setState({
                        likesCount: this.state.likesCount + 1,
                        isLiked: true
                    })
                    // refresh component etc
                })
                .catch((error) => {
                    // console.log("Error");
                    // console.log(error);
                    // ayaya

                })
            :
            axios.delete('/post/' + this.props.postId + '/likes', {
                data: {user: this.props.user_id},
                headers: {Authorization: `JWT ${localStorage.getItem('token')}`}
            })
                .then(response => {
                    // refresh component etc
                    this.setState({
                        likesCount: this.state.likesCount - 1,
                        isLiked: false
                    })
                })
                .catch((error) => {
                    console.log(error);
                })
    };

    handleCommentPost = data => {
        // const headers = {Authorization: `JWT ${localStorage.getItem('token')}`};
        return (axios.post('/post/' + this.props.postId + '/comments', data, {
            headers:
                {Authorization: `JWT ${localStorage.getItem('token')}`}
        })
            .then(response => {
                // console.log('przed');
                // console.log(this.state.comments);
                this.setState({
                    comments: [response.data, ...this.state.comments],
                    commentsCount: this.state.commentsCount + 1,
                    commentContent: '',
                });
                // console.log('po');
                // console.log(this.state.comments)

            })
            .catch((error) => {
            }));
    };


    handleCommentDelete = data => {
        axios.delete('/profile/' + data.user + '/comments', {
            data: {id: data.id},
            headers: {Authorization: `JWT ${localStorage.getItem('token')}`}
        })
            .then(response => {
                this.setState({
                    comments: this.state.comments.filter(comment => comment.id !== data.id),
                    commentsCount: this.state.commentsCount - 1
                });
            })
            .catch((error) => {
                // console.log(error);
            })
    };

    moreComments = () => {
        this.getPostsForComment(this.state.comment_next)
    }

    /**
     * This method is responsible for displaying post navs.
     * If all props in specific nav is empty, nav will be hidden.
     */
    displayPostNavs = () => {
        if (!(this.props.fishingRod || this.props.fishingReel || this.props.fishingHook
            || this.props.fishingBait || this.props.fishingLine || this.props.fishingLeader)) {
            this.setState({isMoreNavActive: !this.state.isMoreNavActive});
        }

        if (!this.props.description) {
            this.setState({isDescriptionNavActive: !this.state.isDescriptionNavActive})
        }
    };

    componentWillMount() {
        this.displayPostNavs();
    }


    render() {
        let btnLikeStyle = "outline-primary custom-outline-btn";
        let islikedStyle = "far fa-thumbs-up";
        if (this.state.isLiked) {
            btnLikeStyle = "primary";
            islikedStyle += " " + classes.PostReactionsInformation__liked.toString();
        }

        return (
            <Col className={this.props.postColSize}>
                <Wrapper>
                    <Row className={classes.PostSection}>
                        <Col className={classes.Author}>
                            <Image
                                src={this.props.authorAvatar}
                                roundedCircle/>
                            <Link
                                to={"/profile/" + this.props.postOwner}>{this.props.postAuthor}
                            </Link>
                            <span>{this.props.createdAt}</span>
                            {this.props.user_id === this.props.postOwner ?
                                <DropdownButton
                                    alignRight
                                    title=""
                                    id="dropdown-menu-align-right"
                                    className={classes.BtnMore}
                                    variant="outline-primary"
                                >
                                    {/*//  No editing for now */}
                                    {/*// <Dropdown.Item eventKey="1"><i className="far fa-edit"/> Edit</Dropdown.Item>*/}
                                    {/*<Dropdown.Divider/>*/}
                                    <Dropdown.Item eventKey="1"
                                                   onClick={() => this.props.deletePostHandler(this.props.postId)}><i
                                        className="far fa-trash-alt"/> Delete</Dropdown.Item>
                                </DropdownButton>
                                : null}
                        </Col>
                    </Row>
                    <Row className={classes.PostSection}>
                        <Col lg={12}>
                            <div className={classes.Title}>
                                {this.props.postTitle}
                            </div>
                        </Col>
                    </Row>

                    <Row className={classes.PostSection}>
                        <Col lg={12}>
                            <Image className={classes.PostImage}
                                   src={this.props.fishPhoto}
                                   fluid/>
                        </Col>
                        <Col lg={12}>
                            <div className={classes.PostTab}>
                                <Tab.Container id="left-tabs-example" defaultActiveKey="basic">
                                    <Row>
                                        <Col xl={3} lg={4} sm={3} className={classes.PostTab__nav}>
                                            <Nav variant="pills" className="flex-column">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="basic">Basic</Nav.Link>
                                                </Nav.Item>
                                                {this.state.isMoreNavActive ?
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="more">More</Nav.Link>
                                                    </Nav.Item> : null}
                                                {this.state.isDescriptionNavActive ?
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="description">Description</Nav.Link>
                                                    </Nav.Item> : null}
                                            </Nav>
                                        </Col>

                                        <Col xl={9} lg={8} sm={9}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="basic">
                                                    <Table responsive>
                                                        <tbody>
                                                        <tr>
                                                            <td>
                                                                <i className="fas fa-fish"/>
                                                                <span
                                                                    className={classes.TxtData}>{this.props.fishName}</span>
                                                            </td>
                                                            <td>
                                                                <i className="fas fa-weight"/>
                                                                <span
                                                                    className={classes.TxtData}>{this.props.fishWeight} kg</span>
                                                                <br/>
                                                                <i className="fas fa-ruler-vertical"/>
                                                                <span
                                                                    className={classes.TxtData}>{this.props.fishLength} cm</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <i className="fas fa-globe"/>
                                                                <span
                                                                    className={classes.TxtData}>{this.props.fishingCountry}</span>
                                                            </td>
                                                            <td>
                                                                <i className="fas fa-flag"/>
                                                                <span
                                                                    className={classes.TxtData}>{this.props.fishingCity}</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <i className="fas fa-water"/>
                                                                <span
                                                                    className={classes.TxtData}>{this.props.fishingSpot}</span>
                                                            </td>
                                                            <td>
                                                                <i className="fas fa-clock"/>
                                                                <span
                                                                    className={classes.TxtData}>{this.props.fishingDate}</span>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </Table>
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="more">
                                                    <Table responsive>
                                                        <tbody>
                                                        {this.props.fishingRod ?
                                                            <tr>
                                                                <td>
                                                                        <span
                                                                            className={classes.TxtData}>Fishing rod</span>
                                                                </td>
                                                                <td>
                                                                    <span>{this.props.fishingRod}</span>
                                                                </td>
                                                            </tr>
                                                            : null}
                                                        {this.props.fishingReel ?
                                                            <tr>
                                                                <td>
                                                                    <span
                                                                        className={classes.TxtData}>Fishing reel</span>
                                                                </td>
                                                                <td>
                                                                    <span>{this.props.fishingReel}</span>
                                                                </td>
                                                            </tr> : null}
                                                        {this.props.fishingHook ?
                                                            <tr>
                                                                <td>
                                                                    <span className={classes.TxtData}>Hook</span>
                                                                </td>

                                                                <td colSpan="2">
                                                                    <span>{this.props.fishingHook}</span>
                                                                </td>
                                                            </tr> : null}
                                                        {this.props.fishingLine ?
                                                            <tr>
                                                                <td>
                                                                    <span className={classes.TxtData}>Line</span>
                                                                </td>
                                                                <td colSpan="2">
                                                                    <span>{this.props.fishingLine}</span>
                                                                </td>
                                                            </tr> : null}
                                                        {this.props.fishingBait ?
                                                            <tr>
                                                                <td>
                                                                    <span className={classes.TxtData}>Bait</span>
                                                                </td>
                                                                <td colSpan="2"><span>{this.props.fishingBait}</span>
                                                                </td>
                                                            </tr> : null}
                                                        {this.props.fishingLeader ?
                                                            <tr>
                                                                <td>
                                                                    <span className={classes.TxtData}>Leader</span>
                                                                </td>
                                                                <td colSpan="2">
                                                                    <span>{this.props.fishingLeader}</span>
                                                                </td>
                                                            </tr> : null}
                                                        </tbody>
                                                    </Table>
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="description">
                                                    {this.props.description}
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>
                            </div>

                            <div className={classes.PostReactionsInformation}>
                                <hr/>
                                <div className={classes.PostReactionsInformation__like}>
                                    <i className={islikedStyle}/>{this.state.likesCount}
                                </div>
                                <div className={classes.PostReactionsInformation__comment}>
                                    <i className="fas fa-comments"/>{this.state.commentsCount}
                                </div>
                                <hr/>
                            </div>

                            <div className={classes.PostReaction}>
                                <Button variant={btnLikeStyle}
                                        className={classes.PostReaction__Like}
                                        onClick={this.handleLikeBtn}>Like</Button>
                                <Button variant="outline-primary"
                                        className={classes.PostReaction__Comment}
                                        onClick={() => this.setState({isCommentOpen: !this.state.isCommentOpen})}
                                        aria-controls="collapse-comments"
                                        aria-expanded={this.state.isCommentOpen}>
                                    Comments</Button>
                            </div>

                            <div className={classes.PostComments}>
                                <Collapse in={this.state.isCommentOpen}>
                                    <div id="collapse-comments">

                                        <div className={classes.CommentWrite}>
                                            <Image
                                                src="https://cdn.pixabay.com/photo/2016/03/21/05/05/plus-1270001_960_720.png"
                                                roundedCircle/>
                                            <Form className={classes.CommentWrite__form}>
                                                <div className={classes.CommentWrite__form__inside}>
                                                    <TextareaAutosize
                                                        className={classes.CommentWrite__form__input}
                                                        value={this.state.commentContent}
                                                        onChange={(event) => this.setState({commentContent: event.target.value})}
                                                        placeholder='Write a comment...'/>
                                                </div>
                                                <Button onClick={() => this.handleCommentPost({
                                                    user: this.props.user_id,
                                                    content: this.state.commentContent
                                                })}>Post</Button>

                                            </Form>
                                        </div>
                                        {this.state.comments ? this.state.comments.map((comment, i) => {
                                            return (
                                                <Fragment key={i}>
                                                    <div className={classes.Comment}>
                                                        <div className={classes.Comment__image}>
                                                            <Image
                                                                src={comment.avatar}
                                                                title={"Posted at " + comment.created_at}
                                                                roundedCircle/>
                                                            {comment.user === this.props.user_id ?
                                                                <button
                                                                    onClick={() => this.handleCommentDelete(
                                                                        {user: this.props.user_id, id: comment.id})
                                                                    }>
                                                                    <i className="far fa-trash-alt"/>
                                                                </button>
                                                                : null}
                                                        </div>
                                                        <div className={classes.Comment__content}>
                                                            <a className={classes.Comment__author}
                                                               href={"/profile/" + comment.user}
                                                               >{comment.first_name} {comment.last_name}</a>
                                                            {comment.content}
                                                        </div>
                                                    </div>
                                                </Fragment>
                                            )
                                        }) : null}
                                        {this.state.comment_next ?
                                            <Button variant="secondary" size="sm" block
                                                onClick={this.moreComments}>More</Button> : null}

                                    </div>
                                </Collapse>
                            </div>
                        </Col>
                    </Row>
                </Wrapper>
            </Col>
        );
    }
}

export default withErrorHandler(Post, axios);