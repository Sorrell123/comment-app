import React from 'react';
import { Comments } from '../../store/AllComments/constants';
import ChosenComment from '../../components/ChosenComment';
import * as P from './Parts';
import HomePageLink from '../../components/HomePageLink';

interface ChosenCommentsProps {
  chosenComments: Comments;
}

const ChosenComments: React.FC<ChosenCommentsProps> = ({ chosenComments }) => (
  <React.Fragment>
    {chosenComments.length === 0 ? (
      <P.Title>Dodaj swój pierwszy komentarz do ulubionych</P.Title>
    ) : (
      chosenComments.map((comment, index) => (
        <ChosenComment key={index} number={index} comment={comment}  />
      ))
    )}
    <P.HomePageLinkWrapper>
      <HomePageLink />
    </P.HomePageLinkWrapper>
  </React.Fragment>
);

export default ChosenComments;