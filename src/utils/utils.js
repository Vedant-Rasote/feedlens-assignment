function humanizeString(str) {
    return str
        .replace(/_+/g, ' ') // Replace underscores with spaces
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space between camelCase
        .replace(/\b\w/g, (match) => match.toUpperCase()) // Capitalize the first letter of each word
        .trim(); // Remove any leading or trailing spaces
}

function isPresent(value) {
    return value !== null && value !== undefined && value !== '' &&
        (!(Array.isArray(value)) || value.length !== 0) &&
        (!(typeof value === 'object') || Object.keys(value).length !== 0);
}

export { humanizeString, isPresent };