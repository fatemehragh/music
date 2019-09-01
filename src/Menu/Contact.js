import React, {Component} from 'react'
import styles from './Menu.module.css'

export default class Contact extends Component {

    state={
        email:'',
        Message:'',
        name:'',

    }

    handleChange=(e)=>{
        let target = e.target;
        let value =  target.value;
        let name = target.name;

        this.setState({
            [name]:value
        })
    };

    handleSubmit =(e)=>{
        e.preventDefault();
        console.log('form submitter');
        console.log(this.state);
    }

    render() {
        return (
            <div>

                <form action=""
                      onSubmit={this.handleSubmit}
                      className={styles.form}
                > <span className={styles.title}>Contact us</span>
                    <div >
                        <label htmlFor="name"
                        >Full
                            Name</label>
                        <input type="text"
                               id='name'
                               className={styles.name}
                               placeholder='Enter your full name'
                               name='name'
                               value={this.state.name}
                               onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label htmlFor="email"
                        >Email Address</label>
                        <input type="email"
                               id='email'
                               className={styles.email}
                               placeholder='Enter your email'
                               name='email'
                               value={this.state.email}
                               onChange={this.handleChange}/>
                    </div>
                    <div >
                        <label htmlFor="Message"
                        className={styles.message}>Message:</label>
                        <input type='text'
                               id='text'
                               className={styles.text}
                               placeholder='Write your message here...'
                               name='Message'
                               value={this.state.Message}
                               onChange={this.handleChange}/>
                    </div>
                   <button className={styles.submit}>Submit!</button>

                </form>
            </div>
        );
    }
}