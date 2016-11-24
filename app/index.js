import React from 'react';
import ReactDOM from 'react-dom';


const TodoList = (props) =>(
  <ul>
    {
      props.items.map((item)=>(
        <li key={item.id}>{item.text}</li>
      ))
    }
  </ul>
);

class TodoListApp extends React.Component {
  constructor(props){
    super(props);
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.state = {
      text:'',
      items:[],
    };
  }
  onChange(e){
    this.setState({text:e.target.value});
  }
  onSubmit(e){
    e.preventDefault();
        const nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
        const nextText = '';
        this.setState({items: nextItems, text: nextText});
  }
  render(){
    return (
      <div>
        <h3>TodoListApp</h3>
        <TodoList items={this.state.items}/>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} value={this.state.text}/>
          <button>Add#{this.state.items.length+1}</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <TodoListApp />,
  document.getElementById("app")
);