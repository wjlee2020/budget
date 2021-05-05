import React from 'react'
import { Header } from 'semantic-ui-react'

export default function MainHeader({ title, type = "h1" }) {
    return (
        <Header as={type}>{title}</Header>
    )
}