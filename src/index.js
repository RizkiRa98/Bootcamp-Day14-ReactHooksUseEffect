import React from "react";
import ReactDOM from "react-dom";
import { faker } from "@faker-js/faker";
import "semantic-ui-css/semantic.min.css";

import moment from "moment";

//buat variabel penyimpanan data
//gunakan Faker untuk menggunakan data dummy dan random
const dataInput = [
  {
    name: faker.name.fullName(), //set faker name
    image: faker.image.avatar(), //set faker avatar
    post: faker.lorem.text(), //set faker text
    time: moment(faker.date.recent().toLocaleString()).fromNow(), //set faker tanggal menggunakan lib toLocaleString
    liked: 5,
  },
  {
    name: faker.name.fullName(),
    image: faker.image.avatar(),
    post: faker.lorem.text(),
    time: moment(faker.date.recent().toLocaleString()).fromNow(),
    liked: 10,
  },
  {
    name: faker.name.fullName(),
    image: faker.image.avatar(),
    post: faker.lorem.text(),
    time: moment(faker.date.recent().toLocaleString()).fromNow(),
    liked: 11,
  },
];

// Membuat class CommentContainer
class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div className="ui container comments">
        <div className="border border-dark rounded-3 mt-2 comment p-3">
          <a href="/" className="avatar">
            {/* memanggil data image */}
            <img alt="avatar" src={this.props.image} />
          </a>
          <div className="content">
            <a href="/" className="author">
              {/* memanggil data name */}
              {this.props.name}
            </a>
            <div className="metadata">
              {/* memanggil data time */}
              <span className="date">at {this.props.time}</span>
            </div>
            <div className="text">{this.props.post}</div>
            <div className="metadata">
              {/* memanggil like yang berasal dari data dan menambahkan 1 berdasarkan button yang ditekan */}
              <div className="text fw-bold">
                Liked {this.props.liked + this.state.count}
              </div>
            </div>
          </div>
          {/* Membuat button onClick dengan setState */}
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
            className="btn btn-outline-primary ms-2"
          >
            <i class="bi bi-hand-thumbs-up-fill">Like</i>
          </button>
        </div>
      </div>
    );
  }
}

// //Create class untuk memanggil class comment container
class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return this.props.data.map((dataComment, index) => (
      <div className="CommentContainer" key={index}>
        {/* Panggil Class Comment Container yang sudah dibuat diatas  */}
        <CommentContainer
          image={dataComment.image}
          name={dataComment.name}
          post={dataComment.post}
          time={dataComment.time}
          liked={dataComment.liked}
        />
      </div>
    ));
  }
}

//class menghitung button
// class Counting extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }
//   render() {
//     return (
//       <div>
//         <h1> Kamu memencet tombol sebanyak {this.state.count}</h1>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Klik Disini Gan!
//         </button>
//       </div>
//     );
//   }
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
// render class Comments dan membuat variabel data dengan mengambil data dari dataInput
root.render(<Comments data={dataInput} />);
