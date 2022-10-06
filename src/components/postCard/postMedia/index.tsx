import { FC } from 'react';
import './index.less';
import { Image } from 'antd';
import ContextVideo from './contextVideo';
import { isNullOrEmpty } from 'utils/Lang';

type Props = {
  data: PostItem;
};

const PostMedia: FC<Props> = ({ data }) => {
  if (data.type === 'UploadPost') {
    if (isNullOrEmpty(data.media?.data?.attributes)) return null;
    const media = data.media.data.attributes;
    return (
      <div className="post-media">
        <Image
          width={data?.images?.width}
          height={data?.images?.height}
          src={`${process.env.REACT_APP_API}${media.url}`}
        />
      </div>
    );
  }
  if (data?.type === 'Animated' && data?.images?.url) {
    const { url } = data.images;
    return <ContextVideo videoUrl={url} />;
  }
  return (
    <div className="post-media">
      <Image width={data?.images?.width} height={data?.images?.height} src={data?.images?.webpUrl} />
    </div>
  );
};

export default PostMedia;
