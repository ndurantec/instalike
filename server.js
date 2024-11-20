import expres from 'express';

const posts = [
    {
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        descricao: "Paisagem deslumbrante ao pôr do sol",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        descricao: "Cachorro fofo fazendo uma careta",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        descricao: "Comida deliciosa e colorida",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        descricao: "Cidade vibrante à noite",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        descricao: "Natureza exuberante com uma cachoeira",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        descricao: "Um gato preguiçoso tomando sol",
        imagem: "https://placecats.com/millie/300/150"
    }
];

const app = expres();
app.listen(3000, () => {
    console.log("Servidor Escutando...");
});

app.get("/api", (req, res) => {
    res.status(200).send("Boas vindas à imersão!");
});