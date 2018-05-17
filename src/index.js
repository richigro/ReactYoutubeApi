//go find the node modue react beacuse im going to use it in this file
// and assing it the the variable react
import React, {Component} from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar.js"
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail.js";
import YTSearch from "youtube-api-search";

const API_KEY = 'AIzaSyATWq63BAfwumVY9CES89eLXRxouf2bbYU';





//Create a new component and it shoud produce some html
//this is in fact jsx not html
class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: []};

    YTSearch({key: API_KEY, term: "good mythical morning"}, (videos) => {
        // new es six syntax videos: videos equals just video below
        this.setState({ videos });
    });
  }
  render(){
    return(
      <div>
        <SearchBar />
        <VideoDetail videos={this.state.videos}/>
      {/* // this property passes data from the app components
      // to the VideoList component */}
      <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

//Take this component generated html and pu it on the page
// in the dom
ReactDOM.render(<App />, document.querySelector(".container"));
