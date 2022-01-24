import dotenv from "dotenv"
import {getToken} from './getToken.js'
import {postMsg} from './postMsg.js'
import axios from "axios";

dotenv.config()

const { CORP_ID, SECRET, AGENT_ID } = process.env
console.log(CORP_ID, SECRET)
export const wxNotify = async (config) => {
    try {
        const accessToken = await getToken({
            id: CORP_ID,
            secret: SECRET
        })

        const defaultConfig = {
            msgtype: 'text',
            agentid: AGENT_ID,
            ...config
        }

        console.log(defaultConfig)

        const res = await postMsg(accessToken, defaultConfig)
        console.log(res)
        return true
    }catch (e) {
        return false
    }
}


export const getAppInfo = async() => {
    const accessToken = await getToken({
        id: CORP_ID,
        secret: SECRET
    })


    const response = await axios({
        url: `https://qyapi.weixin.qq.com/cgi-bin/appchat/get?access_token=${accessToken}&chatid=1122`,
        method: 'GET',
    })
    console.log(response.data)
    return response.data
}

export const createAppAppChat = async() => {
    const accessToken = await getToken({
        id: CORP_ID,
        secret: SECRET
    })
    console.log(accessToken)
    const response = await axios({
        url: `https://qyapi.weixin.qq.com/cgi-bin/appchat/create?access_token=${accessToken}`,
        method: 'POST',
        data: {
            name: "阿祝吃菜米饭",
            owner: "ZhuQi",
            userlist: ["leet", "ZhuQi"],
            chatid: "1122"
        },
    })

    console.log(response.data)
}


export const send = async() => {
    const accessToken = await getToken({
        id: CORP_ID,
        secret: SECRET
    })
    console.log(accessToken)
    const response = await axios({
        url: `https://qyapi.weixin.qq.com/cgi-bin/appchat/send?access_token=${accessToken}`,
        method: 'POST',
        data: {
            "chatid": "1122",
            "msgtype":"text",
            "text":{
                "content" : "你的快递已到\n请携带工卡前往邮件中心领取"
            },
            "safe":0
        }
    })

    console.log(response.data)
}
