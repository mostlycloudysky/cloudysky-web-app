import {getMyPlayList} from '../../lib/spotify'

export default async function handler(req, res) {
    const response = await getMyPlayList();
    const data = await response.json()
    
    return res.status(200).json({ data });
}