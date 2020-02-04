import React, { useState } from 'react';
import { Comments } from '../../store/AllComments/constants';
import * as P from './Parts';
import Comment from '../../components/Comment';
import { isCommentChosen } from './helpers';

interface HomeProps {
  allComments: Comments;
  chosenComments: Comments;
}

const Home: React.FC<HomeProps> = ({
  allComments,
  chosenComments,
}) => {
  const [displayNumber, setDisplayNumber] = useState<number>(20);

  const onShowMore = () => setDisplayNumber(displayNumber + 10);

  return (
    <>
      {allComments.slice(0, displayNumber).map((comment, index) => {
        const isChosen = isCommentChosen(chosenComments, comment);
        return (
          <Comment 
            key={index} 
            number={index} 
            comment={comment} 
            isChosen={isChosen}
          />
        )
      })}
      <P.ButtonWrapper>
        <P.StyledButton renderType={'secondary'} onClick={onShowMore}>Pokaż więcej</P.StyledButton>
      </P.ButtonWrapper>
    </>
  );
}

export default Home;