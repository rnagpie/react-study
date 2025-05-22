import React from 'react';
// Practice03.css를 공유하거나, Box.js만을 위한 CSS를 따로 만들 수 있습니다.
// 여기서는 Practice03.css를 그대로 사용한다고 가정하고 import 합니다.
// 만약 Box 컴포넌트가 다른 폴더에 있다면 경로를 수정해야 합니다. (예: '../Practice03.css')
import './Practice03.css'; // Practice03.js와 같은 폴더에 있다고 가정

// Box 컴포넌트는 title과 content를 props로 받습니다.
function Box(props) { // TextItem으로 사용하셨다면 function TextItem(props)
  // props로부터 title과 content를 추출(비구조화 할당)합니다.
  // 이 부분이 없으면 'title' is not defined, 'content' is not defined 오류가 발생합니다.
  const { title, content } = props;

  return (
    <div className='textItem'>
      {/* 이제 여기서 title과 content 변수를 사용할 수 있습니다. */}
      <p className='title'>제목 : {title}</p>
      <p>내용 : {content}</p>
    </div>
  );
}

export default TextItem; // TextItem으로 사용하셨다면 export default TextItem;
