export default function humanizeString(str) {
    return str
        .replace(/_+/g, ' ') // Replace underscores with spaces
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space between camelCase
        .replace(/\b\w/g, (match) => match.toUpperCase()) // Capitalize the first letter of each word
        .trim(); // Remove any leading or trailing spaces
}