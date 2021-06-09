import React from 'react'
import altphoto from '../assets/dummy-user.png'
import { Form, Button, Card, Alert } from "react-bootstrap"
import './UserCard.css'
export default function UserCard(props) {

    return (
        <div className="userCard">
            <Card style={{ alignSelf: "flex-start", borderWidth: "1px", borderRadius: "5%", borderColor: "#FFF", backgroundColor: "transparent", display: 'flex', justifySelf: 'center', alignSelf: "center", width: "300px" }}>

                <Card.Body>
                    <Form>
                        <img className="round" src={props.userData.photoURL ? props.userData.photoURL.replace('=s96', '=s150') : altphoto} alt="UserPhoto" />
                        <h1>{props.userData.name}</h1>
                        <Button onClick={props.logout}>Logout</Button>
                    </Form>

                </Card.Body>
            </Card>

        </div >

    )
}
