const listaAnimes = [
    {
      nome: "Naruto",
      episodios: 720,
      genero: "Ação, Aventura, Fantasia",
      personagens: ["Naruto Uzumaki", "Sasuke Uchiha", "Sakura Haruno", "Kakashi Hatake"]
    },
    {
      nome: "One Piece",
      episodios: 1000, // Número aproximado até o momento
      genero: "Ação, Aventura, Fantasia, Comédia",
      personagens: ["Monkey D. Luffy", "Roronoa Zoro", "Nami", "Usopp", "Sanji"]
    },
    {
      nome: "Attack on Titan",
      episodios: 87, // Incluindo as partes finais
      genero: "Ação, Drama, Fantasia, Suspense",
      personagens: ["Eren Yeager", "Mikasa Ackerman", "Armin Arlert", "Levi Ackerman"]
    },
    {
      nome: "Demon Slayer",
      episodios: 44, // Incluindo o filme Mugen Train
      genero: "Ação, Aventura, Fantasia, Sobrenatural",
      personagens: ["Tanjiro Kamado", "Nezuko Kamado", "Zenitsu Agatsuma", "Inosuke Hashibira"]
    },
    {
      nome: "My Hero Academia",
      episodios: 113, // Incluindo as 5 temporadas
      genero: "Ação, Aventura, Super-herói, Comédia",
      personagens: ["Izuku Midoriya", "Katsuki Bakugo", "Ochaco Uraraka", "All Might"]
    }
  ];
  
const listaPersonagens = listaAnimes.flatMap((anime) => anime.personagens)

console.log(listaPersonagens)