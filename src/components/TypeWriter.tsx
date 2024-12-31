import React, { useEffect, useState, useMemo, useCallback, useRef } from "react";
import './TypeWriter.css'

interface TypeWriterProps {
  content?: string[]
  writeSpeed?: number
  deleteSpeed?: number
  waitTime?: number
  delayToStart? : number
  delay?: number
}

function TypeWriter({content = [], writeSpeed = 1000, deleteSpeed = 200, waitTime = 4000, delay = 200, delayToStart = 0}: TypeWriterProps) {
  const [displayedMessage, setDisplayedMessage] = useState('')
  const [isWriting, setIsWriting] = useState(false) // 1 is for writing, 0 is for deleting
  const [contentIndex, setContentIndex] = useState(0)
  const [startDelay, setStartDelay] = useState(delayToStart)
  const [intervalToClear, setIntervalToClear] = useState<NodeJS.Timeout|null>(null)

  const clearCurrentInterval = useCallback(() => {
    if(intervalToClear) clearInterval(intervalToClear)
  }, [intervalToClear])

  const updateContentIndex = useCallback(() => {
    setContentIndex(prev => prev>=content.length-1? 0:prev+1)
  }, [content.length])

  function startWriting() {
    if (content.length === 0) return
    var index = 0
    const currentText = content[contentIndex]

    if (!currentText) {
      clearCurrentInterval();
      updateContentIndex()
      setIsWriting(false)
      return
    }

    const interval = setInterval(() => {
      if (index >= currentText.length) {
        clearInterval(interval);
        if (content.length > 1) {
          setTimeout(() => {
            updateContentIndex()
            setIsWriting(false)
          }, waitTime)
        }
      }
      else {
        setDisplayedMessage(prev => prev+currentText[index-1])
        index ++;
      }
    }, writeSpeed)
    setIntervalToClear(interval)
  }

  function startDeleting() {
    var index = displayedMessage.length
    if (content.length === 1 && displayedMessage === content[0]) return
    const interval = setInterval(() => {
      if (index === 0 ) {
        clearInterval(interval);
        setTimeout(() => {
          setIsWriting(true)
        }, delay)
      }
      else {
        setDisplayedMessage((displayedMessage) => { 
          return displayedMessage.substring(0, index-1)})
        index --;
      }
    }, deleteSpeed)
  }

  useEffect(() => {
    if (startDelay === 0) {
      if (isWriting) startWriting()
      else startDeleting()
    }
    
  }, [isWriting])

  useEffect(() => {
    clearCurrentInterval()
    if (content.length > 0) {
      setContentIndex(0)
      setTimeout(() => {
        setStartDelay(0)
        if(isWriting) setIsWriting(false)
        else startDeleting()
      }, startDelay)
    }   
     
  }, [content])

  return <>
    {displayedMessage.split('\n').map((part, index) => 
    <span key={part}>{part}{index === displayedMessage.split('\n').length - 1 ? null : <br/>} </span>)}
    <span className="blinking-cursor">|</span>
  </>
}

function MemoizedTypeWriter({content = [], writeSpeed = 1000, deleteSpeed = 200, waitTime = 4000, delay = 0}: TypeWriterProps) {
  const Child = useMemo(() => 
  <TypeWriter content={content} writeSpeed = {writeSpeed} deleteSpeed = {deleteSpeed} waitTime = {waitTime} delay={delay}/>, 
  [content, writeSpeed, deleteSpeed, waitTime, delay])

  return <>{Child}</>
}

export default MemoizedTypeWriter