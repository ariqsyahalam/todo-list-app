import styled from "styled-components";

export const Filter = () => {
  return (
    <>
      <Styled>
        <div className="wrapper">
          <div className="searchbar">
            <div class="ui icon input">
              <input type="text" placeholder="Search..." />
              <i aria-hidden="true" class="search icon"></i>
            </div>
          </div>
          <div className="filter"></div>
        </div>
      </Styled>
    </>
  );
};

export const Styled = styled.div`
  .wrapper {
      height: fit-content;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 10px;
    /* grid-auto-rows: 100px; */
    grid-template-areas: "a a a a a b c c c";
    align-items: start;
    .searchbar {
      width: 100%;
      grid-area: a;
      .input {
        width: 100%;
      }
    }
  }
`;
