import React, { useEffect } from "react";
import { ListProvider } from "./components/contextApp";

import List from "./components/List";
function App() {
	return (
		<>
			<ListProvider>
				<List />
			</ListProvider>
		</>
	);
}

export default App;
