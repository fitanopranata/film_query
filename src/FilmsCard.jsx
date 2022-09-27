import React from 'react';
import { Card } from 'react-bootstrap';

const FilmCard = ({ film: { imdbID, Year, Poster, Title, Type } }) => {
    return (
        <div className="cardOfFilm" key={imdbID}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} />
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text>
                        {Type}, {Year}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default FilmCard;