import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import { IArticle } from '../../../schema/generated/contentful'
import { getArticles } from '../../../services/http/contentful-client'
import Article from '../shared/components/article/Article'

const ArticlesList = styled.div`
    display: flex;
    justify-content: space-between;
`

const Articles: React.FC = () => {
    const { data, status } = useQuery('articles', getArticles)
    const [articles, setArticles] = useState<IArticle[]>([])

    useEffect(() => {
        if (data) {
            setArticles(data)
        }
    }, [data])

    return status === 'success' ? (
        <>
            <h1>Articles</h1>
            <ArticlesList>
                {articles.map((article) => (
                    <Article
                        key={article.fields.slug}
                        article={article.fields}
                    />
                ))}
            </ArticlesList>
        </>
    ) : (
        <p>Loading</p>
    )
}

export default Articles
