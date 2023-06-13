import { Component } from 'react'
import './note.styles.css'


class Note extends Component {
    render() {

       const {id, title, text, color}  = this.props.note
       const {onDelete} = this.props

        return (
            <div className="col s12 m6 l4 xl3">
                <div style={{backgroundColor: color}} className="card note">
                    <div className='delete-btn-container'>
                        <span
                        onClick={() => onDelete(id)}
                         className='delete-note'>X</span>
                    </div>
                    <div className="card-content white-text">
                        <span className="card-title">{title}</span>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Note



