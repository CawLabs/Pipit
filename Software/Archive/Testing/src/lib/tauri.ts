import { invoke, isTauri } from "@tauri-apps/api/core";

function assertTauri(): void {
  if (!isTauri()) {
    throw new Error(
      "Tauri APIs are not available. Run the desktop app with: npm run tauri dev " +
        "(not npm run dev or a browser tab on localhost:1420)."
    );
  }
}

export async function greetExample(name: string): Promise<string> {
  assertTauri();
  return invoke<string>("greet_example", { name });
}
