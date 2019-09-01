import React from 'react';
import About from  '../Menu/About'
import Playlistbox from '../components/playlistbox'
import Contact from '../Menu/Contact'
class Home extends React.Component {

    state = {
        playlist: {
            titles: {
                title1: 'Trending songs',
                title2: 'Pop songs',
                title3: 'Club songs'
            }
        },
        showAbout: false,
        showContact: false,

    };

    aboutHandler() {
        this.setState(() => ({
            showAbout: true
        }));
    }
    contactHandler() {
        this.setState(() => ({
            showContact: true
        }));
    }

    aboutcloseHandler() {
        this.setState(() => ({
            showAbout: false
        }))
    }
    contactcloseHandler() {
        this.setState(() => ({
            showContact: false
        }))
    }


    render() {
        return (

            <div className='basement'>
                <div className='main__home'>
                    <span
                        className='menu icon1'
                        onClick={() => this.aboutHandler()}>
                        about
                    </span>
                    {this.state.showAbout && <About/>}
                    {this.state.showAbout &&
                    <div
                        onClick={() => this.aboutcloseHandler()}
                        className='backdrop'>

                    </div>
                    }

                    <span className='menu icon2'>playlists</span>
                        <span
                        className='menu icon3'>setting</span>
                        <span
                        className='menu icon4'
                        onClick={() => this.contactHandler()}>
                            contact</span>
                    {this.state.showContact && <Contact/>}
                    {this.state.showContact &&
                    <div
                        onClick={() => this.contactcloseHandler()}
                        className='backdrop'>

                    </div>
                    }
                        </div>
                        <Playlistbox
                        title={this.state.playlist.titles.title1}/>
                        <Playlistbox
                        title={this.state.playlist.titles.title2} />
                        <Playlistbox
                        title={this.state.playlist.titles.title3}/>
                        </div>

                        )
                    }
                    }
                    export default Home;