import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import "./SkillContentStyles.css"

export const Calender = () => {
  return (
    <div className='calenderDiv'>
      <h1>Github Calender</h1>
      <div className='calender'>
        <GitHubCalendar color="#fdd641"  username="sahilkumar26244"/>
      </div>
    </div>
  )
}