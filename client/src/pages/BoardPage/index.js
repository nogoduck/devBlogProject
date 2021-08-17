import { withRouter } from 'react-router-dom';
import {
  Container,
  BoardPath,
  Table,
  WriteButton,
  Loading,
  Title,
  BoardTitle,
  PagingContainer,
} from './styleds';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { changeTime, pagiNation, pagiTotalCalc2 } from '../../utils/Time';
import PulseLoader from 'react-spinners/PulseLoader';
// import { postMacro } from '../../utils/Macro';

function BoardPage({ history }) {
  const user = useSelector((state) => state.user);

  const [posts, setPosts] = useState('');
  const [boardCnt, setBoardCnt] = useState(0);
  const totalPageCnt = pagiTotalCalc2(boardCnt);
  const [currentPage, setCurrentPage] = useState(1);
  const paging = pagiNation(totalPageCnt, currentPage);

  useEffect(() => {
    let variable = {
      currentPage: (currentPage - 1) * 10,
    };
    //게시물 가져오는 요청
    axios
      .post('/api/board', variable)
      .then(({ data }) => {
        setPosts(data.board);
      })
      .catch((err) => {
        console.log(err);
      });

    //총 게시물 갯수를 가져오는 요청
    axios
      .post('/api/board/totalcount')
      .then(({ data }) => {
        setBoardCnt(data.total);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onClickCurrentPage = (e) => {
    //게시판 페이지 넘기는 요청
    e.preventDefault();

    setCurrentPage(e.target.value);
    const currentNum = e.target.value;

    let variable = {
      currentPage: (currentNum - 1) * 10,
    };

    axios
      .post('/api/board', variable)
      .then(({ data }) => {
        setPosts(data.board);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickWrite = () => {
    if (!user.authStatus.isAuth) {
      alert('로그인 한 유저만 게시글을 작성할 수 있습니다.');
    } else {
      history.push('/board/write');
    }
  };

  // 테스트 게시글 작성하는 매크로, 인자로 반복 횟수가 들어간다
  // 로그인 후에 정상 등록가능
  // const onClickMacro = () => {
  //   const { nickname, name, email } = user.authStatus;
  //   postMacro(10, nickname, name, email);
  // };

  if (!posts) {
    return (
      <Loading>
        <PulseLoader color="gray" size={8} margin={4} />
      </Loading>
    );
  } else {
    return (
      <Container>
        {/*<button onClick={onClickMacro}>게시글 자동 생성</button>*/}
        <Title>게시판</Title>
        <BoardPath>
          <Link className="board_path" to="/board">
            전체글
          </Link>
          &nbsp;/&nbsp;
          <Link className="board_path" to="/board/hot">
            인기글
          </Link>
          &nbsp;/&nbsp;
          <Link className="board_path" to="/board/optimization">
            최적화
          </Link>
        </BoardPath>
        <Table>
          <tbody>
            {posts &&
              posts.map((post) => {
                return (
                  <tr>
                    <td>
                      <Link to={`/board/${post._id}`}>
                        <BoardTitle>{post.title}</BoardTitle>
                      </Link>
                    </td>
                    <td>{changeTime(post.createdAt)}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        <PagingContainer>
          {paging &&
            paging.map((v) => {
              return (
                <button
                  onClick={onClickCurrentPage}
                  value={v}
                  className={currentPage == v && 'active'}
                >
                  {v}
                </button>
              );
            })}
        </PagingContainer>
        <WriteButton onClick={onClickWrite}>글쓰기</WriteButton>
      </Container>
    );
  }
}

export default withRouter(BoardPage);
