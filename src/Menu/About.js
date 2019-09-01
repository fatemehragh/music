import React,{Component} from 'react'
import styles from './Menu.module.css'

export default class About extends Component{
    render() {
        return (
            <div className={styles.about__box}>
             <span>About Me</span>
                <p>Im a junior frontend developer,<br/>the most joyful time for me is when im coding,i love designing.<br/>My biggest goal is that one day i use machine learning in my frontend designs</p>
            </div>
        );
    }
}