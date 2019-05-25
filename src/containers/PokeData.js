import { useDebounce, useAsyncResource } from "../customHooks";

export function PokeData({ query, children }) {
  const debounced = useDebounce(query, 200);
  const { pokemon = [] } = useAsyncResource(debounced);
  return children({ pokemon });
}

export default PokeData;
