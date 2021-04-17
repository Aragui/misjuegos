const { storage } = require('../tools/init')

exports.uploadPhoto = async (file) => {
    const originalName = file.originalname.split(' ');
    const fileName = originalName.join('_');

    const fileRef = storage.file(fileName)

    const url = await fileRef.getSignedUrl({ action: 'read', expires: '12-30-2100' });

    try {
        fileRef.save(file.buffer, { public: true });

        return url[0];
    }catch(e){
        return e;
    }
}
