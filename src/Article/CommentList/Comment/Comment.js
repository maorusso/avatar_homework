import "./Comment.css";

function Comment(props) {
	return (
		<div className="Comment">
			<h4>{props.author}</h4>
			<h5>{props.date}</h5>
			<p>{props.content}</p>
		</div>
	);
}

export default Comment;
