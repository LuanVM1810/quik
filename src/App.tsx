import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="bg-[#edf0fe] text-[#2C2C2C] h-auto px-4 pt-4 pb-8 overflow-x-hidden lg:px-8 lg:pt-6">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
