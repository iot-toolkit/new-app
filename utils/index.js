const exceptions = {
  "0": 0,
  false: false,
  true: true,
  null: null,
  undefined: undefined,
};

export const handleExceptions = (data) => {
  if (Object.values(exceptions).includes(data)) return String(data);
  return data;
};

export const isObject = (data) => {
  return typeof data === "object";
};

export const updateObjectUsingPath = (object, [...keys], value) => {
  var last = keys.pop();
  var _object = { ...object };
  keys.reduce((o, k) => o[k], _object)[last] = value;
  return _object;
};
