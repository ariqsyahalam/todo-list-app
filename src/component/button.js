import styled from "styled-components";
// import { ButtonStyled } from "./styled";

export const Button = (props) => {

  const { type, text, onClick, className } = props;

   return (
    <ButtonStyled type={type}>
        <div className={`button-single ${className}`} onClick={onClick}>
          {text}
        </div>
    </ButtonStyled>
  );
};



const color = (type) => {
  switch (type) {
    // case "primary":
    //   return {
    //     fill: "#13293D",
    //     border: "none",
    //     font: "white",
    //   };
    // case "secondary":
    //   return {
    //     fill: "#CC9D1A",
    //     border: "#F1D78E",
    //     font: "black",
    //   };
    // case "success":
    //   return {
    //     fill: "#028F4D",
    //     border: "#03F182",
    //     font: "white",
    //   };
    // case "danger":
    //   return {
    //     fill: "#EE200C",
    //     border: "#FAA299",
    //     font: "white",
    //   };
    // case "outline":
    //   return {
    //     fill: "transparent",
    //     border: "#FFFFFF",
    //     font: "#FFFFFF",
    //   };
    // case "active":
    //   return {
    //     fill: "#FFFFFF",
    //     border: "#FFFFFF",
    //     font: "#000000",
    //   };
    default:
      return {
        fill: "#13293D",
        border: "none",
        font: "white",
      };
  }
};

export const ButtonStyled = styled.div`
  .button-wrapper { // tebal bordernya
    border-radius: 8px;
    width: 154px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => color(props.type).border};
    cursor: pointer;
    &:hover {
      filter: drop-shadow(2px 4px 8px rgba(119, 119, 119, 0.4)) brightness(95%);
    }
    .button-inside {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      /* border: 1.5px solid #000000; */
      border-radius: 4px;
      height: 100%;
      width: 100%;
      background-color: ${(props) => color(props.type).fill};
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 31.68px;
      color: ${(props) => color(props.type).font};
    }
  }

  .button-single {
    /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5)); */
    padding: 8px 16px;
    color: ${(props) => color(props.type).font};
    background: ${(props) => color(props.type).fill};
    border: 2px solid ${(props) => color(props.type).border};
    border-radius: 8px;
    width: fit-content;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
