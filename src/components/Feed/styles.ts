import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 38px 82px;

  > h1 {
    font-size: 21px;
    letter-spacing: -2px;
    margin-bottom: 15px;
  }
`;

export const VideoWrapper = styled.div`
  display: flex;

  align-content: flex-start;

  flex-wrap: wrap;
`;

export const Video = styled.div`
  margin-bottom: 35px;

  margin-right: 30px;
`;

export const Thumbnail = styled.div`
  width: 345px;
  height: 200px;

  background: var(--content);
`;

export const ChannelInfo = styled.div`
  display: flex;

  margin-top: 12px;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;

  border-radius: 50%;
  background: var(--content);
`;

export const MoreInfo = styled.div`
  margin-left: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 18px;
  }

  > span {
    margin-top: 8px;
    font-size: 15px;
    color: var(--gray);
  }

  > ul {
    display: flex;
    margin-top: 2px;
    flex: 1;
    color: var(--gray);
    align-items: center;
    list-style: none;
    justify-content: flex-start;
  }
`;

export const Dot = styled.div`
  width: 4px;
  height: 4px;

  border-radius: 50%;

  background: var(--content);
  margin: 0 10px;
`;
