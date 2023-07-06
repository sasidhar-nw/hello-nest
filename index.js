export const sayHello = (personName) => {
  console.log(`Hello ${personName}`);
};

export const getName = (personName) => {
  return `Hello ${personName}`;
};

export const getDate = () => {
  return new Date().toLocaleDateString();
};

export const getTime = () => {
  return new Date().toLocaleTimeString();
};
