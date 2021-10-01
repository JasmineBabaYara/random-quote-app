import React from 'react';
import './index.css'

class App extends React.Component{
  constructor(){
  super()
  this.state={
    quote:"",
    author:""
  }

  this.randomNum=this.randomNum.bind(this);
  }

  componentDidMount(){
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => {
      //console.log(data)
      data = data[this.randomNum(0, data.length - 1)]
      this.setState({
       quote:data.text,
       author:data.author
      })
    })
    .catch(error => console.log('Error', error));
  }

  randomNum(max,min){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render(){
    return(
      
        <div>
          <p className='quote'>{this.state.quote}</p>
          <p className='author'>--{this.state.author}--</p>
        </div>
      
    )
  }
}

export default App;