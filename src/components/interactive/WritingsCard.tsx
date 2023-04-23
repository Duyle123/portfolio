import { getSortedPostsData } from "../../../lib/posts";
import WritingsItem from "./WritingsItem";

function WritingsCard () {
    const posts = getSortedPostsData();
    return(
        <div className="writings-card">
            <ul>
                {posts.map((post) => (
                    <WritingsItem key={post.id} post={post} />
                ))}
            </ul>
        </div>
    )
}

export default WritingsCard;