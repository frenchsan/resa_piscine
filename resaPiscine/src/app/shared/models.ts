export interface SessionOuverteRoot {
  message: SessionOuverte[];
  returnCode: number;
}
export interface SessionOuverte {
  id: number;
  creator: string;
  hour_start: string;
  hour_end: string;
  total_duration: number;
  validated_sessions: number;
  total_sessions: number;
  room: Room;
}

export interface Room {
  id: number;
  name: string;
  description?: any;
  available: boolean;
  game_duration: number;
  min_players: number;
  max_players: number;
  min_level: number;
  max_level: number;
  planning: any[];
  room_prices: any[];
}

export interface Message {
      id: number;
      name: string;
      description?: any;
      available: boolean;
      game_duration: number;
      min_players: number;
      max_players: number;
      min_level: number;
      max_level: number;
      planning: any[];
      room_prices: any[];
  }

export interface Availability {
    room_id: number;
    startDateTime: string;
    endDateTime: string;
    gameTotalDuration: number;
  }
