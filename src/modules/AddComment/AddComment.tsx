import React, { useState } from 'react';
import HomePageLink from '../../components/HomePageLink';
import AddCommentForm from './AddCommentForm';
import * as P from './parts';

const AddComment: React.FC = () => {
  const [commentCreated, setComentCreated] = useState<boolean>(false);

  const onClikNewCommen = () => setComentCreated(false);

  return (
    commentCreated ? (
      <React.Fragment>
        <P.Title>Twój komentarz został dodany</P.Title>
        <P.ButtonWrapper>
          <HomePageLink />
          <P.StyledButton renderType={'primary'} onClick={onClikNewCommen}>Dodaj kolejny</P.StyledButton>
        </P.ButtonWrapper>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <P.Title>Dodaj swój komentarz</P.Title>
        <AddCommentForm setComentCreated={setComentCreated} />
        <P.HomePageLinkWrapper>
          <HomePageLink />
        </P.HomePageLinkWrapper>
      </React.Fragment>
    )
  );
};

export default AddComment;