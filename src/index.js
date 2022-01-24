import { wxNotify } from "./libs/wxNotify/index.js"
import main from "./libs/loveMsg/index.js"
import dotenv from "dotenv"
import {weatherInfo} from "./libs/loveMsg/goodMorning.js";
import axios from "axios";
import {createAppAppChat, send, getAppInfo} from "./libs/wxNotify/index.js";
dotenv.config()


weatherInfo()

