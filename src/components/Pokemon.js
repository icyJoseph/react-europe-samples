import React from "react";

import Card from "./Card";

const idFromUrl = url => {
  const [id] = url.split("/").slice(-2, -1);
  return id;
};

const spriteUrl = id =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

export function Pokemon({ url, name }) {
  return (
    <Card
      style={{
        height: 200,
        backgroundImage: `url(${spriteUrl(idFromUrl(url))})`
      }}
    >
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Pokemon;
