import { Scores } from "../scorecard/scorecard";


export type Identifier = string;

export interface Player {
    playerID: string
}



export interface PlayerScorecard {
    playerID: string,
    scores: Scores
}

export type PlayerCount = number;

export type GameStatus = "not_started" | "playing" | "finished";


export interface PlayerSession {
    scores: Scores
    entitiyID: string
    nodeID: string
}

export interface Game {
    status: GameStatus
    max_players: PlayerCount
    current_players: PlayerCount
    winner: Player | undefined
    entitiyID: string
    nodeID: "game"
}