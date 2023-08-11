use anchor_lang::error_code;

#[error_code]
pub enum PlayerError {
    AlreadyInitialized,
    NotInitialized,
}

#[error_code]
pub enum BaseError {
    AlreadyInitialized,
    NotInitialized,
}

#[error_code]
pub enum ArmyError {
    AlreadyInitialized,
    NotInitialized,
}

#[error_code]
pub enum GameMatchError {
    AlreadyInitialized,
    NotInitialized,
}