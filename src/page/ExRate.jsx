import {
  Avatar,
  Card,
  CardHeader,
  Icon,
  Text,
  FlexBox,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  FlexBoxDirection,
} from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";
import {
  AnalyticalCard,
  NumericSideIndicator,
  AnalyticalCardHeader,
} from "@ui5/webcomponents-react";
import { LineChart } from "@ui5/webcomponents-react-charts";
import axios from "axios";
import global from "@ui5/webcomponents-icons/dist/globe";

import React, { useState, useEffect } from "react";

const ExRate = () => {
  const [currentCountry, setCurrentry] = useState("JPY");
  const [currentPrice, setCurrentPrice] = useState(0);
  const [currentChange, setCurrentChange] = useState("");
  const [changePrice, setChangePrice] = useState(0);
  const [changeRate, setChangeRate] = useState(0);
  const [date, setDate] = useState("");
  const [openingPrice, setOpeningPrice] = useState(0);

  const handleHeaderClick = async () => {
    if (currentCountry === "JPY") {
      setCurrentry("USD");
      return callAPI("USD");
    } else {
      setCurrentry("JPY");
      return callAPI("JPY");
    }
  };

  /*    const callCPI = async () => {
     // 추후 로그인한 유저 정보로
     let accountID = 1004563;
     try {
       const response = await axios.get("/api", {
         headers: {
           Authorization: "Basic " + btoa(username + ":" + password),
           Accept: "application / json",
         },
         params: { accountID: accountID },
       });
       const res = await response;
       if (res.status == 200) {
         let callData = res.data;
     }} catch (err) {
       console.log("Error >>", err);
     }
   };
 */

  const callCPI = async () => {
    try {
      const response = await axios.get("/api/account");
      const res = await response;
      if (res.status == 200) {
        let callData = res.data;
        console.log(callData);
      }
    } catch (err) {
      console.log("Error >>", err);
    }
  };

  const callAPI = async (c) => {
    try {
      const response = await axios.get("/api", {
        headers: {
          Accept: "application / json",
        },
        params: { country: `${c}` },
      });
      const res = await response;
      if (res.status == 200) {
        const {
          basePrice,
          change,
          changePrice,
          changeRate,
          date,
          openingPrice,
        } = res.data[0];
        setCurrentPrice(basePrice);
        setCurrentChange(change);
        setChangePrice(changePrice);
        setChangeRate(changeRate);
        setDate(date);
        setOpeningPrice(openingPrice);
      }
    } catch (err) {
      console.log("Error >>", err);
    }
  };

  useEffect(() => {
    callAPI(currentCountry);
    callCPI();
  }, []);

  return (
    <>
      <div style={{ margin: "0,0,0 220px" }}>
        <FlexBox
          justifyContent={FlexBoxJustifyContent.Center}
          wrap={FlexBoxWrap.Wrap}
          style={spacing.sapUiContentPadding}
        >
          <Card
            header={
              <CardHeader
                titleText={`${currentCountry} Exchange Rate`}
                interactive
                onClick={handleHeaderClick}
                avatar={<Icon name={global} />}
              />
            }
            style={{ width: "400px", ...spacing.sapUiContentPadding }}
          >
            <AnalyticalCard
              header={
                <AnalyticalCardHeader
                  //description="961.66"
                  scale={changePrice}
                  state={currentChange == "RISE" ? "Error" : "Normal"}
                  subtitleText="KRW"
                  titleText="Exchange Rate Information"
                  trend={currentChange == "RISE" ? "Up" : "Down"}
                  unitOfMeasurement={currentCountry}
                  value={currentPrice}
                >
                  <NumericSideIndicator
                    titleText="Opening Price"
                    unit="Percentage"
                  />
                  <NumericSideIndicator
                    number={(changeRate * 100).toPrecision(3)}
                    state="Critical"
                    titleText={openingPrice}
                    unit="%"
                  />
                </AnalyticalCardHeader>
              }
            ></AnalyticalCard>
          </Card>
        </FlexBox>
      </div>
    </>
  );
};

export default ExRate;
