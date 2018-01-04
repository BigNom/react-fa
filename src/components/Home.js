import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system'

import withAuthorization from './withAuthorization'
import { db } from '../firebase'

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
    this.setState(() => ({ users: snapshot.val() }))
    );
  }
  render() {
    const { users } =this.state;
    return(
      <Container fluid style={{ lineHeight: '32px' }}>
      <Row>
        <Col lg={12}>
        <h1>Home Page</h1>
        <p>The Home page is accessible by every signed in user.</p>
  
        { !!users && <UserList users={users} />}
        </Col>
      </Row>

    </Container>
    );
  }
}

const UserList = ({ users }) =>
  <div>
  <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
    <div key={key}>{users[key].username}
      </div>)}
  </div>


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);