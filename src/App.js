import './App.css';
import React  from 'react';

function App() {
  const [selected,setSelected] = React.useState({});

  const symbolBook = {
  "๐ฏ" : "Hundred Points",
  "๐ข" :  "Anger Symbol",
  "๐ฌ" :  "Speech Balloon",
  "๐๏ธโ๐จ๏ธ" :  "Eye in Speech Bubble",
  "๐จ๏ธ" : "Left Speech Bubble",
  "๐ฏ๏ธ" : "Right Anger Bubble",
  "๐ญ" :"Thought Balloon",
  "๐ค" : "Zzz",
  "๐ฎ" : "Litter in Bin Sign",
  "๐ฐ" : "Potable Water",
  "โฟ" : "Wheelchair Symbol",
  "๐น"  : "Menโs Room",
  "๐บ" : "Womenโs Room",
  "๐ป" : "Restroom",
  "๐ผ" : "Baby Symbol",
  "๐พ" : "Water Closet",
  "โ ๏ธ" : "Warning",
  "๐ธ" : "Children Crossing",
  "โ" : "No Entry",
  "๐ซ" : "Prohibited",
  "๐ณ" : "No Bicycles",
  "๐ญ" :"No Smoking",
  "๐ฏ" : "No Littering",
  "๐ฑ" : "Non-Potable Water",
  "๐ท" :  "No Pedestrians",
  "๐ต" : "No Mobile Phones",
  "๐" :  "No One Under Eighteen",
  "โข๏ธ" : "Radioactive",
  "โฃ๏ธ" : "Biohazard",
  "๐ฑ" : "Currency Exchange",
  "๐ฒ" : "Heavy Dollar Sign",
  "โ๏ธ" : "Medical Symbol",
  "โป๏ธ" : "Recycling Symbol",
  "โ๏ธ ": "Fleur-de-lis",
  "๐ฑ" :"Trident Emblem",
  "๐" :  "Name Badge",
  "๐ฐ" : "Japanese Symbol for Beginner",
  "โฐ" : "Curly Loop",
  "โฟ" : "Double Curly Loop",
  "ใฝ๏ธ"  : "Part Alternation Mark",
  "ยฉ๏ธ" : "Copyright",
  "ยฎ๏ธ" : "Registered",
  "โข๏ธ" : "Trade Mark",
  "๐" :"SOS Button",
  "๐" :  "Up! Button",
  "๐" :"Vs Button"
  }

  const symbols = Object.keys(symbolBook);

  const handler = (ele) => {
    let meaning = symbolBook[ele]
    if(meaning){
      setSelected({"symbol" : ele, "meaning" : meaning})
    }
  }

  return (
    <div className="App">
      <h1>Symbol Interprator</h1>
      <h3>Select a symbol from the following</h3>
      <div className="symbol-list">
        {
          symbols.map((ele) =>  (<span key={ele} className="symbol" onClick={()=>handler(ele)}>{ele}</span>))
        }
      </div>
      <div style={{fontSize : "x-large"}}>
        {
          Object.keys(selected).length ? <p> {selected.symbol}  : {selected.meaning}</p> : null
        }
      </div>
    </div>
  );
}

export default App;
