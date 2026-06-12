import { useCallback, useState } from "react";
import { greetExample } from "../lib/tauri";
import type { ExampleGreeting } from "../types/example";

export function useExample() {
  const [greeting, setGreeting] = useState<ExampleGreeting | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const run = useCallback(async (name: string) => {
    setLoading(true);
    setError(null);
    try {
      const message = await greetExample(name);
      setGreeting({ message, name });
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setGreeting(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return { greeting, loading, error, run };
}