import Link from "next/link";
import { fetcher } from "../../utility/common-service";
import { useRouter } from "next/router";
import useSWR from "swr";
import { FETCH_POST } from "../../utility/constants";

export default function Post() {
    const router = useRouter();
    const { postId } = router.query;

    const { data: postData, error: postDataError } = useSWR(FETCH_POST + postId, fetcher);

    return (
        <div className="flex flex-col m-6">
            <h1 className="text-4xl">{postData && postData.title}</h1>
            <h5 className="text-s">{postData && postData.description}</h5>
        </div>
    );
}
