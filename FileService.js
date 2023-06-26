import * as uuid from 'uuid'
import * as path from 'path'

class FileService {
    saveFile(file) {
        try {
            const fileName = uuid.v4() + '.jpg';
        const filePath = path.resilve('static', fileName)
        file.mv(filePath) // mv = move
        return fileName
            
        } catch (err) {
            console.log(err);
        }
    }
}

export default new FileService()