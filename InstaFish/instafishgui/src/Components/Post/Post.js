import React from 'react';
import {Row, Col, Image, Nav, Tab, Table} from "react-bootstrap";
import classes from './Post.module.css';
import Wrapper from "../UI/Wrapper/Wrapper";

const Post = (props) => (
    <Col className={props.postColSize}>
        <Wrapper>
            <Row className={classes.Section}>
                <Col className={classes.Author}>
                    <Image
                        src="https://vignette.wikia.nocookie.net/avatar/images/3/32/La.png/revision/latest?cb=20140124171520"
                        roundedCircle/> {props.postAuthor}
                </Col>
            </Row>

            <Row className={classes.Section}>
                <Col lg={12}>
                    <div className={classes.Title}>
                        {props.postTitle}
                    </div>
                </Col>
            </Row>

            <Row className={classes.Section}>
                <Col lg={12}>
                    <Image className={classes.Image}
                           src={props.fishPhoto}
                           fluid/>
                </Col>
                <Col lg={12}>
                    <div className={classes.Info}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col lg={3} sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Basic</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">More</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Description</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col lg={9} sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <Table responsive>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <i className="fas fa-fish"/>&nbsp;
                                                        <span className={classes.Important}>{props.fishName}</span>
                                                    </td>
                                                    <td>
                                                        <i className="fas fa-weight"/>&nbsp;
                                                        <span className={classes.Important}>
                                                            {props.fishWeight} kg</span> <br/>
                                                        <i className="fas fa-ruler-vertical"/>&nbsp;
                                                        <span className={classes.Important}>
                                                            {props.fishLength} cm</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i className="fas fa-globe"/>&nbsp;
                                                        <span className={classes.Important}>
                                                            {props.fishingCountry}</span>
                                                    </td>
                                                    <td>
                                                        <i className="fas fa-flag"/>&nbsp;
                                                        <span className={classes.Important}>
                                                            {props.fishingCity}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i className="fas fa-water"/>&nbsp;
                                                        <span className={classes.Important}>{props.fishingSpot}</span>
                                                    </td>
                                                    <td>
                                                        <i className="fas fa-clock"/>&nbsp;
                                                        <span className={classes.Important}>{props.fishingDate}</span>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="second">
                                            <Table responsive>
                                                <tbody>
                                                <tr>
                                                    <td><span className={classes.Important}>Fishing rod</span>
                                                    </td>
                                                    <td><span>{props.fishingRod}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><span className={classes.Important}>Fishing reel</span>
                                                    </td>
                                                    <td><span
                                                    >{props.fishingReel}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><span className={classes.Important}>Hook</span></td>
                                                    <td colSpan="2"><span>{props.fishingHook}</span></td>
                                                </tr>
                                                <tr>
                                                    <td><span className={classes.Important}>Line</span></td>
                                                    <td colSpan="2"><span>{props.fishingLine}</span></td>
                                                </tr>
                                                <tr>
                                                    <td><span className={classes.Important}>Bait</span></td>
                                                    <td colSpan="2"><span>{props.fishingBait}</span></td>
                                                </tr>
                                                <tr>
                                                    <td><span className={classes.Important}>Leader</span></td>
                                                    <td colSpan="2">
                                                        <span>{props.fishingLeader}</span>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="third">
                                            {props.description}
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                    <div className={classes.LikeSection}>
                        <span className={classes.Comment}>12 <i className="fas fa-comments"></i></span>
                        <span className={classes.Like}>25 <i className="far fa-thumbs-up"></i></span>
                    </div>
                </Col>
            </Row>
        </Wrapper>
    </Col>
);

export default Post;