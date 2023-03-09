import Router from "./Router";
import {
  SideNavigation,
  SideNavigationItem,
  SideNavigationSubItem,
} from "@ui5/webcomponents-react";
import { useNavigate } from "react-router-dom";
import "./App.css"; // import the CSS file
import home from "@ui5/webcomponents-icons/dist/home";
import chart from "@ui5/webcomponents-icons/dist/bar-chart";
import display from "@ui5/webcomponents-icons/dist/display";
import money from "@ui5/webcomponents-icons/dist/money-bills";

const App = () => {
  const navigate = useNavigate();

  const onHomeClick = () => {
    navigate("/");
  };

  const onDetailClick = () => {
    navigate("/detail");
  };

  const onTestChartClick = () => {
    navigate("/test-chart");
  };

  return (
    <>
      <SideNavigation
        fixedItems={
          <>
            <SideNavigationItem icon="chain-link" text="Useful Links" />
            <SideNavigationItem icon="history" text="History" />
          </>
        }
        onSelectionChange={function noRefCheck() {}}
        style={{ position: "fixed" }}
      >
        <SideNavigationItem icon={home} text="Home" onClick={onHomeClick} />
        <SideNavigationItem expanded icon={chart} text="Chart">
          <SideNavigationSubItem text="Test Chart" onClick={onTestChartClick} />
          <SideNavigationSubItem
            text="Test Chart2"
            onClick={() => navigate("/test-chart2")}
          />
        </SideNavigationItem>
        <SideNavigationItem expanded icon={display} text="Display">
          <SideNavigationSubItem
            icon={money}
            text="Exchange Rate"
            onClick={() => navigate("/exchange-rate")}
          />
        </SideNavigationItem>
        <SideNavigationItem
          icon="locate-me"
          text="Detail"
          onClick={onDetailClick}
        />
        <SideNavigationItem icon="calendar" text="Events">
          <SideNavigationSubItem text="Local" />
          <SideNavigationSubItem text="Others" />
        </SideNavigationItem>
      </SideNavigation>
      <Router />
    </>
  );
};

export default App;
