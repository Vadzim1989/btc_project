import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App'
import FindContext from './context'

// make search
function Main() {
  const [isFind, setIsFind] = React.useState(null);
  return (
    <FindContext.Provider value={{isFind, setIsFind}}>
      <App/>
    </FindContext.Provider>
  )
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);