use std::fmt::{self, Display};

#[derive(Debug)]
pub enum AppError {
    Message(String),
}

impl Display for AppError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            AppError::Message(m) => write!(f, "{m}"),
        }
    }
}

impl std::error::Error for AppError {}