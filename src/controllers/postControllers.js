import { getPost,savePostInDatabase } from "../repositories/postsRepository.js";

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
    const {userId, content, postLink} = req.body;
    // const userId = res.locals.id
    try{
        await savePostInDatabase(userId,content,postLink);
        res.sendStatus(201);
    } 
    catch{
        console.log(error);
        res.status(500).send("houve um erro ao armazernar o post");
    }
}

export {timeline, sendPost};