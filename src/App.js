import React from 'react'
import { BrowserRouter as Router , Route } from 'react-router-dom'
import Chat from './components/chat/Chat'
import Join from './components/join/Join'

const App = () => {
    return (
        <Router>
            <Route path="/" exact component={Join}></Route>
            <Route path="/chat" exact component={Chat}></Route>
        </Router>
    )
}

export default App
