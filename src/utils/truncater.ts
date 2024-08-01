/**
 * Truncates a given text to the specified length and adds an ellipsis if truncated.
 * @param {string} text - The text to truncate.
 * @param {number} maxLength - The maximum length of the truncated text.
 * @returns {string} - The truncated text.
 */
export const truncater = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) {
        return text;
    }

    return text.slice(0, maxLength) + '...';
};
