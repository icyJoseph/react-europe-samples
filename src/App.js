import React, { useEffect, useState } from "react";
import { Col, Row, Normalize, Grid, Typography } from "@smooth-ui/core-sc";

import Pokemon from "./components/Pokemon";
import SearchInput from "./components/SeachInput";

import PokeData from "./containers/PokeData";

function App() {
  const [query, changeQuery] = useState("");

  useEffect(() => {
    document.title = "Workshop - React Europe";
  }, []);

  return (
    <>
      <Normalize />
      <Grid py={20}>
        <Typography variant="display-1">Pokemon Types</Typography>
        <SearchInput
          value={query}
          onChange={e => changeQuery(e.target.value)}
        />
        <p>Search: {query}</p>
        <Row>
          <PokeData query={query}>
            {({ pokemon }) =>
              pokemon.slice(0, 25).map(({ pokemon: { name, ...rest } }) => (
                <Col key={name} my={1} xs={12} md={6}>
                  <Pokemon {...rest} name={name} />
                </Col>
              ))
            }
          </PokeData>
        </Row>
      </Grid>
    </>
  );
}

export default App;
