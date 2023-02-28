import Router from "./Router";
import {
  SideNavigation,
  SideNavigationItem,
  SideNavigationSubItem,
} from "@ui5/webcomponents-react";
import { useNavigate } from "react-router-dom";
import "./App.css"; // import the CSS file

const App = () => {
  const navigate = useNavigate();

  const onHomeClick = () => {
    navigate("/");
  };

  const onDetailClick = () => {
    navigate("/detail");
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
        style={{ position: "absolute" }}
      >
        <SideNavigationItem icon="home" text="성과관리" onClick={onHomeClick} />
        <SideNavigationItem expanded icon="group" text="People">
          <SideNavigationSubItem text="From My Team" />
          <SideNavigationSubItem text="From Other Teams" />
        </SideNavigationItem>
        <SideNavigationItem
          icon="locate-me"
          selected
          text="인사평가"
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
