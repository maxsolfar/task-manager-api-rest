import app from "./app.js";
import "./database/connect.js";

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server run at port: ${PORT}`)
});