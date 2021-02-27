import styled from "styled-components";
import bin from "./assets/trash.png";


export const ActivityCard = (props) => {
  const { title, date } = props;


  return (
    <>
      <Styled>
        <div className="card-wrapper">
          <div className="detailed">
            <p className="title">{title}</p>
            <p className="date">{date}</p>
          </div>
          <div className="button-wrapper">
            {/* <button><img src={bin} alt="delete" onClick={this.myfunction} /></button> */}
            <button className="button">
              <img src={bin} alt="delete" />
            </button>
          </div>
        </div>
      </Styled>
    </>
  );
};

export const Styled = styled.div`
  .card-wrapper {
    margin: 32px 0;
    display: flex;
    flex-direction: grid;
    align-items: flex-start;
    padding: 18px 32px;

    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 10px;
    grid-auto-rows: 100px;
    grid-template-areas: "a a a a a a a a b b";
    align-items: start;
    border:1px solid #C0C0C0;
    border-radius: 8px;

    background-color:#FFFFFF; 


    .detailed {
      width: 100%;
      height: 100%;
      grid-area: a;
      .title {
        color: black;
        font-weight: 600;
        font-size: 34px;
        line-height: 44.2px;
        font-style: normal;
        padding: 8px 0px;
        margin: 0px;
      }
      .date {
        color: #414141;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        font-style: normal;
        padding: 8px 0px;
        margin: 0px;
      }
    }
    .button-wrapper {
      /* width: 100%; */
      height: 100%;
      grid-area: b;
      padding-right:8px;

      .button {
        height: 100%;
        margin: auto 0;
        background-color: transparent;
        border: none;
      }
    }
  }
`;
