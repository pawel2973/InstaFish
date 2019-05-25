import React, {Component} from 'react';
import {Row, Col, Image, Nav, Tab, Table, Button, Collapse, Form, DropdownButton, Dropdown} from "react-bootstrap";
import classes from './Post.module.css';
import Wrapper from "../UI/Wrapper/Wrapper";
import TextareaAutosize from 'react-autosize-textarea';

class Post extends Component {
    state = {
        isCommentOpen: false,
        isMoreNavActive: true,
        isDescriptionNavActive: true,
        isLiked: false //TESTING PURPOSE
    };

    handleLikeBtn = () => {
        this.setState({isLiked: !this.state.isLiked});
        //TODO POST
    };

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
        if (this.state.isLiked) {
            btnLikeStyle = "primary";
        }

        return (
            <Col className={this.props.postColSize}>
                <Wrapper>
                    <Row className={classes.PostSection}>
                        <Col className={classes.Author}>
                            <Image
                                src="https://vignette.wikia.nocookie.net/avatar/images/3/32/La.png/revision/latest?cb=20140124171520"
                                roundedCircle/>
                            <a href="/">{this.props.postAuthor}</a>
                            <span>April 30 at 2:32 PM</span>
                            <DropdownButton
                                alignRight
                                title=""
                                id="dropdown-menu-align-right"
                                className={classes.BtnMore}
                                variant="outline-primary"
                            >
                                <Dropdown.Item eventKey="1"><i className="far fa-edit"></i> Edit</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item eventKey="2"><i className="far fa-trash-alt"></i> Delete</Dropdown.Item>
                            </DropdownButton>
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
                                    <i className="far fa-thumbs-up"></i>25
                                </div>
                                <div className={classes.PostReactionsInformation__comment}>
                                    <i className="fas fa-comments"></i>12
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
                                                src="https://vignette.wikia.nocookie.net/avatar/images/3/32/La.png/revision/latest?cb=20140124171520"
                                                roundedCircle/>
                                            <Form className={classes.CommentWrite__form}>
                                                <div className={classes.CommentWrite__form__inside}>
                                                    <TextareaAutosize
                                                        className={classes.CommentWrite__form__input}
                                                        placeholder='Write a comment...'/>
                                                </div>
                                                <Button>Post</Button>
                                            </Form>
                                        </div>
                                        <div className={classes.Comment}>
                                            <div className={classes.Comment__image}>
                                                <Image
                                                    src="https://vignette.wikia.nocookie.net/avatar/images/3/32/La.png/revision/latest?cb=20140124171520"
                                                    roundedCircle/>
                                                <button><i className="far fa-trash-alt"></i></button>
                                            </div>
                                            <div className={classes.Comment__content}>
                                                <a className={classes.Comment__author} href="/">Super Wedkarz</a>
                                                .
                                            </div>
                                        </div>
                                        <div className={classes.Comment}>
                                            <div className={classes.Comment__image}>
                                                <Image
                                                    src="https://vignette.wikia.nocookie.net/avatar/images/3/32/La.png/revision/latest?cb=20140124171520"
                                                    roundedCircle/>
                                                <button><i className="far fa-trash-alt"></i></button>
                                            </div>
                                            <div className={classes.Comment__content}>
                                                <a className={classes.Comment__author} href="/">Super Wedkarz</a>Lorem
                                                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo
                                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                                esse cillum dolore eu fugiat nulla pariatur
                                            </div>
                                        </div>
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

export default Post;