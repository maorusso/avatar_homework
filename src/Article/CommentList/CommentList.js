import Comment from "./Comment/Comment";
import "./CommentList.css";

function CommentList(props) {
	return (
		<div className="CommentList">
			<h2>Comments:</h2>
			<Comment
				author="Maor Russo"
				date="20/12/20"
				content="hello this is comment"
			/>

			<Comment
				author="Eyal Grossman"
				date="20/12/20"
				content="hello this is comment too"
			/>

			<Comment author="Yael Russo" date="20/12/20" content="hi son." />
		</div>
	);
}

export default CommentList;
