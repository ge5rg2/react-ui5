import {
  Avatar,
  Card,
  CardHeader,
  Text,
  ValueState,
  ProgressIndicator,
  FlexBox,
  FlexBoxJustifyContent,
  FlexBoxWrap,
} from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";
import lineChartIcon from "@ui5/webcomponents-icons/dist/line-chart.js";
import { ObjectPage } from "@ui5/webcomponents-react";
import { TabContainer } from "@ui5/webcomponents-react";

const ObjPage = () => {
  return (
    <>
      <div style={{ margin: "0 0 0 220px" }}>
        <FlexBox
          justifyContent={FlexBoxJustifyContent.Center}
          wrap={FlexBoxWrap.Wrap}
          style={spacing.sapUiContentPadding}
        ></FlexBox>
      </div>
    </>
  );
};

export default ObjPage;
