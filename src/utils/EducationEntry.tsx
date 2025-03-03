// import React from 'react';


// const EducationEntry = ({ degree, institution, period, thesis, supervisor, href, supervisorLink, supervisorName, thesisLink }) => (
//   <div className="py-6 first:pt-0 last:pb-0">
//     <div className="flex flex-col md:flex-row gap-4">
//       <div className="w-24 font-semibold text-gray-800">{degree}</div>
//       <div className="flex-1 space-y-2">
//         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
//           <a
//             href={href}
//             className="text-lg hover:text-skin-accent transition-colors"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {institution}
//           </a>
//           <span className="text-sm text-gray-600">{period}</span>
//         </div>

//         {(thesis || supervisor) && (
//           <div className="mt-2 space-y-1 text-sm text-gray-600 italic">
//             {thesis && (
//               <div>
//                 <span className="font-medium">Thesis: </span>
//                 <a
//                   href={thesisLink}
//                   className="hover:text-skin-accent transition-colors"
//                 >
//                   {thesis}
//                 </a>
//               </div>
//             )}

//             {supervisor && (
//               <div>
//                 <span className="font-medium">Supervisor: </span>
//                 <a
//                   href={supervisorLink}
//                   className="hover:text-skin-accent transition-colors"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {supervisorName}
//                 </a>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   </div>
// );

// const EducationSection = () => {
//   const educationData = [
//     {
//       degree: "Ph.D.",
//       institution: "Nanyang Technological University, Singapore",
//       period: "2025.01 - Present",
//       href: "http://ntu.edu.sg",
//       supervisor: true,
//       supervisorLink: "https://blogs.ntu.edu.sg/chau-yuen/",
//       supervisorName: "Prof. Chau Yuen"
//     },
//     {
//       degree: "M.Eng.",
//       institution: "Peking University",
//       period: "2018.09 - 2021.07",
//       href: "http://english.pku.edu.cn",
//       thesis: "Multi-feature Simultaneous Localization and Mapping with coplanar constraints",
//       thesisLink: "/pubs/master_thesis/MatserThesis.pdf",
//       supervisor: true,
//       supervisorLink: "https://www.ss.pku.edu.cn/teacherteam/teacherlist/1652-%E6%9E%97%E9%87%91%E9%BE%99.html",
//       supervisorName: "Prof. Jinlong Lin (林金龙)"
//     },
//     {
//       degree: "B.Eng.",
//       institution: "Northeastern University (CN)",
//       period: "2014.09 - 2018.07",
//       href: "https://www.neuq.edu.cn/"
//     }
//   ];

//   return (
//     <section className="py-12" id="education">
//       <h2 className="text-2xl font-bold mb-8">Education</h2>
//       <div className="divide-y border rounded-lg bg-white shadow-sm">
//         {educationData.map((entry, index) => (
//           <EducationEntry
//             key={index}
//             {...entry}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default EducationSection;