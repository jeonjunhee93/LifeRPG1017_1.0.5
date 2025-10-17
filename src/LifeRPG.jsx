import React from 'react'
import silhouette from '/mnt/data/file_00000000691061fa83a2db065aee4ac7.png'

export default function LifeRPG() {
  return (
    <div className="app">
      <div className="silhouette-container">
        <img src={silhouette} alt="silhouette" />
        <div className="slot weapon">무기</div>
        <div className="slot shield">방패</div>
        <div className="slot armor">갑옷</div>
        <div className="slot ring">반지</div>
      </div>
    </div>
  )
}