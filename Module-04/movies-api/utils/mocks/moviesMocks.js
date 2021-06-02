const movies = [
    {
        "id": "ca309ed7-1aeb-4201-b2a4-2386dba194f0",
        "title": "Crime at Porta Romana",
        "year": 1999,
        "cover": "http://dummyimage.com/180x158.png/5fa2dd/ffffff",
        "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "duration": 237,
        "contentRating": "C",
        "source": "https://businessinsider.com/habitasse/platea/dictumst/aliquam/augue.png?vestibulum=ipsum&eget=aliquam&vulputate=non&ut=mauris&ultrices=morbi&vel=non&augue=lectus&vestibulum=aliquam&ante=sit&ipsum=amet&primis=diam&in=in&faucibus=magna&orci=bibendum&luctus=imperdiet&et=nullam&ultrices=orci&posuere=pede&cubilia=venenatis&curae=non&donec=sodales&pharetra=sed&magna=tincidunt&vestibulum=eu&aliquet=felis&ultrices=fusce&erat=posuere&tortor=felis&sollicitudin=sed&mi=lacus&sit=morbi&amet=sem&lobortis=mauris&sapien=laoreet&sapien=ut&non=rhoncus&mi=aliquet&integer=pulvinar&ac=sed&neque=nisl&duis=nunc&bibendum=rhoncus&morbi=dui&non=vel&quam=sem&nec=sed&dui=sagittis&luctus=nam&rutrum=congue&nulla=risus&tellus=semper&in=porta&sagittis=volutpat&dui=quam&vel=pede&nisl=lobortis&duis=ligula&ac=sit&nibh=amet&fusce=eleifend&lacus=pede&purus=libero&aliquet=quis&at=orci&feugiat=nullam&non=molestie&pretium=nibh&quis=in&lectus=lectus&suspendisse=pellentesque&potenti=at&in=nulla&eleifend=suspendisse&quam=potenti&a=cras&odio=in&in=purus&hac=eu&habitasse=magna&platea=vulputate&dictumst=luctus&maecenas=cum&ut=sociis&massa=natoque&quis=penatibus&augue=et&luctus=magnis&tincidunt=dis&nulla=parturient&mollis=montes&molestie=nascetur",
        "tags": ["Adventure|Animation|Children|Comedy", "Drama"]
    }
]

const filterMoviesMocks = tag => movies.filter(movie => movie.tags.includes(tag));
class servicesMoviesMocks {
    async getMovies() {
        return Promise.resolve(movies);
    }
    async createMovies() {
        return Promise.resolve(movies[0]);
    }
}

module.exports = {
    movies, servicesMoviesMocks, filterMoviesMocks
}

