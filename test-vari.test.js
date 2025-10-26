const {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById,
  addPost,
  removePost
} = require("./test-vari.");

// resetta l'array
let posts;

beforeEach(() => {
    posts = [
      { id: 1, title: "titolo 1", slug: "slug 1" },
      { id: 2, title: "titolo 2", slug: "slug 2" },
      { id: 3, title: "titolo 3", slug: "slug 3" },
    ];
});

afterEach(() => {
    posts = [];
})


// 🏆 Challenge: describe() - organizzazione dei test
// Organizza i test in describe() raggruppandoli per argomento.

describe("Argomento: Manipolazione di stringhe", () => {
  // 🏆 Snack 1
  // Creare un test che verifichi la seguente descrizione:
  // 👉 "La funzione getInitials restituisce le iniziali di un nome completo."

  test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
    expect(getInitials("Nicola Pasqua")).toBe("N.P.");
    expect(getInitials("mario rossi")).toBe("M.R.");
    expect(getInitials("mario  rossi")).toBe("M.R.");
  });

  // 🏆 Snack 2
  // Creare un test che verifichi la seguente descrizione:
  // 👉 "La funzione createSlug restituisce una stringa in lowercase."

  test("La funzione createSlug restituisce una stringa in lowercase", () => {
    expect(createSlug("Stringa con tante MAIUSCOLE")).toBe(
      "stringa-con-tante-maiuscole"
    );
  });

  // 🏆 Snack 4
  // Creare un test che verifichi la seguente descrizione:
  // 👉 "La funzione createSlug sostituisce gli spazi con -."
  // 📌 Esempi:
  //     createSlug("Questo è un test") → "questo-e-un-test"

  test("La funzione createSlug sostituisce gli spazi con -", () => {
    expect(createSlug("Stringa con trattini")).toBe("stringa-con-trattini");
  });

  // 🏆 Snack 5
  // Creare un test che verifichi la seguente descrizione:
  // 👉 "La funzione isPalindrome verifica se una stringa è un palindromo."
  // 📌 Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.

  test("La funzione isPalindrome verifica se una stringa è un palindromo", () => {
    expect(isPalindrome("anna")).toBeTruthy();
    expect(isPalindrome("nicola")).toBeFalsy();
  });
});

describe("Argomento: Operazioni su array", () => {
  // 🏆 Snack 3
  // Creare un test che verifichi la seguente descrizione:
  // 👉 "La funzione average calcola la media aritmetica di un array di numeri."

  test("La funzione average calcola la media aritmetica di un array di numeri", () => {
    expect(average([2, 4, 6, 8])).toBe(5);
  });

  // 🏆 Snack 7

  // Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.
  // Creare un test che verifichi le seguenti descrizioni:
  // 👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"
  // Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico).

  test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    expect(findPostById(posts, 2)).toEqual({
      id: 2,
      title: "titolo 2",
      slug: "slug 2",
    });
    expect(findPostById(posts, 4)).toBe(null);
    expect(() => findPostById(posts, "2")).toThrow(
      `Errore: 2 deve essere un numero`
    );
    expect(() => findPostById([1, 2, 3], 2)).toThrow(
      "Errore: l' array non è corretto"
    );
  });

  // 🎯 Snack 8 (Bonus)

// Creare due test che verifichino le seguenti descrizioni:
// 👉 "Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più."
// 👉 "Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno."
// 📌 Note:
//     Si consiglia di resettare l'array di post dopo ogni test. Ti ricordi come si fa?

test("Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più", () => {
    expect(addPost(posts, { id: 4, title: "titolo 4", slug: "slug 4" })).toHaveLength(4);
});
test("Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno", () => {
    expect(removePost(posts, 3)).toHaveLength(2);
});

// 🎯 Snack 9 (Bonus)

// Creare un test che verifichi la seguente descrizione:
// 👉 "Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore."
// 📌 Nota:
//     Gli errori devono essere chiari e distinti, es. "Slug già esistente" e “Id già esistente”.

test("Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore", () => {
    expect(() => addPost(posts, { id: 3, title: "titolo 3", slug: "slug 5" })).toThrow("Id già esistente");
    expect(() => addPost(posts, { id: 4, title: "titolo 3", slug: "slug 3" })).toThrow("Slug già esistente");
    expect(() => addPost(posts, { id: 3, title: "titolo 3", slug: "slug 3" })).toThrow("Id e Slug già esistenti");
});

// 🎯 Snack 10 (Bonus): createSlug() – Incrementare lo slug se esiste già
// Creare un test che verifichi la seguente descrizione:
// 👉 "Se viene passato un array di post come secondo argomento, la funzione createSlug incrementa di 1 se lo slug esiste già."

test("Se viene passato un array di post come secondo argomento, la funzione createSlug incrementa di 1 se lo slug esiste già", () => {
    expect(createSlug("slug 3", posts)).toBe("slug 3-1");
});

});

describe("Argomento: Operazioni sul lancio si errori", () => {
  // 🏆 Snack 6
  // Creare un test che verifichi la seguente descrizione:
  // 👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."

  test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido", () => {
    expect(() => createSlug("")).toThrow("titolo non valido");
    expect(() => createSlug(null)).toThrow("titolo non valido");
  });
});

