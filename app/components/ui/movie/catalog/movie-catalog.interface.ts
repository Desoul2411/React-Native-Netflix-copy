import { IMovie } from '@/shared/types/movie.interface';

export interface ImovieCatalog {
	title: string;
	description?: string;
	movies?: IMovie[];
	isBackButton?: boolean;
}
