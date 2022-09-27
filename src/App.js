import React, { useState, useEffect } from 'react';
import FilmsCard from './FilmsCard'
import './App.css';
import { Container, Button, InputGroup, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL = 'http://www.omdbapi.com?apikey=8fa8f4d6';

const App = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const searchFilms = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setFilms(data.Search);
    setLoading(true);
  }

  useEffect(() => {
    searchFilms("");
  }, []);


  return (
    <div className="app">
      <h1>Films Query</h1>
      <Container fluid="md">
        <InputGroup className="searchComponent">
          <Form.Control
            placeholder="Type to search"
            value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button variant="outline-primary" id="button-addon2" onClick={() => searchFilms(searchQuery)}>
            Search
          </Button>
        </InputGroup>
      </Container>


      {films?.length > 0 ? (
        <div className="container">
          {films.map((film) => (
            <FilmsCard film={film} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Films Found</h2>
        </div>
      )}
    </div>
  );
}


export default App;
