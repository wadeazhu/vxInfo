import dotenv from "dotenv"
import {weatherInfo} from "./libs/loveMsg/goodMorning.js";

dotenv.config()

weatherInfo().then(() => {})
