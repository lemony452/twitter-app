import { FiImage } from "react-icons/fi";
import { FaRegUserCircle, FaRegComment, FaRegHeart } from "react-icons/fa";

import { Link } from "react-router-dom";

export interface PostProps {
  id: string;
  email: string;
  content: string;
  createAt: string;
  uid: string;
  profileUrl?: string;
  likeCount?: number,
  comments?: any;
}

const posts: PostProps[] = [
  {
    id: "1",
    email: "test@test.com",
    content: "내용",
    createAt: "2023-08-30",
    uid: "123456",
    likeCount: 13,
    comments: ["댓글1", "댓글2"],
  },
  {
    id: "2",
    email: "test@test.com",
    content: "내용",
    createAt: "2023-08-30",
    uid: "123456",
    likeCount: 13,
    comments: ["댓글1", "댓글2"],
  },
  {
    id: "3",
    email: "test@test.com",
    content: "내용",
    createAt: "2023-08-30",
    uid: "123456",
    likeCount: 13,
    comments: ["댓글1", "댓글2"],
  },
  {
    id: "4",
    email: "test@test.com",
    content: "내용",
    createAt: "2023-08-30",
    uid: "123456",
    likeCount: 13,
    comments: ["댓글1", "댓글2"],
  },
  {
    id: "5",
    email: "test@test.com",
    content: "내용",
    createAt: "2023-08-30",
    uid: "123456",
    likeCount: 13,
    comments: ["댓글1", "댓글2"],
  },
];

export default function HomePage() {

  const handleFileUpload = () => {
    console.log('file upload!');
  }

  return (
    <div className="home">
      <div className="home__title">Home</div>
      <div className="home__tabs">
        <div className="home__tab home__tab--active">For You</div>
        <div className="home__tab">Following</div>
      </div>
      <form action="" className="post-form">
        <textarea
          className="post-form__textarea"
          required
          name="content" 
          id="content"
          placeholder="What is happening?"
        />
        <div className="post-form__submit-area">
          <label htmlFor="file-input" className="post-form__file">
            <FiImage className="post-form__file-icon" />
          </label>
          <input type="file" name="file-input" accept="iamge/*" onChange={handleFileUpload} className="hidden" />
          <input type="submit" value="Tweet" className="post-form__submit-btn" />
        </div>
      </form>
      {/* Tweet Posts */}
      <div className="post">
        { posts?.map((post: PostProps) => {
          return (
            <div className="post-box" key={ post?.id }>
              <div className="post-box__info--flex">
                <div className="post__profile-img">
                  <FaRegUserCircle className="post__profile-icon" />
                  {/* <img src="" alt="" /> */}
                </div>
                <div className="post-box__user-email">{ post?.email }</div>
                <div className="post-box__createdAt">{ post?.createAt }</div>
              </div>
              <Link to={`/posts/${post?.id}`}>
                <div className="post-box__content">{ post?.content }</div>                
              </Link>
              <div className="post-box__footer--flex">
                <div className="post-box__comments">
                  <FaRegComment />
                  <div>{ post?.comments?.length }</div></div>
                <div className="post-box__likes">
                  <FaRegHeart />
                  <div>{ post?.likeCount }</div></div>
                <button type="button" className="post-box__edit-btn">수정</button>
                <button type="button" className="post-box__remove-btn">삭제</button>
              </div>
            </div>
          )
        }) }
      </div>
    </div>  
  )
}