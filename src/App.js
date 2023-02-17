import Expenses from "./Components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Allowence",
      amount: 194.22,
      date: new Date(2022, 5, 12),
    },
    {
      id: "e2",
      title: "Old Laptop",
      amount: 799.49,
      date: new Date(2020, 4, 21),
    },
    {
      id: "e3",
      title: "Health Expenses",
      amount: 200.1,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "My Computer",
      amount: 94,
      date: new Date(2020, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get Started</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
