import React from "react"
import Button from "./button"

export default function App(){

  const [value,setValue] = React.useState("0")
  const [operator,setOperator] = React.useState(null)
  const [previous,setPrevious] = React.useState(null)

    const handleClick = content => () =>{
      const num = parseFloat(value)

        if(content==="AC"){
          setValue("0")
          setOperator(null)
          setPrevious(null)
          return;
        }else if(content==="+/-"){
          setValue((num * -1).toString())
          setOperator(null)
          setPrevious(null)
          return;
        }
        else if(content==="."){
          setValue(value + ".")
          return;
        }
        else if(content==="%"){
          setValue((num/100).toString())
          setOperator(null)
          setPrevious(null)
          return;
        }
        else if(content==="+"){
          setOperator("+")
          setPrevious(parseFloat(value))
          setValue("0")
          return;
        }else if(content==="-"){
          setOperator("-")
          setPrevious(parseFloat(value))
          setValue("0")
          return;
        }else if(content==="x"){
          setOperator("x")
          setPrevious(parseFloat(value))
          setValue("0")
          return;
        }else if(content==="÷"){
          setOperator("÷")
          setPrevious(parseFloat(value))
          setValue("0")
          return;
        }else if(content==="="){
          if(!operator){
            return;
          }
          else if(operator==="+"){
            setValue((previous + parseFloat(value)).toString())
            return;
          }else if(operator==="-"){
            setValue((previous - parseFloat(value)).toString())
            return;
          }else if(operator==="÷"){
            setValue((previous / parseFloat(value)).toString())
            return;
          }else if(operator==="x"){
            setValue((previous * parseFloat(value)).toString())
            return;
          }
          setOperator(null)
          setPrevious(null)
        }
        
        if (value[value.length-1]==="."){
          setValue(value + content);
        }else{
          setValue(parseFloat(num +content).toString())
        }

    };

  return (
    <div className="calculator">
        <div className="top"></div>
        <div className="result">{value}</div>
        <div className="button">
          <Button onPress={handleClick} content="AC" type="func" />
          <Button onPress={handleClick} content="+/-" type="func" />
          <Button onPress={handleClick} content="%" type="func" />
          <Button onPress={handleClick} content="÷" type="oper" />
          <Button onPress={handleClick} content="7" type="" />
          <Button onPress={handleClick} content="8" type="" />
          <Button onPress={handleClick} content="9" type="" />
          <Button onPress={handleClick} content="x" type="oper" />
          <Button onPress={handleClick} content="4" type="" />
          <Button onPress={handleClick} content="5" type="" />
          <Button onPress={handleClick} content="6" type="" />
          <Button onPress={handleClick} content="-" type="oper" />
          <Button onPress={handleClick} content="1" type="" />
          <Button onPress={handleClick} content="2" type="" />
          <Button onPress={handleClick} content="3" type="" />
          <Button onPress={handleClick} content="+" type="oper" />
          <Button onPress={handleClick} content="0" type="" />
          <Button onPress={handleClick} content="." type="" />
          <Button onPress={handleClick} content="=" type="oper" />
        </div>
    </div>
  )
}