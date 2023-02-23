import ReactDOM from "react-dom";
// import { faker } from "@faker-js/faker";
import "semantic-ui-css/semantic.min.css";

import Clock from "./clock";

const root = ReactDOM.createRoot(document.getElementById("root"));
// render class Comments dan membuat variabel data dengan mengambil data dari dataInput
// root.render(<Comments data={dataInput} />);
root.render(<Clock />);
