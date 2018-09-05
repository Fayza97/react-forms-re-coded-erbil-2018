import React from "react";

export default class ControlledInput extends React.Component 
{
  state= {
    value:""
  };
  render()
  {
    return (<form>
     <input type="text"  value={this.state.value} 
     onChange={(event) => this.setState({value:event.target.value})}/>
    </form>)
  }
}