import React from 'react'

interface ProgressProps {
  bgcolor: string;
  progress: number;
  height: number;
}
 
const Progress_bar = ({bgcolor,progress,height}: ProgressProps) => {
    
    const Parentdiv = {
        height: height,
        width: 400,
        borderRadius: 40,
        margin: 0,
        marginLeft: -200,
        marginTop: 7,
        backgroundColor: 'grey'
      }
     
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius:40,
        textAlign: 'right',
        marginTop: 0,
        marginLeft: -3
      }
     
      const progresstext = {
        padding: 0,
        color: 'orange',
        fontWeight: 900
      }
       
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
      </div>
    </div>
    )
}
 
export default Progress_bar;