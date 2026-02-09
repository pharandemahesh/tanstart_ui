/**
 * Generic API fetcher with logging and error handling.
 * 
 * @param url The URL to fetch from.
 * @param params Optional query parameters to append to the URL.
 * @param options Fetch options (method, headers, body, etc.).
 * @param label A label for logging purposes.
 */
export async function baseFetch<T>(
    url: string,
    params?: Record<string, string | number | boolean | undefined>,
    options?: RequestInit,
    label: string = 'API'
): Promise<T> {
    // Construct URL with query parameters if they exist
    const baseUrl = new URL(url);
    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined) {
                baseUrl.searchParams.append(key, String(value));
            }
        });
    }

    const finalUrl = baseUrl.toString();
    console.log(`[${label}] Attempting to fetch from ${finalUrl}...`);

    try {
        const response = await fetch(finalUrl, options);

        if (!response.ok) {
            throw new Error(`[${label}] HTTP error! status: ${response.status}`);
        }

        // Check if response has content before parsing
        const contentType = response.headers.get("content-type");
        let data;
        if (contentType && contentType.includes("application/json")) {
            data = await response.json();
        } else {
            data = await response.text() as unknown as T;
        }

        console.log(`[${label}] Successfully received response:`, data);
        return data;
    } catch (error) {
        console.error(`[${label}] Failed to fetch:`, error);
        throw error;
    }
}
