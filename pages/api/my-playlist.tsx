import {getMyPlayList} from '../../lib/spotify'
import enablePublicAccess from '../../cors-middleware'

export default async function handler(req, res) {
    const response = await getMyPlayList();
    const data = await response.json()
    
    return res.status(200).json({ data });
}