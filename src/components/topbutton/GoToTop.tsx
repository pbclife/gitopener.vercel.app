import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

const GoToTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const GoToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }


  const listenToScroll = () => {
    const downScroll = document.body.scrollTop || document.documentElement.scrollTop
    const heightToHidden = 250;
    if (downScroll > heightToHidden) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
  }, [])

  return (

    <Wrapper>
      {isVisible && (
        <div className='top-btn' onClick={GoToBtn}>
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
display: flex;
justify-content: center;
align-items: center;

.top-btn{
  font-size: 1.5rem;
  font-weight: bold;
  width: 3rem;
  height: 3rem;
  color: #fff;
  background-color: #DC4A78;
  border-radius: 50%;
  position: fixed;
  bottom: 3rem;
  right: 5rem;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

}

@media screen and (max-width:750px) {
  .top-btn{
      bottom: 1rem;
      right: 1rem;
  }
}
`;
export default GoToTop;