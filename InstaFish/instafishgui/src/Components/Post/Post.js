import React from 'react';
import {Row, Col, Image} from "react-bootstrap";
import classes from './Post.module.css';
import Wrapper from "../UI/Wrapper/Wrapper";

const Post = (props) => (
    <Col lg={12}>
        <Wrapper>
            <Row className={classes.Section}>
                <Col className={classes.Author}>
                    <Image
                        src="https://vignette.wikia.nocookie.net/avatar/images/3/32/La.png/revision/latest?cb=20140124171520"
                        roundedCircle/> Mike Kowalski
                </Col>
            </Row>

            <Row className={classes.Section}>
                <Col lg={9} className={classes.TitleCol}>
                    <div className={classes.Title}>
                        The Big Daddy
                    </div>
                </Col>
                <Col lg={3} className={classes.MoreCol}>
                    <div className={classes.More}>
                        more +
                    </div>
                </Col>
            </Row>

            <Row className={classes.Section}>
                <Col lg={6}>
                    <Image className={classes.Image}
                           src="https://s3.amazonaws.com/images.gearjunkie.com/uploads/2018/02/Maddie-Brenneman-_PC-Nick-Kelley-%40ngkelley.jpg"
                           fluid/>
                </Col>
                <Col lg={6}>
                    <div className={classes.Info}>
                        <p className={classes.Important}>Carp: 30 kg, 112 cm </p>
                        <p className={classes.Important}>Poland, Besko </p>
                        <p className={classes.Important}>Besko lake </p>
                        <p className={classes.Important}>2018-03-18, 17:50 </p>
                        <hr/>
                        <p className={classes.Important}>Fishing rod</p>
                        • Nash H-Gun Retract
                        <p className={classes.Important}>Fishing reel</p>
                        • Daiwa Black Widow Stalker
                        <p className={classes.Important}>Hook</p>
                        • VMC Mystic Carp 7026 Long Curve Shank
                        <p className={classes.Important}>Line</p>
                        • Prologic LM Pro Chod Mono 0,57 mm
                        <p className={classes.Important}>Bait</p>
                        • Karel Nikl Puffa Bread Krill Berry
                        <p className={classes.Important}>Leader</p>
                        • Chod-Rig
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