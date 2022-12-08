import React from 'react';
import ReactDOM, { unstable_renderSubtreeIntoContainer } from 'react-dom';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stack from '@mui/material/Stack';
import "./cardstyle.css"; 


export class Feedworker extends React.Component{
value = "Feed works"
data = []
constructor(props) {
  super(props)
  this.state = {
      data : [],
      loaded : false,
      label: this.props.label
  };
  
}
componentDidMount(){
if(this.state.label == 'all'){
  fetch('https://backendnewbytes.azurewebsites.net/feed/'+this.state.label)
  .then((res) => res.json())
  .then((json) => {
      this.setState({data:json,loaded:true})
      console.log(this.state.data)
      console.log(this.props.label)
      
  })
}
else{
  fetch('https://backendnewbytes.azurewebsites.net/feed/?label='+this.state.label)
  .then((res) => res.json())
  .then((json) => {
      this.setState({data:json,loaded:true})
      console.log(this.state.data)
      console.log(this.props.label)
      
  })
}}
componentDidUpdate(prevProps) {
  if (this.props.label !== prevProps.label) {
    console.log('in comp did update')
    this.setState({label:this.props.label})
    if(this.props.label == 'all'){
      fetch('https://backendnewbytes.azurewebsites.net/feed/'+this.state.label)
      .then((res) => res.json())
      .then((json) => {
          this.setState({data:json,loaded:true})
          console.log(this.state.data)
          console.log(this.props.label)
          
      })
    }
    else{
      fetch('https://backendnewbytes.azurewebsites.net/feed/?label='+this.props.label)
      .then((res) => res.json())
      .then((json) => {
          this.setState({data:json,loaded:true})
          console.log(this.state.data)
          console.log(this.props.label)
          
      })
    }
  }
}
render(){
  console.log(this.state.data)
  //this.setState({label:this.props.label})
  console.log(this.props.label)
  if(this.state.loaded){
    return(
      
          <div>
            <Stack spacing={2}>
        {this.state.data.map((text, index) => (
          
          <div id="container" >

          <div class="card">
            <img src={text['img']} alt="Lago di Braies" height="300" />
            <div class="card__details">
              <div class="name">{text['title']}</div>
      
              <p>{text['summary']}</p>
             <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg> Like </button> 
              <button><a href={text['url']} target='_blank'>Read More</a></button>
            </div>
          </div>
        </div>
         
        ))}
        </Stack>
      </div>
        
    )}
    else return(<div><p>Loading....</p></div>)
}
}
export default Feedworker