import React from 'react';
import ReactDOM from 'react-dom';

function formatDate(date){
  return date.toLocaleDateString();
}

function Comment(props){
  return (
    <div className="comment">
      <div className="user-info">
        <img className="avatar" src={props.author.avatarUrl} alt={props.author.name} />
        <div className="user-name">{props.author.name}</div>
      </div>
      <div className="comment-text">{props.text}</div>
      <div className="comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: "열심히 할 수록 기회는 따른다.",
  author: {
    name: "inyoung",
    avatarUrl: "http://inyoung2200.dothome.co.kr/portfolio/assets/images/aboutImg02.jpg",
  },
};

ReactDOM.render(
  <Comment date={comment.date} text={comment.text} author={comment.author}/>,
  document.getElementById("root")
);
