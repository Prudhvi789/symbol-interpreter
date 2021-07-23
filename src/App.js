import './App.css';
import React  from 'react';

function App() {
  const [selected,setSelected] = React.useState({});

  const symbolBook = {
  "💯" : "Hundred Points",
  "💢" :  "Anger Symbol",
  "💬" :  "Speech Balloon",
  "👁️‍🗨️" :  "Eye in Speech Bubble",
  "🗨️" : "Left Speech Bubble",
  "🗯️" : "Right Anger Bubble",
  "💭" :"Thought Balloon",
  "💤" : "Zzz",
  "🚮" : "Litter in Bin Sign",
  "🚰" : "Potable Water",
  "♿" : "Wheelchair Symbol",
  "🚹"  : "Men’s Room",
  "🚺" : "Women’s Room",
  "🚻" : "Restroom",
  "🚼" : "Baby Symbol",
  "🚾" : "Water Closet",
  "⚠️" : "Warning",
  "🚸" : "Children Crossing",
  "⛔" : "No Entry",
  "🚫" : "Prohibited",
  "🚳" : "No Bicycles",
  "🚭" :"No Smoking",
  "🚯" : "No Littering",
  "🚱" : "Non-Potable Water",
  "🚷" :  "No Pedestrians",
  "📵" : "No Mobile Phones",
  "🔞" :  "No One Under Eighteen",
  "☢️" : "Radioactive",
  "☣️" : "Biohazard",
  "💱" : "Currency Exchange",
  "💲" : "Heavy Dollar Sign",
  "⚕️" : "Medical Symbol",
  "♻️" : "Recycling Symbol",
  "⚜️ ": "Fleur-de-lis",
  "🔱" :"Trident Emblem",
  "📛" :  "Name Badge",
  "🔰" : "Japanese Symbol for Beginner",
  "➰" : "Curly Loop",
  "➿" : "Double Curly Loop",
  "〽️"  : "Part Alternation Mark",
  "©️" : "Copyright",
  "®️" : "Registered",
  "™️" : "Trade Mark",
  "🆘" :"SOS Button",
  "🆙" :  "Up! Button",
  "🆚" :"Vs Button"
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
