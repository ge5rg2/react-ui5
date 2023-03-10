import {
  Avatar,
  Card,
  CardHeader,
  Text,
  ShellBar,
  ShellBarItem,
  List,
  StandardListItem,
  CustomListItem,
  ValueState,
  ProgressIndicator,
  FlexBox,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  FlexBoxDirection,
  AnalyticalTable,
  Icon,
} from "@ui5/webcomponents-react";
import lineChartIcon from "@ui5/webcomponents-icons/dist/line-chart.js";
import barChartIcon from "@ui5/webcomponents-icons/dist/horizontal-bar-chart.js";
import addIcon from "@ui5/webcomponents-icons/dist/add.js";
import tableViewIcon from "@ui5/webcomponents-icons/dist/table-view.js";
import listIcon from "@ui5/webcomponents-icons/dist/list.js";
import { spacing } from "@ui5/webcomponents-react-base";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import { ThemingParameters } from "@ui5/webcomponents-react-base";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { tableColumns, dataset, tableDummyData } from "./model/dataSet";
import axios from "axios";

// https://developers.sap.com/tutorials/ui5-webcomponents-react-routing.html

const Home = () => {
  const navigate = useNavigate();
  const [toggleCharts, setToggleCharts] = useState("lineChart");
  const [loading, setLoading] = useState(false);
  const [employeeData, setEmployeeData] = useState(tableDummyData);

  const handleHeaderClick = () => {
    if (toggleCharts === "lineChart") {
      setToggleCharts("barChart");
    } else {
      setToggleCharts("lineChart");
    }
  };

  function handleRowClick(event) {
    const rowIndex = event.target.getAttribute("data-row-index");
    const clickedData = employeeData[rowIndex];
    console.log(clickedData);
    navigate(`/user/${clickedData.ObjectID}`);
  }

  const contentTitle =
    toggleCharts === "lineChart" ? "Line Chart" : "Bar Chart";
  const switchToChart =
    toggleCharts === "lineChart" ? "Bar Chart" : "Line Chart";

  const callCPI = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/account");
      const res = await response;
      if (res.status == 200) {
        let callData = res.data;
        setEmployeeData(callData);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      console.log("Error >>", err);
    }
  };

  useEffect(() => {
    callCPI();
  }, []);

  return (
    <div style={{ margin: "0 0 0 220px" }}>
      <FlexBox
        justifyContent={FlexBoxJustifyContent.Center}
        wrap={FlexBoxWrap.Wrap}
        style={spacing.sapUiContentPadding}
      >
        <Card
          header={
            <CardHeader
              titleText="Stock Prices"
              subtitleText={`Click here to switch to ${switchToChart}`}
              interactive
              onClick={handleHeaderClick}
              avatar={
                <Icon
                  name={
                    toggleCharts === "lineChart" ? lineChartIcon : barChartIcon
                  }
                />
              }
            />
          }
          style={{ width: "300px", ...spacing.sapUiContentPadding }}
        >
          <Text style={spacing.sapUiContentPadding}>{contentTitle}</Text>
          {toggleCharts === "lineChart" ? (
            <LineChart
              dimensions={[{ accessor: "month" }]}
              measures={[{ accessor: "data", label: "Stock Price" }]}
              dataset={dataset}
              //loading={loading}
            />
          ) : (
            <BarChart
              dimensions={[{ accessor: "month" }]}
              measures={[{ accessor: "data", label: "Stock Price" }]}
              dataset={dataset}
              //loading={loading}
            />
          )}
        </Card>

        <Card
          header={
            <CardHeader
              titleText="Progress"
              subtitleText="List"
              avatar={<Icon name={listIcon} />}
            />
          }
          style={{ width: "300px", ...spacing.sapUiContentPadding }}
        >
          <List>
            <StandardListItem
              additionalText="finished"
              additionalTextState={ValueState.Success}
            >
              Activity 1
            </StandardListItem>
            <StandardListItem
              additionalText="failed"
              additionalTextState={ValueState.Error}
            >
              Activity 2
            </StandardListItem>
            <CustomListItem>
              <FlexBox
                direction={FlexBoxDirection.Column}
                style={{ width: "100%", ...spacing.sapUiContentPadding }}
              >
                <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
                  <Text
                    style={{ fontSize: ThemingParameters.sapFontLargeSize }}
                  >
                    Activity 3
                  </Text>
                  <Text
                    style={{ color: ThemingParameters.sapCriticalTextColor }}
                  >
                    in progress
                  </Text>
                </FlexBox>
                <ProgressIndicator
                  value={89}
                  valueState={ValueState.Success}
                  style={{ ...spacing.sapUiTinyMarginTop }}
                />
              </FlexBox>
            </CustomListItem>
            <CustomListItem>
              <FlexBox
                direction={FlexBoxDirection.Column}
                style={{ width: "100%", ...spacing.sapUiContentPadding }}
              >
                <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
                  <Text
                    style={{ fontSize: ThemingParameters.sapFontLargeSize }}
                  >
                    Activity 4
                  </Text>
                  <Text
                    style={{ color: ThemingParameters.sapCriticalTextColor }}
                  >
                    in progress
                  </Text>
                </FlexBox>
                <ProgressIndicator
                  value={5}
                  valueState={ValueState.Error}
                  style={{ ...spacing.sapUiTinyMarginTop }}
                />
              </FlexBox>
            </CustomListItem>
          </List>
        </Card>

        <Card
          header={
            <CardHeader
              titleText="AnalyticalTable"
              avatar={<Icon name={tableViewIcon} />}
            />
          }
          style={{ maxWidth: "900px", ...spacing.sapUiContentPadding }}
        >
          <AnalyticalTable
            data={employeeData}
            columns={tableColumns}
            visibleRows={10}
            loading={loading}
            onRowClick={handleRowClick}
          />
        </Card>
      </FlexBox>
    </div>
  );
};

export default Home;
