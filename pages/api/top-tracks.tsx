import {getTopTracks} from '../../lib/spotify'
import enablePublicAccess from '../../cors-middleware'

export default async function handler(req, res) {
    const response = await getTopTracks();
    const { items } = await response.json();

    const tracks = items.slice(0, 10).map((track) => ({
        artist: track.artists.map((_artist) => _artist.name).join(', '),
        songUrl: track.external_urls.spotify,
        title: track.name,
    }));

    res.setHeader('Cache-Control', 'max-age=3600, s-maxage=86400');
 
    return res.status(200).json({ tracks });
}