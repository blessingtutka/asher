/**
 * Converts a plain object into a FormData object, handling both files and non-file data.
 * @param {Record<string, any>} data - The form data as a plain JavaScript object. Can include file inputs.
 * @returns {FormData} - The FormData object constructed from the provided data.
 *
 * This function iterates over the keys of the provided object. For each key:
 * - If the value is an instance of FileList (i.e., a file input), each file is appended to the FormData object with the key as its field name.
 * - If the value is an array of Files, each file is appended to the FormData object with the key as its field name.
 * - If the value is a single File, it is appended to the FormData object with the key as its field name.
 * - For all other values, the value is appended to the FormData object with the key as its field name.
 *
 * This is useful for preparing form data to be sent to a server, especially when dealing with file uploads.
 *
 * @example
 * const formData = convertToFormData({
 *     name: 'John Doe',
 *     files: document.querySelector('input[type="file"]').files
 * });
 * // formData can now be used with XMLHttpRequest or fetch for form submission
 */
export const convertToFormData = (data: Record<string, any>): FormData => {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
        const value = data[key];

        if (value == undefined || value == null) {
            return;
        } else if (value instanceof FileList) {
            Array.from(value).forEach((file) => {
                formData.append(key, file);
            });
        } else if (Array.isArray(value) && value.every((item) => item instanceof File)) {
            value.forEach((file) => {
                formData.append(key, file);
            });
        } else if (value instanceof File) {
            formData.append(key, value);
        } else {
            formData.append(key, value);
        }
    });

    return formData;
};
