import { getPost } from "../repository/postsRepository.js";

async function timeline(req, res){
    try{
        const posts = await getPost();
        res.status(200).send(posts);
    }
    catch{
        res.sendStatus(500);
    }
}

async function sendPost(req, res){
    try{

    }
    catch{
        console.log(error);
        res.status(500).send("houve um erro ao armazernar o post");
    }
}

export {timeline, sendPost};