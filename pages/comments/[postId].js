import { useRouter } from "next/router";
import CommentSection from "../../components/Comment/CommentSection";

export default function Post() {
    const router = useRouter();
    const { postId } = router.query;

    return (
        <div>
            <CommentSection postId ={postId} />
        </div>
    );
}
