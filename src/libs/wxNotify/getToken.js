import axios from "axios"

// 获取token
async function getToken({ id, secret }) {
    const BASE_URL = 'https://qyapi.weixin.qq.com'
    try {
        const response = await axios({
            url: `${BASE_URL}/cgi-bin/gettoken?corpid=${id}&corpsecret=${secret}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return response.data.access_token
    }
    catch (error) {
        console.log(error)
        return ''
    }
}

export { getToken }
