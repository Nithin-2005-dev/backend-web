import {v2 as cloudnry} from 'cloudinary';
import { unlinkSync } from 'fs';
cloudnry.config(
    {
        cloud_name:process.env.CLOUDNARY_NAME,
        api_key:process.env.CLOUDNARY_API_KEY,
        api_secret:process.env.CLOUDINARY_API_SECRET_KEY
    }
)
const uploadOnCloudnary=async(localFilePath)=>{
    try{
        if(!localFilePath) return null;
        const response=await cloudnry.uploader.upload(localFilePath,{
            resource_type:'auto'
        })
        console.log('file is uploaded on cloudnary',response.url);
        return response;
    }catch(err){
        unlinkSync(localFilePath) //removes the locally saved temporary file as the upload operation got failed
        return null;
    }
}