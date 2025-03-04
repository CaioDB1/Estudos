let user = {
    name: `João`,
    age: 31,
    email: `joaocardoso@gmail.com`,
    city: `São Paulo`,
    blogPosts: [
        {title: 'Frango', likes: 30},
        {title: 'Batata', likes: 50}
    ],
    login (){
        console.log(`Usuário logado`)
    },
    logout (){
        console.log('Usuário deslogado')
    },
    logBlogPosts (){
        console.log(`${this.name} escreveu os seguintes posts:`)
        this.blogPosts.forEach((post) => {
            console.log(post.title, post.likes)
        })
    }
}

user.logBlogPosts()
