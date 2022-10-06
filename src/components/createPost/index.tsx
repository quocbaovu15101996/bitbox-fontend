import { Button, Input } from 'antd';
import { FC, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './index.less';
import iconSelect from 'assets/post/iconSelect.png';
import { createPost } from 'api/feed.api';

const CreatePost: FC = () => {
  const [files, setFiles] = useState<any>([]);
  const title = useRef<string>('');
  const { TextArea } = Input;

  const onChange = (e: { target: { value: any } }) => {
    title.current = e.target.value;
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles: any[]) => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  const onCreatePost = () => {
    console.log('onPress create post', files);
    console.log('title', title.current);
    createPost(title.current, 1, files[0]);
  };

  const images = files.map((file: { name: React.Key | null | undefined; preview: string | undefined }) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: '96px' }} alt="preview" />
      </div>
    </div>
  ));

  return (
    <div className="create-post">
      <p>Choose how you want to upload the post</p>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {files?.length === 0 && (
          <div className="create-post-content">
            <img src={iconSelect} alt="iconSelect" className="create-post-img" />
            <p className="text-drop-image">Drop image to upload or</p>
            <div className="view-choose-files">
              <p className="text-btn">Choose files...</p>
            </div>
          </div>
        )}
      </div>
      {files?.length > 0 && (
        <>
          <div className="view-content">
            <div className="view-image">{images}</div>
            <TextArea showCount maxLength={280} onChange={onChange} />
          </div>
          <Button onClick={onCreatePost} className="btn-create" type="primary" shape="round">
            Create
          </Button>
        </>
      )}
    </div>
  );
};

export default CreatePost;
