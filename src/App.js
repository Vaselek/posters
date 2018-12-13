import React, { Component } from 'react';
import './App.css';


const postersData = [
    {
        id: 1,
        title: 'The silence of the lambs',
        imgSrc: 'https://www.kwikkopy.com.au/wp-content/uploads/2014/12/1.png',
        issuedAt: '1991'
    },
    {
        id: 2,
        title: 'Martian',
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/A1%2BFw58qbDL._SY606_.jpg',
        issuedAt: '2015'
    },
    {
        id: 3,
        title: 'Bohemian Rhapsody',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Bohemian_Rhapsody_poster.png/220px-Bohemian_Rhapsody_poster.png',
        issuedAt: '2018'
    }
];

const Poster = (props) => {
  return (
      <div className="card">
          <img src={props.imgSrc} alt="Avatar" />
              <div className="container">
                  <h4><b>{props.title}</b></h4>
                  <p>Issued at: {props.issuedAt}</p>
              </div>
      </div>
  );
};

const posters = postersData.map((poster) => {
    return <Poster imgSrc={poster.imgSrc} title={poster.title} issuedAt={poster.issuedAt}/>
});

const App = () => {
  return (
      <div>
          {posters}
      </div>
  );
};

export default App;
