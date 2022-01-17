import { useQuery } from "react-query";
import { getArticles } from "../../../services/http/contentful-client";

const Articles: React.FC = () => {
    const { data, status } = useQuery("articles", getArticles);

    console.log(data);
    return (
        <div>
            <h1>Articles</h1>
            {status}
        </div>
    );
};

export default Articles;
