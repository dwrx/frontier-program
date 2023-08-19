use crate::errors::GameMatchError;
use anchor_lang::prelude::*;

#[account]
pub struct GameMatch {
    id: u32,
    pub state: MatchState,
    attacking_army: Pubkey,
    defending_base: Pubkey,
    is_initialized: bool
}

impl GameMatch {
    // Set to maximum account size to leave expansion room, find what it is
    pub const MAXIMUM_SIZE: usize = 5000;

    pub fn init(&mut self, match_id: u32, attacking_army: Pubkey, defending_base: Pubkey) -> Result<()> {
        require_eq!(self.is_initialized, false, GameMatchError::AlreadyInitialized);

        self.id = match_id;
        self.state = MatchState::Started;
        self.attacking_army = attacking_army;
        self.defending_base = defending_base;
        self.is_initialized = true;
        Ok(())
    }

    pub fn end_match(&mut self, match_state: MatchState) -> Result<()> {
        require_eq!(self.is_initialized, true, GameMatchError::NotInitialized);
        require!(self.state == MatchState::InProgress, GameMatchError::MatchAlreadyEnded);

        self.state = match_state;

        Ok(())
    }
}

#[derive(AnchorSerialize, AnchorDeserialize, Copy, Clone, PartialEq)]
pub enum MatchState {
    Started,
    InProgress,
    Cancelled,
    Completed,
}