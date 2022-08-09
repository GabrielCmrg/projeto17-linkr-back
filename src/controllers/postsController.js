import { postsRepository } from '../repositories/index.js';
import { usersRepository } from '../repositories/index.js';

export const getUserPosts = async (req, res) => {
    const { id } = req.params
    
    try {
        const {rows: userData} = await usersRepository.getUserData(id)
        const {rows: userPosts} = await postsRepository.getUserPosts(id)

        if (!userData.length) {
            return res 
                .status(404)
                .send('Usuário não encontrado')
        }

        const pageBody = {
            userName: userData[0].name,
            userPicUrl: userData[0].picUrl,
            userPosts
        }
        return res.status(200).send(pageBody)
    } catch (error) {

        console.error(error)
        return res
            .status(500)
            .send('Algo deu errado')
    }
};
  