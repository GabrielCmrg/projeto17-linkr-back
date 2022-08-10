import { getPost } from "../repositories/postsRepository.js";

async function timeline(req, res) {
    try {
        const posts = await getPost();
        res.status(200).send(posts);
    }
    catch {
        res.sendStatus(500);
    }
}

export { timeline };