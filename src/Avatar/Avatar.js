import "./Avatar.css";

function Avatar(props) {
	return (
		<div className="avatar">
			<img
				className={props.shape}
				src={props.url}
				alt="Avatar img"
				width={props.width}
				height={props.width}
			/>
		</div>
	);
}

export default Avatar;
