import axios from "axios"
import { getTian } from '../utils/http.js'

const LoveMsgURL = {
    // 天气
    weather: 'https://v0.yiketianqi.com/api?unescape=1&version=v61&appid=43656176&appsecret=I42og6Lm',
    // 每日简报
    dailyBriefing: 'http://api.tianapi.com/bulletin/index',
    // 今日头条
    topNews: 'http://api.tianapi.com/topnews/index',
    // 最美宋词
    songLyrics: 'http://api.tianapi.com/zmsc/index',
    // 每日一句美好英语
    dayEnglish: 'http://api.tianapi.com/everyday/index',
    // 韩寒主编的ONE一个杂志，本接口返回每日一句
    oneMagazines: 'http://api.tianapi.com/one/index',
    // 故事大全
    storybook: 'http://api.tianapi.com/story/index',
        // 网易云热评
    netEaseCloud: 'http://api.tianapi.com/hotreview/index',
        // 获取农历信息
    lunarDate: 'http://api.tianapi.com/lunar/index',
        // 土味情话
    saylove: 'http://api.tianapi.com/saylove/index',
        // 彩虹屁
    caihongpi: 'http://api.tianapi.com/caihongpi/index',
        // 励志古言
    inspirationalWord: 'http://api.tianapi.com/lzmy/index',
        // 笑话
    joke: 'http://api.tianapi.com/joke/index',
        // 一言
    oneWord: 'https://v1.hitokoto.cn/?encode=json',
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

    // 每日简报
    async getDailyBriefing() {
        const res = await getTian({ url: LoveMsgURL.dailyBriefing })
        return res
    }

    // 今日头条
    async getTianTopNews() {
        const res = await getTian({ url: LoveMsgURL.topNews })
        return res
    }

    // 最美宋词
    async getSongLyrics() {
        const res = await getTian({ url: LoveMsgURL.songLyrics })
        return res?.[0]
    }

    // 每日一句美好英语
    async getDayEnglish() {
        const res = await getTian({ url: LoveMsgURL.dayEnglish })
        return res?.[0]
    }

    // one一个杂志
    async getOneMagazines() {
        const res = await getTian({ url: LoveMsgURL.oneMagazines })
        return res?.[0]
    }

    // 故事大全
    async getStorybook() {
        const res = await getTian({ url: LoveMsgURL.storybook })
        return res?.[0]
    }

    // 网易云热评
    async getNetEaseCloud() {
        const res = await getTian({ url: LoveMsgURL.netEaseCloud })
        return res?.[0]
    }

    // 获取农历信息
    async getLunarDate(date) {
        const res = await getTian({ url: LoveMsgURL.lunarDate, params: { date } })
        return res?.[0]
    }

    // 土味情话
    async getSaylove() {
        const res = await getTian({ url: LoveMsgURL.saylove })
        return res?.[0]
    }

    // 彩虹屁
    async getCaihongpi() {
        const res = await getTian({ url: LoveMsgURL.caihongpi })
        return res?.[0]
    }

    // 雷人笑话
    async getJoke(num = 6) {
        const res = await getTian({ url: LoveMsgURL.joke, params: { num } })
        return res
    }

    // 一言
    async getOneWord() {
        try {
            const response = await axios(LoveMsgURL.oneWord, { timeout: 30000 })
            return response.data
        }
        catch (error) {
            console.log(error)
            return null
        }
    }
}

export default new API()
