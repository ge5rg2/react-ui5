import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserInfo = () => {
  const params = useParams().id;

  useEffect(() => {
    console.log(params);
  }, []);

  return (
    <>
      <div>He</div>
    </>
  );
};

export default UserInfo;

/**
 * ToDo
 * body값으로 params 던지기
 * cpi 호출로 가져올 때 groovy script 사용 필터링
 * c4c employee에서 해당 obj id 에 맞는 정보 전부를 가져와서 뿌리기
 *  */
