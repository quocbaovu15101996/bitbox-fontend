interface AttributesPostItem {
  id: number;
  attributes: PostItem;
}

interface PostItem {
  commentsCount: number;
  createdAt: string;
  publishedAt: number;
  description: string;
  downVoteCount: number;
  hasLongPostCover: number;
  media: MediaData;
  images: TypesImage;
  isVoteMasked: number;
  nsfw: number;
  user: {
    data: UserInfo;
  };
  userInfo: {
    avatar: string;
    userName: string;
  };
  promoted: number;
  sourceDomain: string;
  sourceUrl: string;
  tags: TagItem[];
  title: string;
  type: string;
  upVoteCount: number;
  url: string;
  vote: {
    data: {
      id: number;
      attributes: {
        type: string | null;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
      };
    };
  };
}

interface CommentItem {
  createdAt: number;
  text: string;
  user: User;
}
