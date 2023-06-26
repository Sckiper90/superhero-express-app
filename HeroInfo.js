import mongoose from "mongoose";

const HeroInfo = new mongoose.Schema({
    nickname: {type: String, required: true},
    realName: {type: String, required: true},
    originDescription: {type: String, required: true},
    superpowers: {type: String, required: true},
    catchPhrase: {type: String, required: true},
    image: {type: String},
})

export default mongoose.model('HeroInfo', HeroInfo)