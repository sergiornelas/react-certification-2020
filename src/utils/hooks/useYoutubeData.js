import { useAppState } from '../../providers/AppState/State.provider';
import useYoutube from './useYoutube';

export default function useYoutubeData() {
  const { state } = useAppState();
  const { search } = state;
  const [...videosApiInfo] = useYoutube(search);

  const newMeta = [];
  videosApiInfo.forEach((element) => {
    newMeta.push({
      id: element.id.videoId,
      title: element.snippet.title,
      description: element.snippet.description,
      thumbnail: element.snippet.thumbnails.medium.url,
    });
  });

  return newMeta;
}
