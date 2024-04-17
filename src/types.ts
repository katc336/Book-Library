interface Book {
   id: number,
   title: string;
   formats: BookImage;
   navWord: string
}
type BookImage = {
   [key: string]: string;
   'image/jpeg': string;
}

interface SearchResult {
   id: number;
   name: string;
   formats: BookImage;
}

type NavButtonProps = {
   navWord: string;
}