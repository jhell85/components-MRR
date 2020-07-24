import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4 pm"
          avatar={faker.image.avatar()}
          text="nice blog post"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jessica"
          timeAgo="Today at 6 am"
          avatar={faker.image.avatar()}
          text="great content"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Joey"
          timeAgo="Today at 12 pm"
          avatar={faker.image.avatar()}
          text="amazing post"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
