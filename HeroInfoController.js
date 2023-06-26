import HeroInfo from './HeroInfo.js';
import SuperHeroInfo from './HeroInfo.js'
import HeroInfoService from './HeroInfoService.js';

class HeroInfoController {
    async create(req, res){
        try {
            const hero = await SuperHeroInfo.create(req.body, req.files.image)
            res.json(hero);
         } catch(err) {
             res.status(500).json(err)
         }
    }

    async getAll(req, res) {
        try {
            const heroInfoAll = await HeroInfoService.getAll()
            return res.json(heroInfoAll)
        } catch(err) {
            res.status(500).json(err)
        }
    }

    async getOne(req, res) {
        try {
            const heroInfoOne = await HeroInfoService.getOne(req.params.id)
            return res.json(heroInfoOne)
        } catch(err) {
            res.status(500).json(err)
        }
    }

    async update(req, res) {
            try {
            const updatedHeroInfo = await HeroInfoService.update(req.body)
            return res.json(updatedHeroInfo)
            } catch(err) {
                res.status(500).json(err)
            }
    }

    async delete(req, res) {
        try {
            const heroinfoDelete = await HeroInfoService.delete(req.params.id)
            return res.json(heroinfoDelete)
        } catch(err) {
            res.status(500).json(err)
        }
    }
}


export default new HeroInfoController();