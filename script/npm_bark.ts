import axios from 'axios'

const packages = ['@theojs/lumen']
const barkUrl = process.env.BARK_KEY
if (!barkUrl) throw new Error('BARK_KEY 环境变量未定义')

async function getDownloads(name: string) {
  try {
    const res = await axios.get(`https://api.npmjs.org/downloads/range/last-week/${name}`)
    return res.data.downloads.reduce((sum: number, d: any) => sum + d.downloads, 0)
  } catch {
    return 0
  }
}

async function notify(barkUrl: string, title: string, body: string) {
  await axios.post(barkUrl, {
    title,
    body,
    badge: 1,
    category: 'Github Actions',
    sound: 'multiwayinvitation.caf',
    icon: 'https://i.theojs.cn/logo/npm.webp',
    group: 'Github Actions'
  })
}

async function main() {
  for (const name of packages) {
    const total = await getDownloads(name)
    const body = total > 0 ? `${name} 包当周总下载量为 ${total}` : `${name} 本周暂无下载数据`
    await notify(barkUrl, 'NPM 下载量', body)
  }
}

main()
