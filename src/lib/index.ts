/**
 * slice the value
 *
 * @param {string} value
 * @return {string}
 */
 export const cutText = (value: string, length: number, start: number = 0): string => {
    if(value.length > length) {
        return value.slice(start, length) + ' ...'
    }

    return value
}