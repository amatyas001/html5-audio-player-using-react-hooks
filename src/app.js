import React, { useContext, useState, useEffect } from 'react'
import { Link } from '@reach/router'

import { Store } from './store'

import { Body, Navbar, Header, Card, Dropdown, DropdownItem } from './templates/index'

import swatchSvg from './assets/svg/swatch.svg'
import swatchAltSvg from './assets/svg/swatch.alt.svg'

export default function App(props) {
  const { dispatch, state } = useContext(Store)
  const { selectedTheme } = state
  const [ themes, toggleThemeOptions ] = useState(false)

  useEffect(() => {
    if (selectedTheme === "default") {
      document.getElementsByTagName('body')[0].style.backgroundColor = "#dddddd"
    } else {
      document.getElementsByTagName('body')[0].style.backgroundColor = "#262626"
    }
  }, [selectedTheme])

  const themeOptions = () => {
    toggleThemeOptions(!themes)
  }

  const updateTheme = () => {
    return dispatch({
      type: 'UPDATE_THEME',
      payload: selectedTheme === 'default' ? 'alt' : 'default'
    })
  }

  return (
    <Body selectedTheme={selectedTheme}>
      <div className="container">
        <Header selectedTheme={selectedTheme}>
          <h1><Link to="/">HTML5 Audio Player Using React Hooks</Link></h1>

          <Navbar selectedTheme={selectedTheme}>
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <div
                  className="btn-group"
                  onClick={() => themeOptions()}>
                  <button
                    type="button"
                    className="btn dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true">
                    <img
                      src={selectedTheme === 'default' ? swatchSvg : swatchAltSvg}
                      alt="Change theme"
                      style={{ width: '20px' }} />
                  </button>
                  <Dropdown
                    selectedTheme={selectedTheme}
                    navBar={true}
                    className={`dropdown-menu ${themes ? 'show' : ''}`}>
                    <DropdownItem
                      selectedTheme={selectedTheme}
                      className={`"dropdown-item" ${selectedTheme === 'default' ? 'active' : ''}`}
                      onClick={updateTheme}>
                      Default
                    </DropdownItem>
                    <DropdownItem
                      selectedTheme={selectedTheme}
                      className={`"dropdown-item" ${selectedTheme === 'alt' ? 'active' : ''}`}
                      onClick={updateTheme}>
                      Dark
                    </DropdownItem>
                  </Dropdown>
                </div>
              </li>
            </ul>
          </Navbar>

          <Card
            selectedTheme={selectedTheme}
            className="card">
            <div className="card-body">
              <p>This example uses <a href="https://reactjs.org/docs/hooks-intro.html" rel="noopener noreferrer" target="_blank">React Hooks</a> together with the HTML5 audio tag to create an audio player.</p>

              <p>Run the following commands to run the project locally.</p>

              <p><em>Please note all songs used in this example remain the property their respective owners</em></p>

              <pre>
                <p>git clone https://github.com/bronsondunbar/html5-audio-player-using-react-hooks</p>

                <p>npm install</p>

                <p>npm start</p>
              </pre>

              {props.children}
            </div>
          </Card>
        </Header>
      </div>
    </Body>
  )
}
