import React from "react";
import { AiFillLinkedin, AiOutlineGithub, AiFillYoutube, } from 'react-icons/ai'
export function Icons({}) {
  return (
    <>
      <a
        href="https://www.linkedin.com/in/victor-ezekiel-819992236/"
        target="_blank"
        id="linkedin__icon"
      >
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/McEazy2700" target="_blank" id="github__icon">
        <AiOutlineGithub />
      </a>
      <a
        href="https://www.youtube.com/channel/UCwxNAVNg93wwKsWW9gGpipA"
        target="_blank"
        id='youtube__icon'
      >
        <AiFillYoutube />
      </a>
    </>
  );
}
