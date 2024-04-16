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

type NavButtonProps = {
   navWord: string;
}