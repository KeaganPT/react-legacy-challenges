import React, {Component} from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends Component {
  constructor() {
   super()
    this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
     searchTerm: ''
   }
  }
  
  searchFunction(searchTerm) {
      this.setState({searchTerm: (searchTerm)})   
  }
  

  render() {
    return(
      <div>
       <Input type="text" placeholder='Search Here' onChange={(e) => this.searchFunction(e.target.value)}/>
       <h3>Results:</h3>
       {this.state.things.filter(item => {
        //  if (!this.state.searchTerm) return true
         if(item.includes(this.state.searchTerm)) {
           return true
         }
       })
        .map(item => (
          <div>
            <p>{item}</p>
          </div>
        ))
       }
     </div>
   )
  }
    
}

export default SearchIndex;