/**
 * Replaces window.fetch with a mock implementation.
 * Intercept rules are passed as an array of matcher/responder pairs.
 * Any URL that does not match falls through to the real fetch.
 *
 * ⚠️ Note: This replaces `window.fetch` globally for the current page.
 *
 * @example
 * mockFetch([
 *   {
 *     match: (url) => url.includes('north='),
 *     response: { json: () => placesGeoMockResp },
 *   },
 * ]);
 */

/**
 * Rule describing when a request should be mocked and what to return.
 *
 * @typedef {Object} MockFetchRule
 * @property {(url: string) => boolean} match - Returns true if the request URL should be intercepted.
 * @property {{ ok?: boolean, text?: () => string, json?: () => unknown }} response - Partial mock of a Fetch API Response object.
 */

/**
 * Installs a mock fetch implementation on window.fetch.
 * Requests matching a rule are intercepted; all others fall through to the real fetch.
 *
 * @param {MockFetchRule[]} rules - Array of match/response rules to apply.
 * @returns {void}
 */
export const mockFetch = (rules) => {
    const originalFetch = window.fetch;

    window.fetch = (input, init) => {
        const urlString = input instanceof Request ? input.url : input.toString();
        const matchedRule = rules.find((rule) => rule.match(urlString));

        if (matchedRule) {
            return Promise.resolve({
                ok: true,
                text: () => Promise.resolve(''),
                json: () => Promise.resolve({}),
                ...matchedRule.response,
            });
        }

        return originalFetch(input, init);
    };
};
