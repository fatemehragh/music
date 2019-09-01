import React,{Component} from 'react';


export default class SignUpForm extends Component{

    state={
        email:'',
        password:'',
        name:'',
        hasAgreed:''
    }

    handleChange=(e)=>{
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
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
            <div >
                <form action=""
                      onSubmit={this.handleSubmit}
                      className='form'
                >
                    <div >
                        <label htmlFor="name"
                               >Full
                            Name</label>
                        <input type="text"
                               id='name'
                               placeholder='Enter your full name'
                               name='name'
                               value={this.state.name}
                               onChange={this.handleChange}/>
                    </div>
                    <div className="FormField">
                        <label>Password</label>
                        <input type="password"
                               id='password'
                               placeholder='Enter your password'
                               name='password'
                               value={this.state.password}
                               onChange={this.handleChange}/>
                    </div>
                    <div >
                        <label htmlFor="email"
                              >Email Address</label>
                        <input type="email"
                               id='email'
                               placeholder='Enter your email'
                               name='email'
                               value={this.state.email}
                               onChange={this.handleChange}/>
                    </div>
                    <label
                       >
                        <input
                            type="checkbox"
                            name='hasAgreed'
                            value={this.state.hasAgreed}
                            required
                            onChange={this.handleChange}
                            className='bottom'
                        />I agree all statement in <a
                        href="/"
                      >terms of services</a>
                    </label>

                </form>
            </div>
        );
    }
}