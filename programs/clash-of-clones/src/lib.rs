use anchor_lang::prelude::*;
use instructions::*;

pub mod errors; 
pub mod instructions;
pub mod state;

declare_id!("Fk8C6UUGGZgWHXmb6HPHNhfnBhf4eKDzNnj4R8zMjHCr");

// #[program]
// pub mod tic_tac_toe {
//     use super::*;

//     pub fn setup_game(ctx: Context<SetupGame>, player_two: Pubkey) -> Result<()> {
//         instructions::setup_game::setup_game(ctx, player_two)
//     }

//     pub fn play(ctx: Context<Play>, tile: Tile) -> Result<()> {
//         instructions::play::play(ctx, tile)
//     }
// }

// pub const BOARD_TILES: usize = 169;

#[program]
pub mod clash_of_clones {
    use super::*;

    // pub fn init_base(ctx: Context<InitBase>) -> Result<()> {
    //     let base_state = &mut ctx.accounts.base_state;

    //     base_state.player = ctx.accounts.player.key();
    //     base_state.base_grid = [BaseGridState { value: 0 }; BOARD_TILES];
    //     base_state.is_initialized = true;

    //     Ok(())
    // }

    pub fn init_player(ctx: Context<InitPlayer>) -> Result<()> {
        instructions::init_player::init_player(ctx)
    }
}

// #[derive(Accounts)]
// pub struct InitBase<'info> {
//     #[account(mut)]
//     pub player: Signer<'info>,
//     #[account(
//         init,
//         payer=player,
//         seeds=["base".as_bytes(), player.key().as_ref()],
//         bump,
//         space=1000,
//     )]
//     pub base_state: Account<'info, BaseState>,
//     pub system_program: Program<'info, System>,
// }

// #[account]
// pub struct BaseState {
//     player: Pubkey,
//     // Consider storing only pubkeys or empty string, address refers to account storing state
//     // of the grid entity. This could allow for updating individual grid entities without
//     // a need to update the entire grid
//     base_grid: [BaseGridState; BOARD_TILES],
//     is_initialized: bool,
// }

// #[account]
// #[derive(
//     AnchorSerialize,
//     AnchorDeserialize,
//     Copy,
//     Clone,
// )]
// pub struct BaseGridState {
//     value: i32,
// }

// #[account]
// pub struct BaseGridEntity {
//     base: Pubkey,
//     player: Pubkey,
//     level: u32,
//     position: u32 // computed array index position
// }
