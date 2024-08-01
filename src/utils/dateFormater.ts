import { format } from 'date-fns';

/**
 * Formats a date using date-fns.
 * @param {Date | string | number} date - The date to format.
 * @returns {string} - The formatted date string.
 */
export const formatDate = (date: Date | string | number): string => {
    if (!date) return '';

    return format(new Date(date), "MMMM dd, yyyy 'at' HH:mm");
};
