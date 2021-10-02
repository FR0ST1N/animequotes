/**
 * Get random quote
 */
export function randomQuote(): {
    quote: string;
    anime: string;
    id: number;
    name: string;
};
/**
 * Get Quote by ID
 * @param {number} id
 */
export function getQuote(id: number): {
    Error: string;
} | {
    quote: string;
    anime: string;
    id: number;
    name: string;
};
/**
 * Get quotes by Anime
 * @param {string} anime
 */
export function getQuotesByAnime(anime: string): {
    Error: string;
} | {
    quote: string;
    anime: string;
    id: number;
    name: string;
}[];
/**
 * Get quotes by Character
 * @param {string} character
 */
export function getQuotesByCharacter(character: string): {
    Error: string;
} | {
    quote: string;
    anime: string;
    id: number;
    name: string;
}[];
