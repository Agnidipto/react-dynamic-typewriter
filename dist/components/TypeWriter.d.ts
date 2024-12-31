import React from "react";
import './TypeWriter.css';
interface TypeWriterProps {
    content?: string[];
    writeSpeed?: number;
    deleteSpeed?: number;
    waitTime?: number;
    delayToStart?: number;
    delay?: number;
}
declare function MemoizedTypeWriter({ content, writeSpeed, deleteSpeed, waitTime, delay }: TypeWriterProps): React.JSX.Element;
export default MemoizedTypeWriter;
