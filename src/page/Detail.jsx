import React from "react";
import { Title } from "@ui5/webcomponents-react";
import {
  FlexBoxJustifyContent,
  FlexBoxWrap,
  Card,
  CardHeader,
  AnalyticalTable,
  Select,
  Option,
  FlexBox,
  Button,
  Icon,
  Table,
  TableColumn,
  Label,
  TableRow,
  TableCell,
} from "@ui5/webcomponents-react";
import display from "@ui5/webcomponents-icons/dist/display.js";
import bbydDashboard from "@ui5/webcomponents-icons/dist/bbyd-dashboard.js";
import lineChartIcon from "@ui5/webcomponents-icons/dist/line-chart.js";
import barChartIcon from "@ui5/webcomponents-icons/dist/horizontal-bar-chart.js";
import addIcon from "@ui5/webcomponents-icons/dist/add.js";
import tableViewIcon from "@ui5/webcomponents-icons/dist/table-view.js";
import listIcon from "@ui5/webcomponents-icons/dist/list.js";
import { spacing } from "@ui5/webcomponents-react-base";

function Detail() {
  return (
    <>
      <FlexBox
        justifyContent={FlexBoxJustifyContent.Center}
        wrap={FlexBoxWrap.Wrap}
        style={spacing.sapUiContentPadding}
      >
        <Card
          header={
            <CardHeader
              titleText="TEST1"
              avatar={<Icon name={tableViewIcon} />}
            />
          }
          style={{ maxWidth: "900px", ...spacing.sapUiContentPadding }}
        >
          <AnalyticalTable
            columns={[
              {
                Header: "평가대상자",
                accessor: "name",
                headerTooltip: "Full Name",
              },
              {
                Header: "종합",
                accessor: "sum",
                className: "superCustomClass",
                disableFilters: false,
                disableGroupBy: true,
                disableSortBy: false,
                hAlign: "Center",
              },
              {
                Header: "성과",
                accessor: "detail.result",
                hAlign: "Center",
              },
              {
                accessor: "detail.ability",
                hAlign: "Center",
                Header: () => <span>역량</span>,
                filter: (rows, accessor, filterValue) => {
                  if (filterValue === "all") {
                    return rows;
                  }
                  if (filterValue === "true") {
                    return rows.filter((row) => row.values[accessor] >= 21);
                  }
                  return rows.filter((row) => row.values[accessor] < 21);
                },
                Filter: ({ column, popoverRef }) => {
                  const handleChange = (event) => {
                    // set filter
                    column.setFilter(
                      event.detail.selectedOption.getAttribute("value")
                    );
                    // close popover
                    popoverRef.current.close();
                  };
                  return (
                    <Select
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      value={column.filterValue ? column.filterValue : "all"}
                    >
                      <Option value="all">Show All</Option>
                      <Option value="true">Can Drink</Option>
                      <Option value="false">Can't Drink</Option>
                    </Select>
                  );
                },
              },
              {
                Cell: (instance) => {
                  const { cell, row, webComponentsReactProperties } = instance;
                  // disable buttons if overlay is active to prevent focus
                  const isOverlay = webComponentsReactProperties.showOverlay;
                  // console.log('This is your row data', row.original);
                  return (
                    <FlexBox>
                      <Button disabled={isOverlay}>
                        <Icon name={bbydDashboard} />
                        {" 보기"}
                      </Button>
                    </FlexBox>
                  );
                },
                Header: "Actions",
                disableFilters: true,
                disableGroupBy: true,
                disableResizing: true,
                hAlign: "Center",
                disableSortBy: true,
                id: "actions",
                width: 100,
              },
            ]}
            data={[
              {
                sum: 80,
                detail: {
                  ability: 68,
                  result: 10,
                },
                name: "Allen Best",
                status: "Success",
              },
              {
                sum: 31,
                detail: {
                  ability: 70,
                  result: 40,
                },
                name: "Combs Fleming",
                status: "None",
              },
              {
                sum: 31,
                detail: {
                  ability: 70,
                  result: 50,
                },
                name: "Combs Fleming",
                status: "Error",
              },
              // shortened for readability
            ]}
            filterable
            groupBy={[]}
            groupable
            header=""
            infiniteScroll
            onColumnsReorder={() => {}}
            onGroup={() => {}}
            onLoadMore={() => {}}
            onRowClick={() => {}}
            onRowExpandChange={() => {}}
            onRowSelect={() => {}}
            onSort={() => {}}
            onTableScroll={() => {}}
            rowHeight={44}
            selectedRowIds={{
              3: true,
            }}
            selectionMode="SingleSelect"
            withRowHighlight
          />
        </Card>
        <Card
          header={
            <CardHeader
              titleText="TEST2"
              avatar={<Icon name={barChartIcon} />}
            />
          }
          style={{ maxWidth: "900px", ...spacing.sapUiContentPadding }}
        >
          <Table
            columns={
              <>
                <TableColumn style={{ width: "12rem" }}>
                  <Label>Product</Label>
                </TableColumn>
                <TableColumn minWidth={800} popinText="Supplier">
                  <Label>Supplier</Label>
                </TableColumn>
                <TableColumn demandPopin minWidth={600} popinText="Dimensions">
                  <Label>Dimensions</Label>
                </TableColumn>
                <TableColumn demandPopin minWidth={600} popinText="Weight">
                  <Label>Weight</Label>
                </TableColumn>
                <TableColumn>
                  <Label>Price</Label>
                </TableColumn>
              </>
            }
            onLoadMore={function noRefCheck() {}}
            onPopinChange={function noRefCheck() {}}
            onRowClick={function noRefCheck() {}}
            onSelectionChange={function noRefCheck() {}}
          >
            <TableRow>
              <TableCell>
                <Label>Notebook Basic</Label>
              </TableCell>
              <TableCell>
                <Label>Very Best Screens</Label>
              </TableCell>
              <TableCell>
                <Label>30 x 18 x 3cm</Label>
              </TableCell>
              <TableCell>
                <Label>4.2KG</Label>
              </TableCell>
              <TableCell>
                <Label>956EUR</Label>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Label>Notebook Basic 17HT-1001</Label>
              </TableCell>
              <TableCell>
                <Label>Very Best Screens</Label>
              </TableCell>
              <TableCell>
                <Label>29 x 17 x 3.1cm</Label>
              </TableCell>
              <TableCell>
                <Label>4.5KG</Label>
              </TableCell>
              <TableCell>
                <Label>1249EUR</Label>
              </TableCell>
            </TableRow>
          </Table>
        </Card>
      </FlexBox>
    </>
  );
}

export default Detail;
