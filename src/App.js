import React, { useEffect, useState } from "react";
import {
  Col,
  Row,
  Normalize,
  Grid,
  Typography,
  Button
} from "@smooth-ui/core-sc";

import Pokemon from "./components/Pokemon";
import SearchInput from "./components/SeachInput";
import PokeData from "./containers/PokeData";

export function sleep(duration) {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
}

const ExpensiveTree = React.lazy(async () => {
  await sleep(1000);
  return import("./containers/Expensive");
});

function PokemonTree({ hidden }) {
  const [query, changeQuery] = useState("fire");

  return (
    <>
      <Typography variant="display-1">Pokemon Types</Typography>
      <SearchInput value={query} onChange={e => changeQuery(e.target.value)} />
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
    </>
  );
}

function App() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    document.title = "Workshop - React Europe";
  }, []);

  return (
    <>
      <Normalize />
      <Grid py={20}>
        <>
          <Button onClick={() => setActive(0)}>First</Button>
          <Button onClick={() => setActive(1)}>Second</Button>
          <Button onClick={() => setActive(2)}>Third</Button>
        </>
        <React.Suspense fallback={<div>Loading</div>}>
          {active === 0 && <ExpensiveTree number={0} />}
          {active === 1 && <PokemonTree />}
          {active === 2 && <ExpensiveTree number={2} />}
        </React.Suspense>
      </Grid>
    </>
  );
}

export default App;
