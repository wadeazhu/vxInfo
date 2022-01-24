/**
 * @description 文本卡片模板 title + description
 * https://open.work.weixin.qq.com/api/doc/90000/90135/90236
 */

/**
 * 卡片类型模板定义
 * 模板内容配置
 * 微信通知 textcard类型的description内容限制512个字节
 */



export const textCardTemplate = (data) => {
  const {
    city,
    date,
    wea,
    tem1,
    tem2,
    win,
    win_speed_day,
    air,
    air_level,
    air_tips,
    humidity,
    alarm,
    week,
    oneWord,
  } = data

  // 今日、恋爱天数
  const today = `${date.replace('-', '年').replace('-', '月')}日`



  // 拼接内容
  let description = `<b>今日天气状况：</b>
${city} | ${today} | ${week}
天气：${wea}
${win}：${win_speed_day}
温度：${tem2}℃ ~ ${tem1}℃
湿度：${humidity}
空气：${air_level} | ${air}\n`

  // 添加预警天气
  if (alarm) {
    description += `
有预警信息哦：${alarm.alarm_type} | ${alarm.alarm_level}预警\n`
  }

  // 最高温度
  if (+tem1 <= 3) {
    description += `
温馨提醒哦：
今日最高温度仅为🥶 ${tem1}℃，要注意保暖哦~\n`
  }

    if (air_tips) {
      description += `
出行建议：${air_tips}`
    }

  if (oneWord) {
    description += `
『 ${oneWord.hitokoto} 』`
  }


  return {
    msgtype: 'textcard',
    textcard: {
      title: "新的一天开始啦~",
      description,
      url: 'https://api.vvhan.com/api/60s', // 60s看世界
    },
  }
}
