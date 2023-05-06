import { v2 as cloudinary} from 'cloudinary'

cloudinary.config({
    cloud_name:"dl5kn2ywg",
    api_key:"859487444247731",
    api_secret:"MIxviT5lwMtQqJmvR-mCUrF39o8"
})

export const uploadImage = async filePath => {
        return await  cloudinary.uploader.upload(filePath, {
        folder: 'posts'
    })
}

export const deleteImage = async id => {
    return await cloudinary.uploader.destroy(id)
}
