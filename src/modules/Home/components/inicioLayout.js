import React from 'react'
import { List, ListItem, Row, Col, Text } from 'native-base'
import { Image } from 'react-native'

function InicioLayout(props) {
    return (
        <List>
            <ListItem>
                <Row>
                    <Col>
                        <Image style={{ width: 150, height: 150 }} source={{ uri: props.datos.medium_cover_image}} />
                    </Col>
                    <Col>
                        <Text>{props.datos.title_long}</Text>
                        <Text>{props.datos.year}</Text>
                        <Text>{props.datos.rating}</Text>
                        <Text>{props.datos.synopsis.substring(0, 100)}...</Text>
                    </Col>
                </Row>
            </ListItem>
        </List>
    )

}
export default InicioLayout