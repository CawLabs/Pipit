import { useState } from "react";
import { ExampleButton } from "../../components/ExampleButton";
import { useExample } from "../../hooks/useExample";

export function ExampleFeature() {
  const [name, setName] = useState("Pipit");
  const { greeting, loading, error, run } = useExample();

  return (
    <section style={{ marginTop: "1.5rem", textAlign: "left", maxWidth: 420 }}>
      <h2>Example feature (frontend to Rust)</h2>
      <label>
        Name{" "}
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <div style={{ marginTop: 8 }}>
        <ExampleButton
          label={loading ? "Calling Rust..." : "Greet from Rust"}
          onClick={() => run(name)}
          disabled={loading}
        />
      </div>
      {error && <p style={{ color: "crimson" }}>{error}</p>}
      {greeting && <p><strong>Rust says:</strong> {greeting.message}</p>}
    </section>
  );
}