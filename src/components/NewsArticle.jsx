import React from 'react'

export default function NewsArticle({ data }) {
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="feature col text-white">
          <h3 className="fs-2">{item.title}</h3>
          <p>{item.description}</p>
          <a href="#" className="text-warning">
            Call to action
          </a>
        </div>
      ))}
    </>
  )
}
