interface Book {
   id: number;
   title: string;
   formats: BookImage;
   navWord: string;
   subjects: any[];
 }
 
 type NavButtonProps = {
   navWord: string;
   setNew: () => void;
 };
 
 type BookDetailsProps = {
   bookData: {
      formats: { 'text/html': string };
      download_count: number;
      languages: string[];
      copywrite: boolean;
      results: any[];
   };
 };
 type BookAuthorProps = {
   bookData: {
      title: string;
      authors: [];
      translators: [];
   };
 };
 type BookImage = {
   [key: string]: string;
   'image/jpeg': string;
 };
 
 interface SearchResult {
   id: number;
   name: string;
   title: string;
   formats: BookImage;
 };
 
 type SortButtonProps = {
   click: () => void;
   content: string;
 };
 
 interface PopularityData {
   results: any[];
 };
 
 interface TitleData {
   results: any[];
 };
 
 interface DownloadCount {
   sortFunc: () => void;
 };
 
 
 interface DownloadCountClick {
   click: () => void;
 };

 type TitleSort = {
   bookData: {
      results: any[];
   };
   data: {
      count: number;
      results: any[];
   };
   search: any;
   search2: any;
   idButton: () => void;
   alphabetButton: () => void;
   clearButton: () => void;
   fictionButton: () => void;
   nonFictionButton: () => void;
 };
 
 type SearchContainerProps = {
   data: any ;
   search: any;
   search2: any;
 };
 
 type NextPrevProps = {
   previous: () => void;
   next: () => void;
 };
 