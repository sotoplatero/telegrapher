import { auth, set, get } from '@upstash/redis';

const UPSTASH_REDIS_REST_URL =  import.meta.env.VITE_UPSTASH_REDIS_REST_URL
const UPSTASH_REDIS_REST_TOKEN = import.meta.env.VITE_UPSTASH_REDIS_REST_TOKEN

auth(UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN);	

export const setCache = set
export const getCache = get