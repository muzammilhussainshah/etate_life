import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{
      padding: `0 ${chevronWidth}px`,padding:"5%",width: "100%", background: "red",
      display:"flex",justifyContent:"center"}} className="mb-4">
        <div style={{width: "70%", background: "orange",}}>

      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div  style={{width:200,background:"blue"}}>
          <div>
            <img style={{ width: 170, }} src={require("../assets/patientregister.png")} alt="aaaa" />
          </div>
          <div style={{textAlign:"center"}}>
            Step 1
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage  book.
                                </div>
        </div>
        <div style={{width:200,background:"blue"}}>
          <div>
            <img style={{ width: 170, }} src={require("../assets/qrcode.png")} alt="aaaa" />
          </div>
          <div style={{textAlign:"center"}}>
            Step 2
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage  book.
                                </div>
        </div>
        <div style={{width:200,background:"blue"}}>
          <div>
            <img style={{ width: 170, }} src={require("../assets/bookatime.png")} alt="aaaa" />
          </div>
          <div  style={{textAlign:"center"}}>
            Step 3
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage  book.
                                </div>
        </div>
        <div style={{width:200,background:"blue"}}>
          <div>
            <img style={{ width: 170, }} src={require("../assets/reminders.png")} alt="aaaa" />
          </div>
          <div style={{textAlign:"center"}}>
            Step 4
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage  book.
                                </div>
        </div>
        <div style={{width:200,background:"blue"}}>
          <div>
            <img style={{ width: 170, }} src={require("../assets/reminders.png")} alt="aaaa" />
          </div>
          <div style={{textAlign:"center"}}>
            Step 5
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage  book.
                                </div>
        </div>
      </ItemsCarousel>
    </div>
    </div>
  );
};


