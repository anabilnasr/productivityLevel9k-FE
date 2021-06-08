import React from 'react'
import altphoto from '../assets/dummy-user.png'
import { Container } from 'react-bootstrap'
import './UserCard.css'
export default function UserCard(props) {

    return (
        <Container>
            <img className="round" src={props.userData.photoURL ? props.userData.photoURL.replace('=s96', '=s150') : altphoto} alt="UserPhoto" />
            <h1>{props.userData.name}</h1>
            <button onClick={props.logout}>Logout</button>
        </Container>
    )
}
