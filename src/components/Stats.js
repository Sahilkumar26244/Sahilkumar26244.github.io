import React from 'react'
import "./SkillContentStyles.css"

export const Stats = () => {
  return (
    <div className='statsDiv'>
    <h1>Github Stats</h1>
    <div className='stats'>
      <img align="center" src="https://github-readme-stats.vercel.app/api?username=sahilkumar26244&show_icons=true&include_all_commits=true&count_private=true&hide=issues,contribs&border_radius=0&locale=en&theme=dark" alt="mukulsomukesh" height={"139px"}  />
      <img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=sahilkumar26244&layout=compact&exclude_repo=Lybrate-Website-Clone-Version-2.0,Lybrate-Website-Clone,Adidas-Clone&hide=Shell&border_radius=0&theme=dark" alt="mukulsomukesh"  height={"139px"} />
    </div>
    
    </div>
  )
}