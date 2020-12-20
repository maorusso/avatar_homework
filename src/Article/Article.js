import "./Article.css";
import CommentList from "./CommentList/CommentList";

function Article(props) {
	return (
		<div className="Article">
			<h3>{props.title}</h3>
			<p>{props.content}</p>
			<img src={props.img} width="700" />

			<CommentList />
		</div>
	);
}

export default Article;
