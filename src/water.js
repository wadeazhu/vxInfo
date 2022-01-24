import dotenv from "dotenv"
import {weatherInfo} from "./libs/loveMsg/goodMorning.js";

dotenv.config()

weatherInfo({
    text: {
        content: "喝水时间到啦~"
    }
}).then(() => {})
