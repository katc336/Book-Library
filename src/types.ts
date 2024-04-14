interface Book {
    id: number,
    title: string;
    formats: BookImage;
    navWord: string
 }

 type BookImage = {
    [key: string]: string;
    'image/jpeg': string;
    // Add other format types if needed
 }
 type NavButtonProps = {
    navWord: string;
 }
 