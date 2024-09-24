import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { server } from "./app.js";
dotenv.config({
  path: "./env",
});
connectDB()
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log("server listening...");
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!!", err);
  });
/*
const server=express();
async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
    server.on("error",(error)=>{
        console.log("data base connection failed");
        throw error
        server.listen(process.env.PORT,()=>{
            console.log('server listening..')
        })
    })
  } catch (err) {
    console.log("ERROR:", err);
  }
};
*/
