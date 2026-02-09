import { queryOptions } from '@tanstack/react-query'
import { baseFetch } from './api'

/**
 * Query options for fetching data from localhost:3001 using the common baseFetch utility.
 * Accepts optional query parameters.
 */
export const helloWorldQueryOptions = (params?: Record<string, any>) => queryOptions({
    queryKey: ['helloworld', params],
    queryFn: () => baseFetch('http://localhost:3001', params, undefined, 'HelloWorld'),
});
