import { request } from './request';
import { Storage } from 'stores/Storage';

const config = {
  headers: {
    Authorization: 'Bearer ' + Storage.accessToken,
    'Content-Type': 'application/json'
  }
};

export const fetchPostsInTopic = (topicId: number, page: number) =>
  request<any>('get', '/api/posts', {
    populate: '*',
    'pagination[pageSize]': 10,
    'pagination[page]': page,
    'filters[topics][id][$eq]': topicId,
    sort: ['createdAt:desc']
  });

export const likePost = async (isLike: string | null, voteId: number, postId: number) => {
  if (voteId !== 0) {
    return request<any>(
      'put',
      `/api/votes/` + voteId,
      {
        data: {
          type: isLike,
          post: postId
        }
      },
      config
    );
  } else {
    return request<any>(
      'post',
      '/api/votes',
      {
        data: {
          type: isLike,
          post: postId
        }
      },
      config
    );
  }
};

export const uploadImage = async (image: any): Promise<any> => {
  const data = new FormData();
  data.append('files', image);
  const response = await request<any>('post', '/api/upload', data);
  console.log('uploadImage', response);
  return response;
};

export const createPost = async (title: string, topicId: number, image: any) => {
  let mediaId = 0;
  if (image) {
    const resUploadImage = await uploadImage(image);
    mediaId = resUploadImage?.data[0]?.id;
  }
  const params = {
    title: title,
    type: 'UploadPost',
    upVoteCount: 0,
    downVoteCount: 0,
    commentsCount: 0,
    media: mediaId,
    topics: [topicId],
    user: [Storage.user?.id],
    priority: 0
  };
  const response = await request<any>('post', '/api/posts', {
    data: params
  });
  console.log('createPost', response);
};
