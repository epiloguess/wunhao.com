// 从 `astro:content` 中导入实用工具
import { z, defineCollection } from "astro:content";
// 为要验证的每个集合定义模式。
const postsCollection = defineCollection({
    schema: ({ image}) => z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      tags: z.array(z.string()),
      categories: z.array(z.string()),
      popular: z.boolean(),
      cover: image().refine((img) => img.width >= 100, {
        message: "封面图片必须至少 1080 像素宽！",
      }),
      coveralt: z.string()
    })
});
// 导出一个 `collections` 对象来注册集合
export const collections = {
  docs: postsCollection,
  blog: postsCollection
};