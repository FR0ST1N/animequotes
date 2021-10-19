/**
 * An anime quote Object.
 */
export type AnimeQuotesObject = {
    /**
     * Quote.
     */
    quote: string;
    /**
     * Anime name.
     */
    anime: string;
    /**
     * Quote ID.
     */
    id: number;
    /**
     * Character name.
     */
    name: string;
    /**
     * Object status.
     */
    success: boolean;
};
/**
 * Get a random quote.
 * @returns {AnimeQuotesObject}
 */
export function randomQuote(): AnimeQuotesObject;
/**
 * Get Quote by ID.
 * @param {number} id
 */
export function getQuote(id: number): AnimeQuotesObject;
/**
 * Get quotes by Anime.
 * @param {string} anime Anime name.
 * @param {boolean} [substringSearch=false] Partial matching for output.
 * @returns {AnimeQuotesObject[]}
 */
export function getQuotesByAnime(anime: string, substringSearch?: boolean): AnimeQuotesObject[];
/**
 * Get quotes by Character.
 * @param {string} character Anime character's name.
 * @param {boolean} [substringSearch=false] Partial matching for output.
 * @returns {AnimeQuotesObject[]}
 */
export function getQuotesByCharacter(character: string, substringSearch?: boolean): AnimeQuotesObject[];
/**
 * Get a random quote from the input anime.
 * @param {string} anime Anime name.
 * @param {boolean} [substringSearch=false] Partial matching for output.
 * @returns {AnimeQuotesObject}
 */
export function getRandomQuoteByAnime(anime: string, substringSearch?: boolean): AnimeQuotesObject;
/**
 * Get a random quote from the input character.
 * @param {string} character Anime character's name.
 * @param {boolean} [substringSearch=false] Partial matching for output.
 * @returns {AnimeQuotesObject}
 */
export function getRandomQuoteByCharacter(character: string, substringSearch?: boolean): AnimeQuotesObject;
