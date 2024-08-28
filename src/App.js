import {Component} from "react";
import './app.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

class RandomMachin extends Component {
  constructor(props) {
    super(props)
this.state = {
  quote:[],
  quoteArr:[],
  loading:false,
  err:'',
  new_color:''
}
    this.handleClick = this.handleClick.bind(this)
  }

  async componentDidMount(){
    this.setState({loading:true, new_color:this.changeColors()})
    try{
      let data;
      await new Promise(resolve=>setTimeout(()=>{
        data=[
          ["The only limit to our realization of tomorrow is our doubts of today.", "Franklin D. Roosevelt"],
          ["In the end, we will remember not the words of our enemies, but the silence of our friends.", "Martin Luther King Jr."],
          ["Life is what happens when you're busy making other plans.", "John Lennon"],
          ["To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "Ralph Waldo Emerson"],
          ["The best way to predict your future is to create it.", "Peter Drucker"]
        ]; resolve()} ,3000))
      let index = Math.floor(Math.random()* data.length)
      this.setState({quoteArr:data, quote:data[index],loading:false})
      
    }catch(err){
      this.setState({err:err})
    } 
    
  }  

 changeColors = ()=>{
  return Math.floor(Math.random()*100)
 }
  handleClick = ()=>{
    let index = Math.floor(Math.random()* this.state.quoteArr.length)
    this.setState({quote:this.state.quoteArr[index],new_color:this.changeColors()})
  }
  render(){ 
    return(
      <div id="wrapper" className={`bg-color-${this.state.new_color}`}>
      <div id="quote-box">
        <div className="quote-container ">
        
        
        {this.state.loading? <i>loading quote...</i>:<p className={`text-color-${this.state.new_color}`}><i style={{fontSize:'2.6rem'}} class="fas fa-quote-left"></i> {this.state.quote[0]}</p> }  

         
        </div> 
        <div className="author-container ">
        <label className={`text-color-${this.state.new_color}`} id="author">
          {this.state.quote[1]}
        </label>
        </div>
        <div className="button-container">
          <div className="tweet">
        <a className={`bg-color-${this.state.new_color}`} href="wwww" id="tweet-quote"><i className="fab fa-twitter"></i></a>
        <a  className={`bg-color-${this.state.new_color}`} href="www" id="tweet-quote"><i className="fab fa-facebook"></i></a>
        </div>
<button className={`bg-color-${this.state.new_color}`} onClick={this.handleClick} id="new-quote">new quote</button>
</div>
      </div>
      </div>
    )
  }
}
export default RandomMachin;