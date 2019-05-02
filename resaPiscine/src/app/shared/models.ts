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

  export interface RootObject {
      message: Message[];
      returnCode: number;
  }
