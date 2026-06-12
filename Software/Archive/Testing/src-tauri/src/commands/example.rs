#[tauri::command]
pub fn greet_example(name: String) -> String {
    format!("Hello, {name}! - from Rust (src-tauri/src/commands/example.rs)")
}