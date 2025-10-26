function getInitials(nomeCompleto){
    const [nome, cognome] = nomeCompleto.split(" ").filter(s => s !== "");
    return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
};

function createSlug(stringa, posts) {
    if (!stringa) {
        throw new Error("titolo non valido");
    }
    if (posts) {
        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];
            if (post.slug === stringa) {
                return stringa + "-1"
            }
        }
    }
    return stringa.toLowerCase().replaceAll(" ", "-");
};

function average(numeri) {
    let somma = 0;
    numeri.forEach(num => {
        somma = somma + num;
    });
    return somma / numeri.length;
};

function isPalindrome(stringa) {
    const parolaDaInvertire = stringa.split("").reverse().join("");
    return stringa === parolaDaInvertire;
};

function findPostById(posts, id) {
    if (typeof id !== "number") {
        throw new Error(`Errore: ${id} deve essere un numero`);
    }
    posts.forEach((p) => {
        if (
            p.id === undefined ||
            p.title === undefined ||
            p.slug === undefined
        ) {
            throw new Error("Errore: l' array non è corretto");
            
        }
    })

    return posts.find(p => p.id === id) || null;
};

function addPost(posts, newPost) {
    posts.forEach(p => {
        if (p.id === newPost.id && p.slug === newPost.slug) {
          throw new Error("Id e Slug già esistenti");
      }
        if (p.id === newPost.id) {
            throw new Error("Id già esistente");
        }
         if (p.slug === newPost.slug) {
            throw new Error("Slug già esistente");
        }
    });
    posts.push(newPost);
    return posts;
};

function removePost(posts, id) {
    const index = posts.findIndex(p => p.id === id)
    posts.splice(index, 1);
    return posts;
};

module.exports = { getInitials, createSlug, average, isPalindrome, findPostById, addPost, removePost}