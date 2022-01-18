import { ReactElement } from 'react'
import styled from 'styled-components'
import { IArticleFields } from '../../../../../schema/generated/contentful'

type ArticleProps = {
    article: IArticleFields
}

const ArticleCard = styled.div`
    width: 300px;
    padding: 1em;
    margin: 1em;
`

const ArticleImage = styled.img`
    width: 300px;
    height: auto;
`

const Article = ({ article }: ArticleProps): ReactElement => {
    return (
        <ArticleCard>
            {article.image && (
                <ArticleImage
                    src={article.image.fields.file.url}
                    alt="Article image"
                />
            )}
            <p>{article.publishDate}</p>
            <h3>{article.title}</h3>
            {/* <p>{article.content}</p> */}
        </ArticleCard>
    )
}

export default Article
