import React from "react"

export default function button({ onPress, content , type}){
    return(
          <div onClick={onPress(content)} className={`Btn ${content==="0" ? "single" : ""} ${type || ""}`}>{content}</div>
    )
}