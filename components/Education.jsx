import React from "react";

export default function Education() {
  return (
    <div  className={` my-4 rounded-lg p-(--main-padding) card
        `}>
<h1 className='title'>التعليم</h1>
    <div
      className={`
        flex flex-col
        `}
    >
        <span className={`main-font-size font-bold`}>بكالوريوس محاسبة</span>
        <span className={`sub-font-size`}>جامعة الملك سعود</span>
        <span className={`sub-font-size`}>التقدير: إمتياز مع مرتبة الشرف الأولى</span>
        <span className={`sub-font-size`}>سنة التخرج: 2013</span>
    </div>
    </div>
  );
}
