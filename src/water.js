import dotenv from "dotenv"
import {wxNotify} from "./libs/wxNotify/index.js";

dotenv.config()

wxNotify({
    text: {
        content: "喝水时间到啦~"
    }
}).then(() => {})
