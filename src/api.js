import React from "react";
import "semantic-ui-css/semantic.min.css";

//membuat komponen SearchBar
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    //memanggil gambar menggunakan createRef
    this.imageRef = React.createRef();
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    // gunakan current.value untuk mengambil value pada onSubmit
    this.props.onSubmit(this.imageRef.current.value);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="Field">
            <label> Image Search </label>
            <input
              type="text"
              // onChange={(event) => this.setState({ term: event.target.value })}
              // memanggil menggunakan ref
              ref={this.imageRef}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
