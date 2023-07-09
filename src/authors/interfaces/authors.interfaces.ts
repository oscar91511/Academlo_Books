import { Book } from "../../books/interfaces/books.interfaces";

export interface AuthorsResAPI {
  status: string;

  authors: Author[];
}

export interface Author {
  id: number;

  name: string;

  surname: string;

  birthdate: Date;

  biography: string;

  status: boolean;

  createdAt: Date;

  updatedAt: Date;

  Books: Book[];
}
