export const checkReqParams = (req, res, next) => {
    const { id } = req.params

    if (!/^[0-9]*$/.test(id)) {
        return res
            .status(400)
            .send('Id de usuário inválido')
    }
    
    next();
};
  