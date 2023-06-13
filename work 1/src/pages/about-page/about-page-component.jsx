import { Component} from 'react'
import './about-page.styles.css'


class AboutPage extends Component {
    render() {
        return(
            <div className='about-page'>
                <h1 className='about-page-header lime-text accent-3'>About page</h1>
                <img className='text' style={{width: '100px', heigth:'100px'} } src='https://media.tenor.com/C56y6_iHzA0AAAAi/notes-write.gif' />
                <p className='text'>Hello this a simple sites for create notes</p>
                <p className='text'>You can create notes, choose TITLE, TEXT, COLOR</p>
                <p className='text'>In future we upgrade this sites for better experience</p>
            </div>
        )
    }
}



export default AboutPage