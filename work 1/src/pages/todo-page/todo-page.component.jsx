import {Component} from 'react'
import './todo-page.styles.css'

class TodoPage extends Component {
    render() {
        return (
            <div className='todo-page'>
                <h1 className='todo-page-header lime-text accent-3'>Todo Page</h1>
                <p>Sorry page in now doesn`t complete</p>
                <img className='text' style={{width: '200px', heigth:'200px'} } src='https://assets-global.website-files.com/5c7e6a9e0899242e0da98296/5ee3957ff3efc1450ae4a42e_matt-voyce-gif-lockdown.gif' />
            </div>
        )
    }
}


export default TodoPage