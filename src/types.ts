interface Book {
   id: number,
   title: string;
   formats: BookImage;
   navWord: string
}
type NavButtonProps = {
   navWord: string;
   setNew: () => void;
}
type BookDetailsProps = {
   bookData: {
      formats: { 'text/html': string; };
      download_count: number;
      languages: string[];
      copywrite: boolean
      results:any[];
   };
};

type BookAuthorProps = {
   bookData: {
      title: string,
      authors: [];
      translators: [];
   };
};
type EventProps = {
   event: string;
}
type BookImage = {
   [key: string]: string;
   'image/jpeg': string;
}

interface SearchResult {
   id: number;
   name: string;
   title: string
   formats: BookImage;
}

interface Author {
   name: string
}
interface Title {
   title: string
}

type SortButtonProps = {
   click: () => void;
}

interface PopularityData {
   results:any[];
 }
 interface TitleData {
   results:any[];
 }

