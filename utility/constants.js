export const URL = "https://realtime-hacker-news.vercel.app/api";

export const POST_TYPE_NEWS = "news";
export const POST_TYPE_ASK = "ask";
export const POST_TYPE_JOB = "job";

export const ADD_POST_URL = URL + `/addPost`;
export const ADD_COMMENT_URL = URL + `/posts/addComment`;

export const TRENDING_NEWS_API = `/api/news/trending`;
export const LATEST_NEWS_API = `/api/news/latest`;
export const LATEST_ASKS_API = `/api/asks/latest`;
export const FETCH_POST = `/api/posts/`;

export const LOGIN_API_ENDPOINT = `/api/login`;
export const FETCH_VOTE_COUNT = `/api/posts/vote/`;
export const FETCH_COMMENT_COUNT = `/api/posts/comment/`;
export const FETCH_VOTE_STATUS = `/api/posts/vote/checkVote/`;
