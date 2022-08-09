import { getPost } from "../repository/postsRepository";

function timeline(res, req){
    try{
        const posts = getPost();
        res.status(200).send(posts);
    }
    catch{
        res.sendStatus(500);
    }
}

export {timeline};