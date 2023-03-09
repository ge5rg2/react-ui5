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
import { ColumnChart } from "@ui5/webcomponents-react-charts";
import { ColumnChartWithTrend } from "@ui5/webcomponents-react-charts";
import { ComposedChart } from "@ui5/webcomponents-react-charts";
import { LineChart } from "@ui5/webcomponents-react-charts";
import React, { useState, useEffect } from "react";
import { tableData } from "../model/dataSet";

import businessViewIcon from "@ui5/webcomponents-icons/dist/business-objects-experience.js";
import fullStackViewIcon from "@ui5/webcomponents-icons/dist/full-stacked-column-chart.js";
import kpiChartViewIcon from "@ui5/webcomponents-icons/dist/kpi-corporate-performance.js";
import lineChartsViewIcon from "@ui5/webcomponents-icons/dist/line-charts.js";

const TestChart = () => {
  const [loading, setLoading] = useState(false);
  const [toggleLoading, setToggleLoading] = useState(false);
  const [toggleCharts, setToggleCharts] = useState("ColumnChart");

  const handleHeaderClick = () => {
    if (toggleCharts === "ColumnChart") {
      setToggleLoading(true);
      setTimeout(() => {
        setToggleLoading(false);
        setToggleCharts("ComposedChart");
      }, 2000);
    } else {
      setToggleLoading(true);
      setTimeout(() => {
        setToggleLoading(false);
        setToggleCharts("ColumnChart");
      }, 2000);
    }
  };

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
            header={
              <CardHeader
                titleText={toggleCharts}
                interactive
                onClick={handleHeaderClick}
                avatar={
                  <Icon
                    name={
                      toggleCharts === "ColumnChart"
                        ? fullStackViewIcon
                        : businessViewIcon
                    }
                  />
                }
              />
            }
            style={{ width: "600px", ...spacing.sapUiContentPadding }}
          >
            <Text style={spacing.sapUiContentPadding}>Breakdown by Month</Text>
            {loading ? (
              toggleCharts === "ColumnChart" ? (
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
                  loading={toggleLoading}
                  onClick={function ka() {}}
                  onDataPointClick={function ka(e) {
                    console.log(e.detail.payload);
                  }}
                  onLegendClick={function ka() {}}
                />
              ) : (
                <ComposedChart
                  dataset={tableData}
                  dimensions={[
                    {
                      accessor: "name",
                      formatter: function ka() {},
                      interval: 0,
                    },
                  ]}
                  measures={[
                    {
                      accessor: "sessions",
                      label: "Active Sessions",
                      type: "bar",
                    },
                    {
                      accessor: "users",
                      formatter: function ka() {},
                      label: "Users",
                      type: "area",
                    },
                    {
                      accessor: "volume",
                      formatter: function ka() {},
                      label: "Vol.",
                      type: "line",
                    },
                  ]}
                  loading={toggleLoading}
                  onClick={function ka() {}}
                  onDataPointClick={function ka() {}}
                  onLegendClick={function ka() {}}
                />
              )
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
                titleText="ColumnChartWithTrend"
                interactive
                avatar={<Icon name={lineChartsViewIcon} />}
              />
            }
            style={{ width: "600px", ...spacing.sapUiContentPadding }}
          >
            <Text style={spacing.sapUiContentPadding}>Breakdown by Month</Text>
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
          </Card>{" "}
          <Card
            header={
              <CardHeader
                titleText="Line Chart"
                interactive
                avatar={<Icon name={kpiChartViewIcon} />}
              />
            }
            style={{ maxWidth: "1200px", ...spacing.sapUiContentPadding }}
          >
            {loading ? (
              <LineChart
                dataset={tableData}
                dimensions={[
                  {
                    accessor: "name",
                    // formatter: function ka() {},
                    interval: 0,
                  },
                ]}
                measures={[
                  {
                    accessor: "users",
                    //formatter: function ka() {},
                    label: "Users",
                    lineConfig: {
                      type: "linear",
                    },
                  },
                  {
                    accessor: "sessions",
                    //formatter: function ka() {},
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
            ) : (
              <LineChart
                dataset={[]}
                dimensions={[
                  {
                    accessor: "name",
                    formatter: function ka() {},
                    interval: 0,
                  },
                ]}
                measures={[
                  {
                    accessor: "users",
                    formatter: function ka() {},
                    label: "Users",
                    lineConfig: {
                      type: "linear",
                    },
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
        </FlexBox>
      </div>
    </>
  );
};

export default TestChart;
