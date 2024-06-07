import React, { Component } from 'react'

export default class ClassComponent extends Component {
   

    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

    increament=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    decreament=()=>{
        this.setState({
            count:this.state.count-1
        })
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }


  render() {
    return (
      <div>
        <button onClick={this.increament}>Increament(+1)</button>
        <h3>count:{this.state.count}</h3>
        <button onClick={this.decreament}>Decreament(-1)</button>
      </div>
    )
  }
}
