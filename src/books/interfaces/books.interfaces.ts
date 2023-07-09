export interface Book {
  id: number;

  title: string;

  sypnosis: string;

  numberPages: number;

  editorial: string;

  publicationDate: Date;

  score: number;

  authorId: number;

  status: boolean;

  createdAt: Date;

  updatedAt: Date;
}
