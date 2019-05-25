import React, { useEffect, useState } from "react";
import { Col, Row, Normalize, Grid, Typography } from "@smooth-ui/core-sc";

import Pokemon from "./components/Pokemon";
import SearchInput from "./components/SeachInput";
import { useDebounce, useAsyncResource } from "./customHooks";

function App() {
  const [query, changeQuery] = useState("");
  const debounced = useDebounce(query, 200);
  const { pokemon = [] } = useAsyncResource(debounced);

  useEffect(() => {
    document.title = "Workshop - React Europe";
  }, []);

  console.log(pokemon);

  return (
    <>
      <Normalize />
      <Grid py={20}>
        <Typography variant="display-1">Pokemon Types</Typography>
        <SearchInput
          value={query}
          onChange={e => changeQuery(e.target.value)}
        />
        <p>Search: {debounced}</p>
        <Row>
          {pokemon.slice(0, 25).map(({ pokemon: { name, ...rest } }) => (
            <Col key={name} my={1} xs={12} md={6}>
              <Pokemon {...rest} name={name} />
            </Col>
          ))}
        </Row>
      </Grid>
    </>
  );
}

export default App;
