import React from 'react'
import { Card } from 'react-bootstrap'
export default function TaskCard(props) {
    return (
        <div>
            <Card style={{ maxWidth: "480px" }}>
                <h1>{props.data.title}</h1>
                <p>{props.data.description}</p>
            </Card>
        </div>
    )
}
