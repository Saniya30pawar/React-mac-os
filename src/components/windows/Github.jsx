import React from 'react'
import githubData from "../../assets/github.json" 
import MacWindow  from './MacWindow'
import "./Github.scss"
const GitCard = ({ data = {
    id:1 , image : "" , title : "" , description : "" , tags:[] , repolink : "" , demolink : "" } }) => {
       return <div className="card">

        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p>{data.description}</p>

        <div className="tags">
            { 
              data.tags.map((tag, idx) => <p className='tag' key={tag + idx}>{tag}</p>)
            }
        </div>

    <div className="urls">
       <a href={data.repolink}>Repository</a>
       <a href={data.demolink}>Demo link</a>

    </div>

       </div> 
}

const Github = () => {
  return (
    <MacWindow>
      <div className='cards'>
        {githubData.map((project, index) => {
          return <GitCard key={project.id || index} data={project} />
        })}
      </div>
    </MacWindow>
  )
}

export default Github