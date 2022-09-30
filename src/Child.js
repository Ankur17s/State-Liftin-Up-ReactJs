import React from 'react';

function Child(props) {
  const name = {name: "ankur", email: "ankur@mail.com"}
  return (
    <div>
      <h1>Send Data Child to Parent</h1>
      <button onClick={() => props.data(name)}>Click Me</button>
    </div>
  );
}

export default Child;
