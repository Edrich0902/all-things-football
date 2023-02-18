export const encodeMapsUrl = (url = ""): string => {
    const baseUrl = "https://www.google.com/maps/search/?api=1&query=";
    const encoded = encodeURIComponent(url);
    return baseUrl + encoded;
}