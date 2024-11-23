import { getTodosPosts } from "../model/postsModel.js";

export async function listarPosts(req, res)  {    
    //res.status(200).json(posts);
    const posts = await getTodosPosts();
    res.status(200).json(posts);
}


    

