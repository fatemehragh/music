import React,{Component} from 'react'
import styles from './playlistbox.module.css'

export default class PlaylistBox extends Component{
    render() {
        return (
            <div className={styles.playlist__box}>
                <div className={styles.playlist__title}>{this.props.title}</div>
            </div>
        );
    }
}