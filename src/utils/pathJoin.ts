/**
 * Joins multiple URL parts into a single URL string.
 * @param {...string[]} parts - The parts of the URL to join.
 * @returns {string} - The joined URL string.
 */
export const joinUrl = (...parts: string[]): string => {
    return parts.map((part) => part.replace(/(^\/+|\/+$)/g, '')).join('/');
};
