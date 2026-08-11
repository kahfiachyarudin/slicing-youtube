import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />
      <Categories />

      <main className="p-6">
        <Hero />
      </main>
    </div>
  );
}

export default App;