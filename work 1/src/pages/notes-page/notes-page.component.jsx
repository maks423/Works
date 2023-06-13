import {Component} from 'react'
import NotesApp from '../../components/notes-app/notes-app.component';
import './notes-page.styles.css'

class NotesPage extends Component {
    render() {
        return (
            <div className='notes-page'>
                <h1 className='notes-page-header lime-text accent-3'>Notes Page</h1>
                <img className='text' style={{width: '100px', heigth:'100px', position: 'absolute', top: '100px', left: '100px'} } src='https://media.tenor.com/C56y6_iHzA0AAAAi/notes-write.gif' />
                <img className='text' style={{width: '100px', heigth:'100px', position: 'absolute', top: '100px', right: '100px'} } src='https://media.tenor.com/C56y6_iHzA0AAAAi/notes-write.gif' />
                <NotesApp/>
            </div>
        )
    }
}


export default NotesPage;