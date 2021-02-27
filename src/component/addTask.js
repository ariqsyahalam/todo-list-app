import styled from "styled-components";
import React from "react";
import { Input } from "semantic-ui-react";
import { Button, Icon, Label } from 'semantic-ui-react'

export const AddTask = (props) => {
  const { title, date } = props;

  return (
    <>
      <Styled>
        <div className="wrapper">
          <div className="taskname">
            <div className="taskname-title">
              <p>Task Name</p>
            </div>
            <div className="taskname-input">
              <div class="ui icon input name-input">
                <input type="text" placeholder="New Activity" />
                {/* <i aria-hidden="true" class="search icon"></i> */}
              </div>
            </div>
          </div>
          <div className="duedate">
            <div className="duedate-title">
              <p>Due Date</p>
            </div>
            <div className="duedate-input">
              <div class="ui icon input date-input">
                <input type="date" placeholder="Search..." />
                {/* <i aria-hidden="true" class="search icon"></i> */}
              </div>
            </div>
          </div>
          <div className="addtask-button">
            <Button icon>
              <Icon name="plus" />
              Add Task
            </Button>
          </div>
        </div>
      </Styled>
    </>
  );
};

export const Styled = styled.div`
  .wrapper {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 16px;
    grid-auto-rows: 100px;
    grid-template-areas: "a a a a b b b c";
    align-items: start;

    .taskname {
      width: 100%;
      height: 100%;
      grid-area: a;
      .taskname-title {
        font-size: 24px;
        color: #414141;
        line-height: 31.68px;
        margin: 0;
        font-weight: bold;
      }
      .taskname-input {
        .name-input {
          width: 100%;
        }
      }
    }
    .duedate {
      width: 100%;
      height: 100%;
      grid-area: b;
      .duedate-title {
        font-size: 24px;
        color: #414141;
        line-height: 31.68px;
        margin: 0;
        font-weight: bold;
      }
      .duedate-input {
        .date-input {
          width: 100%;
        }
      }
    }
    .addtask-button {
      width: 100%;
      height: 100%;
      grid-area: c;
      align-items: center;
      vertical-align: middle;
      display: flex;
    }
  }
`;
