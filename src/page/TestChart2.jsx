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
import { LineChart } from "@ui5/webcomponents-react-charts";
import donutChartViewIcon from "@ui5/webcomponents-icons/dist/donut-chart.js";

import kpiChartViewIcon from "@ui5/webcomponents-icons/dist/kpi-corporate-performance.js";
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
                titleText="Line Chart"
                interactive
                avatar={<Icon name={kpiChartViewIcon} />}
              />
            }
            style={{ width: "600px", ...spacing.sapUiContentPadding }}
          >
            {loading ? (
              <LineChart
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

export default TestChart2;
