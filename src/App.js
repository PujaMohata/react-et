import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-background">
      <p className="heading-text">Expense Tracker</p>
	  <div className="task-container">
		<div>
			Date:
			<input type="date" className="text-input"/>
			Rent:
			 <input className="text-input"/>
			Grocery:
			 <input className="text-input"/>
			Travel:
			 <input className="text-input"/>
			Internet:
			 <input className="text-input"/>
			Daily Items:
			 <input className="text-input"/>
			Miscellaneous:
			 <input className="text-input"/>
			<button className="add-button">Submit</button>
		</div>
	  </div>
      
    </div>
  );
}

export default App;
