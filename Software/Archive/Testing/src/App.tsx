import "./App.css";
import { ExampleFeature } from "./features/example";

function App() {
  return (
    <main className="container">
      <h1>Pipit Desktop</h1>
      <p>AutoTauri scaffold. The example below calls Rust via invoke.</p>
      <ExampleFeature />
    </main>
  );
}

export default App;