/**
 * 加载 Twikoo 评论系统的脚本文件。
 *
 * - 如果 `window.twikoo.init` 已存在，则直接解析成功。
 * - 否则监听脚本加载完成或失败的事件。
 *
 * @param {HTMLScriptElement | null} twikooScript - Twikoo 脚本标签元素的引用。
 * @returns {Promise<void>} 当脚本加载并且 `window.twikoo.init` 函数可用时解析，否则拒绝。
 * @throws 当找不到脚本元素或脚本加载失败时抛出错误。
 */
export function loadTwikooScript(
  twikooScript: HTMLScriptElement | null
): Promise<void> {
  return new Promise((resolve, reject) => {
    if ((window as any).twikoo?.init) {
      resolve()
      return
    }
    if (!twikooScript) {
      reject(new Error('未找到 Twikoo 脚本元素'))
      return
    }
    twikooScript.onload = () => {
      if ((window as any).twikoo?.init) resolve()
      else reject(new Error('Twikoo 脚本已加载，但未找到 window.twikoo.init'))
    }
    twikooScript.onerror = () => reject(new Error('加载 Twikoo 脚本失败'))
  })
}

/**
 * 初始化 Twikoo 评论系统。
 *
 * - 会等待脚本加载完成。
 * - 在页面中查找 id 为 `twikoo` 的元素并进行初始化。
 *
 * @param {string} envId - Twikoo 环境 ID，必填。
 * @param {HTMLScriptElement | null} twikooScript - Twikoo 脚本标签元素的引用。
 * @returns {Promise<void>} 初始化完成或失败。
 */
export async function initTwikoo(
  envId: string,
  twikooScript: HTMLScriptElement | null
): Promise<void> {
  try {
    await loadTwikooScript(twikooScript)
    const el = document.querySelector('#twikoo')
    if (!el) {
      console.error('未找到 #twikoo 元素')
      return
    }
    ;(window as any).twikoo.init({
      envId,
      el: '#twikoo'
    })
  } catch (err) {
    console.error('初始化 Twikoo 评论系统失败：', err)
  }
}

/**
 * 清空 Twikoo 评论容器的内容。
 *
 * 如果页面上存在 ID 为 `#twikoo` 的元素，将其内容清空。 通常用于路由切换或组件卸载前，避免评论重复渲染。
 */
export function clearTwikoo(): void {
  const el = document.querySelector('#twikoo')
  if (el) el.innerHTML = ''
}
