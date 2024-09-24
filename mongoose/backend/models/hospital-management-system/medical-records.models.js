import mongoose from 'mongoose';
const medicalRecordSchema=new mongoose.Schema(
    {
        
    },{timestamps:true});
export const Medicalrecord=mongoose.model("Medicalrecord",medicalRecordSchema)