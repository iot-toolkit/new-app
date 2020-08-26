import React from "react";
import { handleExceptions, isObject } from "utils";
import Branch from "./Branch";

const renderRoots = (data, query, original) => {
  if (Array.isArray(data)) {
    return data.map((val, idx) => (
      <Root
        key={idx}
        query={query ? [...query, idx] : [idx]}
        data={val}
        original={original}
      >
        {val.description || handleExceptions(idx)}
      </Root>
    ));
  } else {
    return Object.keys(data).map((val, idx) => (
      <Root
        key={idx}
        query={query ? [...query, val] : [val]}
        data={handleExceptions(data[val])}
        original={original}
      >
        {val}
      </Root>
    ));
  }
};

function Root({ data, query, children, original }) {
  if (children && data)
    return (
      <Branch
        name={children}
        value={isObject(data) ? renderRoots(data, query) : data}
        query={query || []}
        original={original}
      />
    );
  else if (children) return <Branch query={query || []} name={children} />;
  else if (data)
    return isObject(data) ? (
      renderRoots(data, query, original)
    ) : (
      <Branch original={original} name={data} query={query || []} />
    );
}

Root.defaultProps = {
  data: undefined,
  query: [],
  children: undefined,
  original: false,
};

export default Root;
