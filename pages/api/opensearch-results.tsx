import {getSearchResults} from '../../lib/opensearch'
import enablePublicAccess from '../../cors-middleware'


export default async function handler(req, res) {
    const {q} = req.query;
    //Perform search
    const response = await getSearchResults(q);
    res.setHeader('Cache-Control', 'max-age=3600, s-maxage=86400');
    return res.status(200).json({ response });
}