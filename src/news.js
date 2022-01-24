import { wxNotify } from "./libs/wxNotify/index.js"
import dotenv from "dotenv"
import API from './api/msg.js'

dotenv.config()

// 其他时间发送新闻
API.getTopNews().then(({newList}) => {
    return newList.map(item => (
        {
            title: new Date(),
            picurl: item.Image.url,
            url: item.Url
        }
    ))
}).then(articles => {
    let list = []
    for (let i = 0 ; i < articles.length; i++) {
        if (i % 8 === 0 && i !== 0) {
            wxNotify({
                "msgtype" : "news",
                news: {articles: list}
            }).then(() => {})
            list = []
            break
        }else {
            list.push(articles[i ])
        }
    }
})



