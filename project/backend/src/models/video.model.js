import { model, Schema } from 'mongoose';
import mongooseAggeregatePipeline from 'mongoose-aggregate-paginate-v2'
const videoSchema=new Schema({
    video:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    views:{
        type:Number,
        default:0
    },
    ispublish:{
        type:Boolean,
        default:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true});
videoSchema.plugin(mongooseAggeregatePipeline)
export const Video=model('Video',videoSchema)