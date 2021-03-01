var movies = [
    {
        name:'Avengers',
        rating:4.5,
        lang:'Eng'
    },
    {
        name:'Jab We Met',
        rating:4.7,
        lang:'Hindi'
    }
]

movies[1].name
"Jab We Met"
movies[0].name
"Avengers"
movies[1].rating
4.7

movies.push({
    name:'Jab We Met',
    rating:4.7,
    lang:'Hindi'
})

​
0: Object { name: "Avengers", rating: 4.5, lang: "Eng" }
​
1: Object { name: "Jab We Met", rating: 4.7, lang: "Hindi" }
​
2: Object { name: "Jab We Met", rating: 4.7, lang: "Hindi" }
​
length: 3