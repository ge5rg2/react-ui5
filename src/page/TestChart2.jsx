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
import { tableData } from "../model/dataSet";
import { DonutChart } from "@ui5/webcomponents-react-charts";
import { PieChart } from "@ui5/webcomponents-react-charts";
import { RadarChart } from "@ui5/webcomponents-react-charts";
import { RadialChart } from "@ui5/webcomponents-react-charts";

import donutChartViewIcon from "@ui5/webcomponents-icons/dist/donut-chart.js";
import pieChartViewIcon from "@ui5/webcomponents-icons/dist/pie-chart.js";
import radarChartViewIcon from "@ui5/webcomponents-icons/dist/radar-chart";
import circleViewIcon from "@ui5/webcomponents-icons/dist/circle-task";

import React, { useState, useEffect } from "react";

const TestChart2 = () => {
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
            header={
              <CardHeader
                titleText="Donut Chart"
                interactive
                avatar={<Icon name={donutChartViewIcon} />}
              />
            }
            style={{ width: "600px", ...spacing.sapUiContentPadding }}
          >
            {loading ? (
              <DonutChart
                dataset={tableData}
                dimension={{
                  accessor: "name",
                }}
                measure={{
                  accessor: "users",
                }}
              />
            ) : (
              <DonutChart
                dataset={[]}
                dimension={{
                  accessor: "name",
                }}
                measure={{
                  accessor: "users",
                }}
                onClick={function ka() {}}
                onDataPointClick={function ka() {}}
                onLegendClick={function ka() {}}
              />
            )}
          </Card>

          <Card
            header={
              <CardHeader
                titleText="Pie Chart"
                interactive
                avatar={<Icon name={pieChartViewIcon} />}
              />
            }
            style={{ width: "600px", ...spacing.sapUiContentPadding }}
          >
            {loading ? (
              <PieChart
                dataset={tableData}
                dimension={{
                  accessor: "name",
                }}
                measure={{
                  accessor: "users",
                }}
                onClick={function ka() {}}
                onDataPointClick={function ka() {}}
                onLegendClick={function ka() {}}
              />
            ) : (
              <PieChart
                dataset={[]}
                dimension={{
                  accessor: "name",
                }}
                measure={{
                  accessor: "users",
                }}
                onClick={function ka() {}}
                onDataPointClick={function ka() {}}
                onLegendClick={function ka() {}}
              />
            )}
          </Card>
          <Card
            header={
              <CardHeader
                titleText="Radar Chart"
                interactive
                avatar={<Icon name={radarChartViewIcon} />}
              />
            }
            style={{ width: "600px", ...spacing.sapUiContentPadding }}
          >
            {loading ? (
              <RadarChart
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
                    label: "Vol.",
                  },
                ]}
                onClick={function ka() {}}
                onDataPointClick={function ka() {}}
                onLegendClick={function ka() {}}
              />
            ) : (
              <RadarChart
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
                titleText="Radial Chart"
                interactive
                avatar={<Icon name={circleViewIcon} />}
              />
            }
            style={{ width: "600px", ...spacing.sapUiContentPadding }}
          >
            {loading ? (
              <RadialChart
                displayValue="50%"
                onClick={function ka() {}}
                onDataPointClick={function ka() {}}
                value={50}
              />
            ) : (
              <RadialChart
                color="#f0ab00"
                displayValue=""
                onClick={function ka() {}}
                onDataPointClick={function ka() {}}
                value={0}
              />
            )}
          </Card>
        </FlexBox>
      </div>
    </>
  );
};

export default TestChart2;
