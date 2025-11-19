import React from "react";

const tecSkills = ['التحليل المالي', 'إعداد التقارير المالية', 'إدارة الحسابات العامة']
const softSkills = ['التواصل', 'العمل ضمن فريق', 'إدارة الوقت']


export default function Skills() {
  return (
    <div className=" my-4 rounded-lg p-(--main-padding) card">
<h1 className='title'>المهارات</h1>
    <div className={`
    flex flex-col items-center gap-5
    `}>
      <div className="tec skills">
        <span className="block text-center text-xl font-semibold my-7 mx-auto p-1 w-[250px] bg-gray-200/70"> المهارات التقنية </span>
        <ul className="flex items-center gap-3 flex-wrap">
         {tecSkills.map((t,idx)=>(
          <li className={`sub-font-size even:bg-violet-100 odd:bg-cyan-100
            rounded-md p-1`} key={idx}>{t}</li>
         ))}
        </ul>
      </div>
      <div className="soft skills">
        <span className="block text-center text-xl font-semibold my-7 mx-auto p-1 w-[250px] bg-gray-200/70"> المهارات الناعمة </span>
        <ul className="flex items-center gap-3 flex-wrap">
          {softSkills.map((s,idx)=>(
          <li className={`sub-font-size even:bg-violet-100 odd:bg-cyan-100
            rounded-md p-1`} key={idx}>{s}</li>
         ))}
        </ul>
      </div>
    </div>
    </div>
  );
}
