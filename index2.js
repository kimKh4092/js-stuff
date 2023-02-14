//03
const blogPost = {
    title: 'news',
    body: 'bad news',
    author: 'jane',
    views: 100,
    comments: [
        { author: 'sara', body: 'too bad' },
        { author: 'jack', body: 'wow' }
    ],
    isLive: true
}

//drafted post
function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;

}

