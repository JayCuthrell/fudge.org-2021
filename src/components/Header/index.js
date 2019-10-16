import React from 'react';
import userConfig from '../../../config';

import Container from '../Container';
import HeaderImage from '../HeaderImage';
import Social from '../Social';
import P from './P';
import Wrapper from './Wrapper';

function Header({ config }) {
  const { author, mainurl, description, social } = config;

  return (
    <Container>
      <Wrapper>
        {userConfig.showHeaderImage && (
          <HeaderImage/>
        )}
        <P>{description} by <a href={mainurl} target="_blank" rel="noopener noreferrer">{author}</a></P>
        {social &&
          <Social
            website={social.website}
            github={social.github}
            twitter={social.twitter}
            linkedin={social.linkedin}
          />
        }
      </Wrapper>
    </Container> 
  );
}

export default Header;
