import { createArticle } from '@/api/article'
import i18n from '@/i18n'
import { ElMessage } from 'element-plus'
const t = i18n.global.t

export const commitArticle = async (data) => {
  const res = await createArticle(data)
  ElMessage.success(t('msg.article.createSuccess'))
  return res
}
