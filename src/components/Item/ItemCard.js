import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import './ItemCard.css'

export const ItemCard = ({ item }) => {
    const { imgUrl, brand, model, price, id } = item;
    return (
        <div>
            <Container>
                <Card className='card-container border-0'>
                    <Card.Img className='card-img me-3' src={imgUrl} />
                    <Card.Body className='card-body'>
                        <Card.Text><b>{brand}</b></Card.Text>
                        <Card.Text><b>Modelo:</b> {model}</Card.Text>
                        <Card.Text>
                            {price ? (<div className='card-price'><b>Precio:&nbsp; </b> <div> {price} $</div></div>)
                                : (<b>Precio no disponible</b>)}
                        </Card.Text>
                        <Link to={`/${id}`}>Ver más...</Link>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
