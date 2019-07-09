import * as React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import { HomePage, NotFoundPage } from './pages'
import { Router } from '@reach/router'

const Shell = styled.section`
  background: red;
`

const Main = styled.main`
  padding: 16px;
`

function App() {
  return (
    <Shell>
      <Main>
        <Router>
          <HomePage path="/" />
          <NotFoundPage default />
        </Router>
      </Main>
    </Shell>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
