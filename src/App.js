import youtube from "./axios";
import React from "react";
import SearchBar from "./api";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import "semantic-ui-css/semantic.min.css";

//buat componen get API dari SearcBar ./api.js
class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onSearchSubmit = async (term) => {
    //variabel response get foto
    const response = await youtube.get("/search", {
      params: { q: term },
    });
    //set state image dengan response data results
    this.setState({ videos: response.data.items });
    this.setState({ selectedVideo: response.data.items[0] });
    console.log(response.data.items);
  };

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div
        className="ui container mt-2"
        style={{
          boxShadow: "2px 2px 2px 0px #1A120B",
          borderRadius: "5px",
          border: "2px solid skyblue",
          backgroundColor: "#F0ECE3",
        }}
      >
        {/* render componen SearchBar dengan onSubmit */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui segment mb-2" style={{ backgroundColor: "#F7F7F7" }}>
          <div className="ui two column grid">
            <div className="eleven wide column">
              {/* Componen video */}
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              {/* Componen video disamping */}
              <VideoList
                handleVideoSelect={this.handleVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
