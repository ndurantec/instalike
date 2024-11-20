import expres from 'express';

const posts = [
    {
        id : 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id : 2,
        descricao: "Paisagem deslumbrante ao pôr do sol",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id : 3,
        descricao: "Cachorro fofo fazendo uma careta",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 4,
        descricao: "Comida deliciosa e colorida",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 5,
        descricao: "Cidade vibrante à noite",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 6,
        descricao: "Natureza exuberante com uma cachoeira",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 7,
        descricao: "Um gato preguiçoso tomando sol",
        imagem: "https://placecats.com/millie/300/150"
    }
];

const app = expres();
app.use(expres.json());

app.listen(3000, () => {
    console.log("Servidor Escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorId(id) {
    console.log(id);
    return posts.findIndex( (post) => {
        return post.id === Number(id);
    });
}


app.get("/posts/:id", (req, res) => {
    buscarPostPorId(req.params.id);
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});