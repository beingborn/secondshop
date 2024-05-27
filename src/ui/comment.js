import React from "react";
import styled from "styled-components";

const commentList = [
  { user: "penguin", content: "그러셨군요" },
  { user: "penguin2", content: "그러셨군요2" },
  { user: "penguin33", content: "그러셨군요3" },
];

const TodoTemplateBlock = styled.div`
  width: 800px;
  height: auto;
  border: 1px solid blue;
  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;

const Comment = styled.span`
  color: #000;
`;

function TodoTemplate({ children }) {
  return (
    <TodoTemplateBlock>
      {children}
      {commentList.map((item, i) => {
        return (
          <div className="comment" key={i}>
            <Comment className="user">{item.user}</Comment>
            <Comment className="content">{item.content}</Comment>
          </div>
        );
      })}
    </TodoTemplateBlock>
  );
}

export default TodoTemplate;