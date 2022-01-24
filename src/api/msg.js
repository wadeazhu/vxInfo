import axios from "axios"
import { getTian } from '../utils/http.js'

const LoveMsgURL = {
    // 天气
    weather: 'https://v0.yiketianqi.com/api?unescape=1&version=v61&appid=43656176&appsecret=I42og6Lm',
    topNews: 'https://www.toutiao.com/hot-event/hot-board/'
}

class API {
    key = ""
    constructor(key) {
        this.key = key || ""
    }
    getKey() {
        return this.key
    }

    async getWeather(city_name) {
        try {
            const response = await axios({ url: LoveMsgURL.weather, params: { city: city_name } })
            const result = response.data
            console.log(result)
            // 预警天气
            if (!result.alarm.alarm_type && !result.alarm_content)
                result.alarm = null

            console.log('天气请求成功==>', city_name)
            return response.data
        }
        catch (error) {
            console.log('天气请求失败==>', error)
            return null
        }
    }

    // 今日头条
    async getTopNews() {
        const res = await axios({
            url: LoveMsgURL.topNews,
            params: {
                origin: "toutiao_pc",
                _signature: "_02B4Z6wo00f01w7gQOwAAIDDjuK6r.rkwYMOxERAAKJglmfRii-5qJzTe.TC633tJ2k0MmikbDS6i3A4ijbD3LV7PdB0WoE9rrNLVcizIn2qqvjf0Yvut7hlbL.J-LtgWPkWkgJldMYlhx3s5a"
            },
        })

        console.log(res.data.data)
        return {newList: res.data.data, newTop: res.data.fixed_top_data}
    }

}

export default new API()
