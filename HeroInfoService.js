import HeroInfo from "./HeroInfo.js";
import FileService from "./FileService.js";

class HeroInfoService {
    async create(heroinfo, image){
        const fileName = FileService.saveFile(image)
        const createdHeroInfo = await HeroInfo.create({...heroinfo, image: fileName})
        return createdHeroInfo
    }

    async getAll() {
            const heroInfoAll = await HeroInfo.find()
            return heroInfoAll
    }

    async getOne(id) {
            if (!id) {
                throw new Error('ID не указан')
            }
            const heroInfoOne = await HeroInfo.findById(id)
            return heroInfoOne

    }

    async update(heroinfo) {
            if (!heroinfoUpdate._id) {
                throw new Error('ID не указан')
            }
            const updatedHeroInfo = await HeroInfo.findByIdAndUpdate(heroinfoUpdate._id, heroinfoUpdate, {new: true})
            return updatedHeroInfo
    }

    async delete(id) {
            if (!id) {
                throw new Error('ID не указан')
            }
            const heroinfoDelete = await HeroInfo.findByIdAndDelete(id)
            return heroinfoDelete
    }
}


export default new HeroInfoService()