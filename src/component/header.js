import styled from "styled-components";
import bookmark from "./assets/bookmark.png";

export const HeaderTitle = () => {

  return (
    <>
      <Styled>
        <div className="header-wrapper">
          <p className="title">Todo List</p>
          <img src={bookmark} alt="icon" className="icon" />
        </div>
      </Styled>
    </>
  );
};

export const Styled = styled.div`
.header-wrapper{
    background-color: #13293D;
    display: flex;
    padding: 0 15%;
    
    .title {
        font-size: 96px;
        line-height: 120px;
        font-style: normal;
        font-weight: bold;
        color: white;
        margin: 0;
        padding-top: 89px;
    }
    .icon{
        /* width: 66.5px; */
        height: 76px;
        margin-top: 116px;
        padding-left: 32px;
    }
}

`;
