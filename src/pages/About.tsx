export function About() {
	return (
		<>
			<div className="container">
				<h1 className="d-flex justify-content-center fw-bold">About</h1>

				<p className="pt-5">
					{" "}
					This is project is an ecommerce shopping cart built with Vite and
					coded in React with Typescript and React Bootstrap. It allows the user
					to select an item(s) of their choosing, the quantity of said item(s),
					and then allows the user to see the total calculated in the shopping
					cart. The total is displayed in the users local currency with the
					corect denomination symbol, e.g $,£, €, ¥, by using React's Intl
					(International) library.{" "}
				</p>
			</div>
		</>
	);
}
