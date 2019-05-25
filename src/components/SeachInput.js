import React from "react";
import { Input } from "@smooth-ui/core-sc";

export function SearchInput({ ...props }) {
  return (
    <Input
      placeholder="Type in..."
      width="100%"
      type="search"
      backgroundColor="transparent"
      {...props}
    />
  );
}

export default SearchInput;
