import unsplash from "./unsplash";
import React from "react";
import SearchBar from "./api";
import "semantic-ui-css/semantic.min.css";

//buat componen get API dari SearcBar ./api.js
class App extends React.Component {
  state = { Image: [] };

  onSearchSubmit = async (term) => {
    //variabel response get foto
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    //set state image dengan response data results
    this.setState({ Image: response.data.results });
    console.log(response.data.results);
  };
  render() {
    return (
      <div className="container mt-2">
        {/* render componen SearchBar dengan onSubmit */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          {this.state.Image.map((Image, index) => (
            <div className="four wide column">
              <img
                className="ui medium image"
                alt="Image"
                src={Image.urls.small}
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "5px",
                  border: "4px solid skyblue",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
