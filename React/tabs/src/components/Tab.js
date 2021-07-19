
import React ,{useState} from 'react'
import style from './style.module.css'

const Tab = () => {
    const [text , setText] = useState("")
    const[Tab0,setTab0]=useState({"text":"this is tab1" , "backColor":"white" , "fontColor":"black"})
    const[Tab1,setTab1]=useState({"text":"this is tab2" , "backColor":"white", "fontColor":"black"})
    const[Tab2,setTab2]=useState({"text":"this is tab3" , "backColor":"white", "fontColor":"black"})
    // const Tab0 = {"text":"this is tab1" , "backColor":"red"} 
    // const Tab1 = {"text":"this is tab2" , "backColor":"orange"}
    // const Tab2 = {"text":"this is tab3" , "backColor":"green"}
    const arr = [Tab0 , Tab1 , Tab2];
    const stylo =(e,tab)=>{
        setText(tab.text);
        arr.filter(t => t.backColor === 'black').map(t => {t.backColor = 'white'; t.fontColor ="black" ; return t});
        tab.backColor="black";
        tab.fontColor="white";
    }
    return (
        <>
        <div className={style.flexo}>
            {
                arr.map((tab, index) =>
                <p key={index} className={style.tab} style = {{backgroundColor: tab.backColor , color:tab.fontColor}} onClick={ (e) => stylo(e, tab) }>{tab.backColor}</p>
                )
            }
        </div>
        <p className={style.paragraph}>{text}</p>
        </>
    )
}

export default Tab
