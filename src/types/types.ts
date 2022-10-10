export interface Area {
    id: number | string;
    name: string;
    code: string;
    flag: string;
}

export interface Competition {
    id: number | string;
    name: string;
    code: string;
    type: string;
    emblems: string;
}

export interface Season {
    id: number | string;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: string;
    stages: SeasonStage[];
}

export enum SeasonStage {
    FINAL = 'FINAL',
    THIRD_PLACE = 'THIRD_PLACE',
    SEMI_FINALS = 'SEMI_FINALS',
    QUARTER_FINALS = 'QUARTER_FINALS',
    LAST_16 = 'LAST_16',
    LAST_32 = 'LAST_32',
    LAST_64 = 'LAST_64',
    ROUND_4 = 'ROUND_4',
    ROUND_3 = 'ROUND_3',   
    ROUND_2 = 'ROUND_2',
    ROUND_1 = 'ROUND_1',
    GROUP_STAGE = 'GROUP_STAGE',
    PRELIMINARY_ROUND = 'PRELIMINARY_ROUND',
    QUALIFICATION = 'QUALIFICATION',
    QUALIFICATION_ROUND_1 = 'QUALIFICATION_ROUND_1',
    QUALIFICATION_ROUND_2 = 'QUALIFICATION_ROUND_2',
    QUALIFICATION_ROUND_3 = 'QUALIFICATION_ROUND_3',
    PLAYOFF_ROUND_1 = 'PLAYOFF_ROUND_1',
    PLAYOFF_ROUND_2  = 'PLAYOFF_ROUND_2',
    PLAYOFFS = 'PLAYOFFS',
    REGULAR_SEASON = 'REGULAR_SEASON',
    CLAUSURA = 'CLAUSURA',
    APERTURA = 'APERTURA',
    CHAMPIONSHIP_ROUND = 'CHAMPIONSHIP_ROUND',
    RELEGATION_ROUND = 'RELEGATION_ROUND',
}

export interface Match {
    id: string;
    utcDate: string;
    status: MatchStatus;
    minute: number;
    injuryTime: number;
    attendance: number;
    venue: string;
    matchday: number;
    stage: SeasonStage;
    group: Group;
    lastUpdated: string;
    homeTeam: Team;
    awayTeam: Team;
    score: MatchScore;
    goals: MatchGoal[];
    penalties: MatchPenalty[];
    bookings: MatchBooking[];
    substitutions: MatchSub[];
    odds: MatchOdds;
    referees: MatchReferee[];
}

export interface Team {
    id: string;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
    coach: Coach;
    leagueRank: number;
    formation: string;
    linueup: Player[];
    bench: Player[];
    statistics: TeamStats;
}

export interface Player {
    id: string;
    name: string;
    position: string;
    shirtNumber: number;
}

export interface Coach {
    id: string;
    name: string;
    nationality: string;
}

export interface TeamStats {
    cornerKicks: number;
    freeKicks: number;
    goalKicks: number;
    offsides: number;
    fouls: number;
    ballPossession: number;
    saves: number;
    throwIns: number;
    shots: number;
    shotsOnGoal: number;
    shotsOffGoal: number;
    yellowCards: number;
    yellowRedCards: number;
    redCards: number;
}

export interface MatchScore {
    winner: MatchWinner;
    duration: MatchDuration;
    fullTime: InstanceScore;
    halfTime: InstanceScore;
}

export interface InstanceScore {
    home: number;
    away: number;
}

export interface MatchGoal {
    minute: number;
    injuryTime: boolean;
    type: GoalType;
    team: GoalTeam;
    scorer: GoalPlayer;
    assist: GoalPlayer;
    score: InstanceScore;
}

export interface GoalTeam {
    id: number;
    name: string;
}

export interface GoalPlayer {
    id: number;
    name: string;
}

export interface MatchPenalty {
    player: GoalPlayer;
    team: GoalTeam;
    scored: boolean;
}

export interface MatchBooking {
    minute: number;
    team: GoalTeam;
    player: GoalPlayer;
    card: BookingType;
}

export interface MatchSub {
    minute: number;
    team: GoalTeam;
    playerOut: GoalPlayer;
    playerIn: GoalPlayer;
}

export interface MatchOdds {
    homeWin: number;
    draw: number;
    awayWin: number;
}

export interface MatchReferee {
    id: number;
    name: string;
    type: RefereeType;
    nationality: string;
}

export enum RefereeType {
    ASSISTANT_REFEREE_N1 = 'ASSISTANT_REFEREE_N1',
    ASSISTANT_REFEREE_N2 = 'ASSISTANT_REFEREE_N2',
    FOURTH_OFFICIAL = 'FOURTH_OFFICIAL',
    REFEREE = 'REFEREE',
    VIDEO_ASSISTANT_REFEREE_N1 = 'VIDEO_ASSISTANT_REFEREE_N1',
    VIDEO_ASSISTANT_REFEREE_N2 = 'VIDEO_ASSISTANT_REFEREE_N2',
}

export enum BookingType {
    YELLOW = 'YELLOW',
    RED = 'RED',
}

export enum GoalType {
    PENALTY = 'PENALTY',
    REGULAR = 'REGULAR',
}

export enum MatchWinner {
    DRAW = 'DRAW',
    HOME = 'HOME',
    AWAY = 'AWAY',
}

export enum MatchDuration {
    REGULAR = 'REGULAR',
    EXTRA_TIME = 'EXTRA_TIME',
    PENALTIES = 'PENALTIES',
}

export enum MatchStatus {
    SCHEDULED = 'SCHEDULED', 
    TIMED = 'TIMED',
    IN_PLAY = 'IN_PLAY', 
    PAUSED = 'PAUSED', 
    FINISHED = 'FINISHED', 
    SUSPENDED = 'SUSPENDED', 
    POSTPONED = 'POSTPONED', 
    CANCELLED = 'CANCELLED', 
    AWARDED = 'AWARDED',
}

export enum Group {
    GROUP_A = 'GROUP_A',
    GROUP_B = 'GROUP_B',
    GROUP_C = 'GROUP_C',
    GROUP_D = 'GROUP_D',
    GROUP_E = 'GROUP_E',
    GROUP_F = 'GROUP_F',
    GROUP_G = 'GROUP_G',
    GROUP_H = 'GROUP_H',
    GROUP_I = 'GROUP_I',
    GROUP_J = 'GROUP_J',
    GROUP_K = 'GROUP_K',
    GROUP_L = 'GROUP_L',
}