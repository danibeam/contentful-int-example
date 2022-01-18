import { IArticle } from '../../schema/generated/contentful'
import { contentfulClient } from '../contentful/client'

export async function getArticles(): Promise<IArticle[]> {
    const res = await contentfulClient.getEntries({ content_type: 'article' })

    return res.items as IArticle[]
}
