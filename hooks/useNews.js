import useSWR from "swr";
import { LATEST_NEWS_API } from "../utility/constants";
import { fetcher } from "../utility/common-service";

function useNews() {
    const { data : newsData, error: newsDataError } = useSWR(LATEST_NEWS_API, fetcher);

    

    return {newsData, newsDataError}
}

export default useNews;
