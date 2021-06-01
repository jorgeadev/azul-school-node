const { Schema, model } = require('mongoose');

const moviesSchema = new Schema({
    title: { type: String },
    year: { type: String },
    cover: { type: String, default: "http://dummyimage.com/152x222.png/ff4444/ffffff" },
    duration: { type: String },
    contentRating: { type: String },
    source: { type: String, default: 'https://tuttocitta.it/felis/eu/sapien.html?porta=accumsan&volutpat=tortor&erat=quis&quisque=turpis&erat=sed&eros=ante&viverra=vivamus&eget=tortor&congue=duis&eget=mattis&semper=egestas&rutrum=metus&nulla=aenean&nunc=fermentum&purus=donec&phasellus=ut&in=mauris&felis=eget&donec=massa&semper=tempor&sapien=convallis&a=nulla&libero=neque&nam=libero&dui=convallis&proin=eget&leo=eleifend&odio=luctus&porttitor=ultricies&id=eu&consequat=nibh&in=quisque&consequat=id&ut=justo&nulla=sit&sed=amet&accumsan=sapien&felis=dignissim&ut=vestibulum&at=vestibulum&dolor=ante&quis=ipsum&odio=primis&consequat=in&varius=faucibus&integer=orci&ac=luctus&leo=et&pellentesque=ultrices&ultrices=posuere&mattis=cubilia&odio=curae' },
    tags: [String]
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Movie', moviesSchema)
