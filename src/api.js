import React from "react";
import "semantic-ui-css/semantic.min.css";

//membuat komponen SearchBar
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    //memanggil gambar menggunakan createRef
    this.videoRef = React.createRef();
    console.log(this.videoRef);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    // gunakan current.value untuk mengambil value pada onSubmit
    this.props.onSubmit(this.videoRef.current.value);
  };

  render() {
    return (
      <div className="ui segment mt-2" style={{ backgroundColor: "#F7F7F7" }}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="Field">
            <label> Video Search </label>
            <input
              type="text"
              // onChange={(event) => this.setState({ term: event.target.value })}
              // memanggil menggunakan ref
              ref={this.videoRef}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
