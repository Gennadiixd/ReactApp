import React, { Component } from 'react'

export default class Test extends Component {

    state = { on: false, text: "Hello World" }


    onChange = () => {        
        this.setState({ on: !this.state.on })
    }

    static on = ({ on, children }) => (on ? children : null)
    static off = ({ on, children }) => (on ? children : null)
    
    static button = (onChange) => (<button onClick={onChange} />)
    static test = () => { return <button /> }



    render() {
        return (
            <div>
                <Test> 
                    <Test.on />
                </Test>
                <button onClick = {this.onChange}/>
            </div>
        )
    }
}

