import { Character } from './../../single-character/models/character';

export interface Characters {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
}
