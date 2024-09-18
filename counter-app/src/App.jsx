// React hook = Special function that allows functional components
//                         to use React features without writing class components 
//                         (useState, useEffect, useContext, useReducer, and more...)
//                          You can either use the built-in Hooks or combine them to build your own                

// useState() = A React hook that allows the creation of a stateful variable
//                       AND a setter function to update its value in the Virtual DOM.
//                       [name, setName]
// import Counter from "./Counter"

import Counter from './Counter.jsx';
function App() {
  return (<Counter />);
}
export default App;