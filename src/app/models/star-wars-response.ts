import { StarWarsMember } from './star-wars-member';

export interface StarWarsResponse {
    count: number;
    next: string;
    previous: string;
    results: StarWarsMember[];
}
