import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Post from './Components/Post/Post';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function App() {
    return (
        <Layout>
            <Container>
                <Row>
                    <Post/>
                    <Post/>
                </Row>
            </Container>
        </Layout>
    );
}

export default App;
