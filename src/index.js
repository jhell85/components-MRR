import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4 pm"
        avatar={faker.image.avatar()}
        text="nice blog post"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
