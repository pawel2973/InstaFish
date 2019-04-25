import React from 'react';
import {Row, Col, Image} from "react-bootstrap";
import classes from './Post.module.css';

const Post = (props) => (
    <Col lg={12}>
        <div className={classes.Post}>
            <Row className={classes.Row}>
                <Col className={classes.Author}>
                    <Image
                        src="https://vignette.wikia.nocookie.net/avatar/images/3/32/La.png/revision/latest?cb=20140124171520"
                        roundedCircle/> Mike Kowalski
                </Col>
            </Row>

            <Row className={classes.Row}>
                <Col lg={9} className={classes.TitleCol}>
                    <div className={classes.Title}>
                        The Big Daddy
                    </div>
                </Col>
                <Col lg={3} className={classes.MoreCol}>
                    <div className={classes.More}>
                        More...
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <Image className={classes.PostImage}
                        src="https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/15/2017/08/PC1-630x420.jpg"
                        fluid/>

                    <div className={classes.LikeSection}>
                        <span className={classes.SpanLeft}>12 <i className="fas fa-comments"></i></span>
                        <span className={classes.SpanRight}>25 <i className="far fa-thumbs-up"></i></span>
                    </div>
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
                </Col>
            </Row>
        </div>
    </Col>
);

export default Post;