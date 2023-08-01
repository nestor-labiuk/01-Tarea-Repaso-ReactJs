import React from 'react'
import NewsArticle from './NewsArticle'
import dataNews from '../data/Novedades.json'

export default function News() {
  return (
    <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom text-white">NOVEDADES</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <NewsArticle data={dataNews}/>
        </div>
      </div>
  )
}
