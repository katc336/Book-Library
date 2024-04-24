import Typography from "@mui/material/Typography"

const Languages: React.FC<BookDetailsProps> = ({ bookData }) => {
    return (
        <div>
           {bookData.languages.map((language) => (
    <Typography
        sx={{ml: 5, mr: 3, my: 1 }}
        key={language}
    >
        {// List of languages found at: https://www.gutenberg.org/browse/languages/en
        // NOTE: Some do not have books listed in the API, but include in case they are added.
            language === "en" ? <div>English</div> :
            language === "da" ? <div>Danish</div> :
            language === "nl" ? <div>Dutch</div> :
            language === "fi" ? <div>Finnish</div> :
            language === "fr" ? <div>French</div> :
            language === "de" ? <div>German</div> :
            language === "el" ? <div>Greek</div> :
            language === "hu" ? <div>Hungarian</div> :
            language === "it" ? <div>Italian</div> :
            language === "la" ? <div>Latin</div> :
            language === "pt" ? <div>Portuguese</div> :
            language === "es" ? <div>Spanish</div> :
            language === "sv" ? <div>Swedish</div> :
            language === "tl" ? <div>Tagalog</div> :
            language === "af" ? <div>Afrikaans</div> :
            language === "ale" ? <div>Aleut</div> :
            language === "ar" ? <div>Arabic</div> :
            language === "arp" ? <div>Arapaho</div> :
            language === "bod" ? <div>Bodo</div> :
            language === "br" ? <div>Breton</div> :
            language === "bg" ? <div>Bulgarian</div> :
            language === "cal" ? <div>Caló</div> :
            language === "cat" ? <div>Catalan</div> :
            language === "ceb" ? <div>Cebuano</div> :
            language === "cs" ? <div>Czech</div> :
            language === "et" ? <div>Estonian</div> :
            language === "fa" ? <div>Farsi</div> :
            language === "frs" ? <div>Frisian</div> :
            language === "fur" ? <div>Friulian</div> :
            language === "gd" ? <div>Gaelic, Scottish</div> :
            language === "gl" ? <div>Galician</div> :
            language === "gxr" ? <div>Gamilaraay</div> :
            language === "grc" ? <div>Greek, Ancient</div> :
            language === "he" ? <div>Hebrew</div> :
            language === "is" ? <div>Icelandic</div> :
            language === "ilo" ? <div>Iloko</div> :
            language === "ia" ? <div>Interlingua</div> :
            language === "iu" ? <div>Inuktitut</div> :
            language === "ga" ? <div>Irish</div> :
            language === "ja" ? <div>Japanese</div> :
            language === "csb" ? <div>Kashubian</div> :
            language === "kha" ? <div>Khasi</div> :
            language === "ko" ? <div>Korean</div> :
            language === "lt" ? <div>Lithuanian</div> :
            language === "mi" ? <div>Maori</div> :
            language === "my" ? <div>Mayan Languages</div> :
            language === "enm" ? <div>Middle English</div> :
            language === "nah" ? <div>Nahuatl</div> :
            language === "nap" ? <div>Napoletano-Calabrese</div> :
            language === "nv" ? <div>Navajo</div> :
            language === "nai" ? <div>North American Indian</div> :
            language === "no" ? <div>Norwegian</div> :
            language === "oc" ? <div>Occitan</div> :
            language === "oj" ? <div>Ojibwa</div> :
            language === "ang" ? <div>Old English</div> :
            language === "pl" ? <div>Polish</div> :
            language === "ro" ? <div>Romanian</div> :
            language === "ru" ? <div>Russian</div> :
            language === "sa" ? <div>Sanskrit</div> :
            language === "sr" ? <div>Serbian</div> :
            language === "sl" ? <div>Slovenian</div> :
            language === "cbk" ? <div>Tagabawa</div> :
            language === "te" ? <div>Telugu</div> :
            language === "bo" ? <div>Tibetan</div> :
            language === "cy" ? <div>Welsh</div> :
            language === "yi" ? <div>Yiddish</div> : 
            <div>Language not found</div>
        }
    </Typography>
    ))}
        </div>
    )
 }
 export default Languages
 