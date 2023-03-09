import {
  Avatar,
  Card,
  CardHeader,
  Icon,
  FlexBox,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  FlexBoxDirection,
} from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";
import { ColumnChart } from "@ui5/webcomponents-react-charts";
import { ColumnChartWithTrend } from "@ui5/webcomponents-react-charts";
import React, { useState, useEffect } from "react";

const tableData = [
  {
    name: "January",
    sessions: 300,
    users: 100,
    volume: 756,
  },
  {
    name: "February",
    sessions: 330,
    users: 230,
    volume: 880,
  },
  {
    name: "March",
    sessions: 404,
    users: 240,
    volume: 700,
  },
  {
    name: "April",
    sessions: 80,
    users: 280,
    volume: 604,
  },
  {
    name: "May",
    sessions: 300,
    users: 100,
    volume: 756,
  },
  {
    name: "June",
    sessions: 330,
    users: 230,
    volume: 880,
  },
  {
    name: "July",
    sessions: 470,
    users: 20,
    volume: 450,
  },
  {
    name: "August",
    sessions: 180,
    users: 220,
    volume: 104,
  },
  {
    name: "September",
    sessions: 360,
    users: 200,
    volume: 879,
  },
  {
    name: "October",
    sessions: 500,
    users: 250,
    volume: 200,
  },
  {
    name: "November",
    sessions: 404,
    users: 240,
    volume: 700,
  },
  {
    name: "December",
    sessions: 80,
    users: 280,
    volume: 604,
  },
];

const TestChart = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <>
      <div style={{ margin: "0 0 0 220px" }}>
        <FlexBox
          justifyContent={FlexBoxJustifyContent.Center}
          wrap={FlexBoxWrap.Wrap}
          style={spacing.sapUiContentPadding}
        >
          <Card
            header={<CardHeader titleText="Breakdown by Month" interactive />}
            style={{ ...spacing.sapUiContentPadding }}
          >
            {loading ? (
              <ColumnChart
                dataset={tableData}
                dimensions={[
                  {
                    accessor: "name",
                    //formatter: function ka() {},
                  },
                ]}
                measures={[
                  {
                    accessor: "users",
                    //formatter: function ka() {},
                    hideDataLabel: true,
                    label: "Users",
                  },
                  {
                    accessor: "sessions",
                    //formatter: function ka() {},
                    hideDataLabel: true,
                    label: "Active Sessions",
                  },
                  {
                    accessor: "volume",
                    hideDataLabel: true,
                    label: "Vol.",
                  },
                ]}
                chartConfig={{
                  referenceLine: {
                    color: "red",
                    label: "MAX",
                    value: 650,
                  },
                }}
                onClick={function ka() {}}
                onDataPointClick={function ka(e) {
                  console.log(e.detail.payload);
                }}
                onLegendClick={function ka() {}}
              />
            ) : (
              <ColumnChart
                dataset={[]}
                dimensions={[
                  {
                    accessor: "name",
                    formatter: function ka() {},
                  },
                ]}
                measures={[
                  {
                    accessor: "users",
                    formatter: function ka() {},
                    label: "Users",
                  },
                  {
                    accessor: "sessions",
                    formatter: function ka() {},
                    hideDataLabel: true,
                    label: "Active Sessions",
                  },
                  {
                    accessor: "volume",
                    label: "Vol.",
                  },
                ]}
                onClick={function ka() {}}
                onDataPointClick={function ka() {}}
                onLegendClick={function ka() {}}
              />
            )}
          </Card>
          <Card
            header={
              <CardHeader
                titleText="Breakdown by Month With Trend"
                interactive
              />
            }
            style={{ ...spacing.sapUiContentPadding }}
          >
            {loading ? (
              <ColumnChartWithTrend
                dataset={tableData}
                dimensions={[
                  {
                    accessor: "name",
                    formatter: function ka() {},
                  },
                ]}
                measures={[
                  {
                    accessor: "users",
                    formatter: function ka() {},
                    label: "Users",
                    type: "line",
                  },
                  {
                    accessor: "sessions",
                    label: "Active Sessions",
                    type: "bar",
                  },
                ]}
                onClick={function ka() {}}
                onDataPointClick={function ka() {}}
                onLegendClick={function ka() {}}
                style={{
                  height: "400px",
                }}
              />
            ) : (
              <ColumnChartWithTrend
                dataset={[]}
                dimensions={[
                  {
                    accessor: "name",
                    formatter: function ka() {},
                  },
                ]}
                measures={[
                  {
                    accessor: "users",
                    formatter: function ka() {},
                    label: "Users",
                    type: "line",
                  },
                  {
                    accessor: "sessions",
                    label: "Active Sessions",
                    type: "bar",
                  },
                ]}
                onClick={function ka() {}}
                onDataPointClick={function ka() {}}
                onLegendClick={function ka() {}}
                style={{
                  height: "400px",
                }}
              />
            )}
          </Card>
        </FlexBox>
      </div>
    </>
  );
};

export default TestChart;
