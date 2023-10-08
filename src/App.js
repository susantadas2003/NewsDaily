import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component{

  apiKey=process.env.REACT_APP_NEWS_API;
state ={
  progress:10
}
    pageSize=15;

setProgress=(progress)=>{

  this.setState({progress:progress})

}
    render(){
    return (
  <>
  
  <BrowserRouter>
  <LoadingBar color='#f11946'  progress={this.state.progress} height={3}/>
  <Navbar/>
  <Routes>
  <Route exact path ="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="general"pageSize={this.pageSize} country="in" category="general"/>}></Route>
  <Route exact path ="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="business"pageSize={this.pageSize} country="in" category="business"/>}></Route>
  <Route exact path ="/entertainment" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}></Route>
  <Route exact path ="/sports" element={<News setProgress={this.setProgress}apiKey={this.apiKey}   key="sports"pageSize={this.pageSize} country="in" category="sports"/>}></Route>
  <Route exact path ="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general"pageSize={this.pageSize} country="in" category="general"/>}></Route>
  <Route exact path ="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="science"pageSize={this.pageSize} country="in" category="science"/>}></Route>
  <Route exact path ="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology"pageSize={this.pageSize} country="in" category="technology"/>}></Route>
  <Route exact path ="/health" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="health"pageSize={this.pageSize} country="in" category="health"/>}></Route>
  
      
      </Routes>
      </BrowserRouter>
    </>
      
    )
  }
  

}
