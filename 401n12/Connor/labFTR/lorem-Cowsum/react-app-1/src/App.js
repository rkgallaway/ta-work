import React from 'react';
import Header from './Header';
import cowsay from 'cowsay-browser';
const faker = require( 'faker' );

//import './App.css';


export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state ={};
        this.state.options=null;
        this.state.contents=null;
    };

    clickHandle = () => {
        this.setState((previousState)=>{
            return {
                contents: cowsay.say({text:faker.lorem.words()}),
            };
        });
    };

    render(){
        return (
            <main>
                <Header/>
                {this.state.contents ? <pre>{this.state.contents}</pre> : undefined }
                <button onClick={this.clickHandle}>click me!</button>
            </main>
                )
    };


}