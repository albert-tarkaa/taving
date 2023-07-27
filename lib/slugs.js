export default function generateSlug(text)
{
    const trimmedText = text.trim(); // Remove leading and trailing spaces
    const slug = trimmedText
        .toLowerCase() // Convert to lowercase
        .replace(/[^a-z0-9-]+/g, '-') // Replace non-alphanumeric characters (except hyphens) with a single hyphen
        .replace(/-+/g, '-') // Replace multiple hyphens with a single hyphen
        .replace(/^-|-$/g, ''); // Remove hyphens from the start or end of the slug
    return slug;
}
