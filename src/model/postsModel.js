import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() {                          
    const db = conexao.db("imersao-instalike");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}

// export default function buscarPostPorId(id) {
//     console.log(id);
//     return posts.findIndex( (post) => {
//         return post.id === Number(id);
//     });
// }