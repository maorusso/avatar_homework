import "./App.css";
import Article from "./Article/Article";
import Avatar from "./Avatar/Avatar";

function App() {
	return (
		<div className="App">
			<Avatar
				url="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg"
				shape="circle"
				width="400"
			/>

			<Article
				img="https://images.pexels.com/photos/3951628/pexels-photo-3951628.jpeg"
				title="COVID 21 IS HERE !"
				content="bla bla bla lbabla bla bla lba bla bla bla lba bla bla bla lba bla bla bla lba bla bla bla lba bla bla bla lba bla bla bla lba bla bla bla lba bla bla bla lba bla bla bla lba bla bla bla lba!!!"
			/>
		</div>
	);
}

export default App;
