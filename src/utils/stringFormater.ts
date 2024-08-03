/**
 * Capitalizes the first letter of each word in the input string and removes underscores.
 *
 * This function takes an input string where words are separated by underscores.
 * It converts the string to lowercase, splits it into individual words, capitalizes
 * the first letter of each word, and then joins the words back together with spaces.
 *
 * @param input - The input string to be formatted.
 * @returns The formatted string with the first letter of each word capitalized and underscores removed.
 *
 * @example
 * // Returns "Part Time"
 * formatString("PART_TIME");
 *
 * @example
 * // Returns "Hello World"
 * formatString("HELLO_WORLD");
 */
export const formatString = (input: string): string => {
    return input
        .toLowerCase()
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};
