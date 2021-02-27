import styled from "styled-components";


export const Subtitle = () => {
  return (
    <>
      <Styled>
        <div className="wrapper">
            <p className="subtitle">
                Organize your task better
            </p>
        </div>
      </Styled>
    </>
  );
};

export const Styled = styled.div`
    .wrapper{
        padding : 16px 0px;
        .subtitle{
            font-size: 48px;
            line-height: 63.84px;
            color: #13293D;
            font-weight: 600;
        }
    }
`;
