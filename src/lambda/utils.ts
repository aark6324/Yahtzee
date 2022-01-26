import { Player, Identifier, GameStatus, PlayerCount, Game } from "./dataTypes";
import { nanoid } from "nanoid";
import { PlayerSession } from "./dataTypes";

export const createPlayer = (ID: Identifier = undefined): Player => {
    if (ID === undefined) ID = nanoid();
    let player: Player = {
        playerID: ID
    }

    return player;
}

export const createGameItem = (max_players: PlayerCount = 2, gameID: Identifier = undefined): Game => {

    if (gameID === undefined) gameID = nanoid();

    let gameItem: Game = {
        status: "not_started",
        max_players,
        winner: undefined,
        current_players: 0,
        entitiyID: `game#${gameID}`,
        nodeID: "game"
    }

    return gameItem;
}


export const createPlayerSession = (gameID: Identifier, playerID: Identifier): PlayerSession => {

    let gameSession: PlayerSession = {
        scores: {},
        entitiyID: `game#${gameID}`,
        nodeID: `player#${playerID}`,
    }
    
    return gameSession;
}