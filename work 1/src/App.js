import './App.css';
import {Component} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutPage from './pages/about-page/about-page-component';
import NotesPage from './pages/notes-page/notes-page.component';
import TodoPage from './pages/todo-page/todo-page.component';
import NotFoundPage from './pages/not-found-page/not-found-page.component';
import Menu from './components/menu/menu.component';


class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <Menu/>
          <div className='app-container'>
            <Routes>
              <Route path='about' element={<AboutPage />} />
              <Route path='notes' element={<NotesPage />} />
              <Route path='todo' element={<TodoPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </div>
        </Router>
      </div>
    )
  }
}


export default App;