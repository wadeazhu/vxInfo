/**
 * 图文消息，一个图文消息支持1到8条图文
 */

export const newsTemplate = (list) => {
  let articles = []

  // map
  if (list && Array.isArray(list)) {
    articles = list.map((n) => {
      return {
        title: n.title,
        description: n.description,
        url: n.url,
        picurl: n.picUrl,
      }
    })
  }

  console.log(JSON.stringify(articles, null, 2))

  return {
    msgtype: 'news',
    news: {
      articles,
    },
  }
}
