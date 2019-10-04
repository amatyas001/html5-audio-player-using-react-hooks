import React, { useEffect, useContext } from 'react'
// import { Link } from '@reach/router'
import { ThemeProvider } from '@xstyled/styled-components'

import theme from './theme'
import { Store } from './store'

// import { themeName } from './utils'

// import { Body, Navbar, Header, Card, Button } from './templates/index'
import { Body, Header, Card } from './templates/index'

export default function App(props) {
  const { state } = useContext(Store)

  useEffect(() => {
    if (state.selectedTheme === "default") {
      document.getElementsByTagName('body')[0].style.backgroundColor = "#dddddd"
    } else {
      document.getElementsByTagName('body')[0].style.backgroundColor = "#262626"
    }
  }, [state.selectedTheme])  

  // const updateTheme = () => {
  //   return dispatch({
  //     type: 'UPDATE_THEME',
  //     payload: state.selectedTheme === 'default' ? 'alt' : 'default'
  //   })
  // }

  return (
    <ThemeProvider theme={theme(state.selectedTheme)}>
      <Body>
        <div className="container">
          <Header>
            {/*<h1><Link to="/">HTML5 Audio Player Using React Hooks</Link></h1>

            <Navbar>
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <Button
                    onClick={updateTheme}>
                    Change Theme to {themeName(state.selectedTheme)}
                  </Button>
                </li>
              </ul>
            </Navbar>*/}

            <Card className="card">
              <div className="card-body">
                {/*<p>This example uses <a href="https://reactjs.org/docs/hooks-intro.html" rel="noopener noreferrer" target="_blank">React Hooks</a> together with the HTML5 audio tag to create an audio player.</p>

                <p>Run the following commands to run the project locally.</p>

                <p><em>Please note all songs used in this example remain the property their respective owners</em></p>

                <pre>
                  <p>git clone https://github.com/bronsondunbar/audio-player-using-react-hooks</p>

                  <p>npm install</p>

                  <p>npm start</p>
                </pre>*/}

                {props.children}
              </div>
            </Card>
          </Header>
        </div>
      </Body>
    </ThemeProvider>
  )
}
