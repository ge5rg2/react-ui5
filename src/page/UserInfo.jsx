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
  ObjectPage,
  Bar,
  Button,
  DynamicPageHeader,
  Link,
  Label,
  DynamicPageTitle,
  BreadcrumbsItem,
  Breadcrumbs,
  ObjectStatus,
  ObjectPageSection,
  ObjectPageSubSection,
  Form,
  FormItem,
  FormGroup,
} from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserInfo = () => {
  const params = useParams();
  const [userInfo, setUserInfo] = useState([]);
  const [ranNum, setRanNum] = useState(0);
  const [loading, setLoading] = useState(false);

  const callData = async () => {
    const { id } = params;
    try {
      const response = await axios.get("/api/user", {
        params: { objID: id },
      });
      const res = await response;
      if (res.status == 200) {
        let { data } = res;
        setUserInfo(data);
        setRanNum(Math.floor(Math.random() * 100));
      }
    } catch (err) {
      console.log("Error >>", err);
    }
  };

  useEffect(() => {
    callData();
  }, []);

  return (
    <>
      <div style={{ margin: "0 0 0 250px" }}>
        <FlexBox
          justifyContent={FlexBoxJustifyContent.Center}
          wrap={FlexBoxWrap.Wrap}
          style={spacing.sapUiContentPadding}
        >
          <ObjectPage
            /*             footer={
              <Bar
                design="FloatingFooter"
                endContent={
                  <>
                    <Button design="Positive">Accept</Button>
                    <Button design="Negative">Reject</Button>
                  </>
                }
              />
            } */

            headerContent={
              <DynamicPageHeader>
                <FlexBox alignItems="Center" wrap="Wrap">
                  <FlexBox direction="Column">
                    <Link>{userInfo.MobilePhoneNumber}</Link>
                    <Link href={"https://" + userInfo.Email}>
                      {userInfo.Email}
                    </Link>
                    <Link href="https://kghee9612@gmail.com">E-mail</Link>
                  </FlexBox>
                  <FlexBox direction="Column" style={{ padding: "10px" }}>
                    <Label>{userInfo.City}</Label>
                    <Label>
                      {userInfo.RegionCodeText +
                        ", " +
                        userInfo.CountryCodeText}
                    </Label>
                  </FlexBox>
                </FlexBox>
              </DynamicPageHeader>
            }
            headerContentPinnable
            headerTitle={
              <DynamicPageTitle
                actions={
                  <>
                    <Button design="Emphasized">Primary Action</Button>
                    <Button>Action</Button>
                  </>
                }
                breadcrumbs={
                  <Breadcrumbs>
                    <BreadcrumbsItem>Home</BreadcrumbsItem>
                    <BreadcrumbsItem>Employees</BreadcrumbsItem>
                    <BreadcrumbsItem>Employee Details</BreadcrumbsItem>
                  </Breadcrumbs>
                }
                header={userInfo.BusinessPartnerFormattedName}
                showSubHeaderRight
                subHeader={userInfo.CreatedBy}
              >
                <ObjectStatus state="Success">employed</ObjectStatus>
              </DynamicPageTitle>
            }
            image={
              "https://randomuser.me/api/portraits/med/" +
              (userInfo.GenderCode == "1" ? "men" : "women") +
              "/" +
              ranNum +
              ".jpg"
            }
            imageShapeCircle
            onPinnedStateChange={function ka() {}}
            onSelectedSectionChange={function ka() {}}
            onToggleHeaderContent={function ka() {}}
            selectedSectionId="goals"
            showHideHeaderButton
            style={{
              maxHeight: "800px",
            }}
          >
            <ObjectPageSection
              aria-label="Information"
              id="goals"
              titleText="Information"
            >
              <Form
                columnsL={3}
                columnsM={2}
                columnsXL={3}
                labelSpanL={6}
                labelSpanM={6}
                labelSpanXL={6}
                style={{
                  alignItems: "baseline",
                }}
              >
                <FormItem label="Evangelize the UI framework across the company">
                  <Text>4 days overdue - Cascaded</Text>
                </FormItem>
                <FormItem label="Get trained in development management direction">
                  <Text>Due Nov, 21</Text>
                </FormItem>
                <FormItem label="Mentor junior developers">
                  <Text>Due Dec, 31 - Cascaded</Text>
                </FormItem>
              </Form>
            </ObjectPageSection>
            <ObjectPageSection
              aria-label="Personal"
              id="personal"
              titleText="Personal"
            >
              <ObjectPageSubSection
                actions={
                  <>
                    <Button design="Emphasized" style={{ minWidth: "120px" }}>
                      Custom Action
                    </Button>
                    <Button
                      design="Transparent"
                      icon="action-settings"
                      tooltip="settings"
                    />
                    <Button
                      design="Transparent"
                      icon="download"
                      tooltip="download"
                    />
                  </>
                }
                aria-label="Connect"
                id="personal-connect"
                titleText="Connect"
              >
                <Form
                  columnsL={4}
                  columnsXL={4}
                  style={{
                    alignItems: "baseline",
                  }}
                >
                  <FormGroup titleText="Phone Numbers">
                    <FormItem label="Home">
                      <Text>{userInfo.NormalisedMobilePhoneNumber}</Text>
                    </FormItem>
                    <FormItem label="Mobile">
                      <Text>{userInfo.MobilePhoneNumber}</Text>
                    </FormItem>
                  </FormGroup>
                  <FormGroup titleText="Social Accounts">
                    <FormItem label="LinkedIn">
                      <Text>/DeniseSmith</Text>
                    </FormItem>
                    <FormItem label="Twitter">
                      <Text>@DeniseSmith</Text>
                    </FormItem>
                  </FormGroup>
                  <FormGroup titleText="Addresses">
                    <FormItem label="Home Address">
                      <Text>2096 Mission Street</Text>
                    </FormItem>
                    <FormItem label="Mailing Address">
                      <Text>PO Box 32114</Text>
                    </FormItem>
                  </FormGroup>
                  <FormGroup titleText="Mailing Address">
                    <FormItem label="Work">
                      <Text>DeniseSmith@sap.com</Text>
                    </FormItem>
                  </FormGroup>
                </Form>
              </ObjectPageSubSection>
              <ObjectPageSubSection
                aria-label="Payment Information"
                id="personal-payment-information"
                titleText="Payment Information"
              >
                <Form
                  columnsL={4}
                  columnsXL={4}
                  style={{
                    alignItems: "baseline",
                  }}
                >
                  <FormGroup titleText="Salary">
                    <FormItem label="Bank Transfer">
                      <Text>Money Bank, Inc.</Text>
                    </FormItem>
                  </FormGroup>
                  <FormGroup titleText="Payment method for Expenses">
                    <FormItem label="Extra Travel Expenses">
                      <Text>Cash 100 USD</Text>
                    </FormItem>
                  </FormGroup>
                </Form>
              </ObjectPageSubSection>
            </ObjectPageSection>
            <ObjectPageSection
              aria-label="Employment"
              id="employment"
              titleText="Employment"
            >
              <ObjectPageSubSection
                aria-label="Job Information"
                id="employment-job-information"
                titleText="Job Information"
              >
                <Form
                  columnsL={4}
                  columnsXL={4}
                  style={{
                    alignItems: "baseline",
                  }}
                >
                  <FormItem label="Job Classification">
                    <FlexBox direction="Column">
                      <Text>Senior UI Developer</Text>
                      <Label>(UIDEV-SR)</Label>
                    </FlexBox>
                  </FormItem>
                  <FormItem label="Job Title">
                    <Text>Developer</Text>
                  </FormItem>
                  <FormItem label="Employee Class">
                    <Text>Employee</Text>
                  </FormItem>
                  <FormItem label="Manager">
                    <FlexBox direction="Column">
                      <Text>Dan Smith</Text>
                      <Label>Development Manager</Label>
                    </FlexBox>
                  </FormItem>
                  <FormItem label="Pay Grade">
                    <Text>Salary Grade 18 (GR-14)</Text>
                  </FormItem>
                  <FormItem label="FTE">
                    <Text>1</Text>
                  </FormItem>
                </Form>
              </ObjectPageSubSection>
              <ObjectPageSubSection
                aria-label="Employee Details"
                id="employment-employee-details"
                titleText="Employee Details"
              >
                <Form
                  columnsL={4}
                  columnsXL={4}
                  style={{
                    alignItems: "baseline",
                  }}
                >
                  <FormItem label="Start Date">
                    <Text>Jan 01, 2018</Text>
                  </FormItem>
                  <FormItem label="End Date">
                    <Text>Dec 31, 9999</Text>
                  </FormItem>
                  <FormItem label="Payroll Start Date">
                    <Text>Jan 01, 2018</Text>
                  </FormItem>
                  <FormItem label="Benefits Start Date">
                    <Text>Jul 01, 2018</Text>
                  </FormItem>
                  <FormItem label="Company Car Eligibility">
                    <Text>Jan 01, 2021</Text>
                  </FormItem>
                  <FormItem label="Equity Start Date">
                    <Text>Jul 01, 2018</Text>
                  </FormItem>
                </Form>
              </ObjectPageSubSection>
              <ObjectPageSubSection
                aria-label="Job Relationship"
                id="employment-job-relationship"
                titleText="Job Relationship"
              >
                <Form
                  columnsL={4}
                  columnsXL={4}
                  style={{
                    alignItems: "baseline",
                  }}
                >
                  <FormItem label="Manager">
                    <Text>John Doe</Text>
                  </FormItem>
                  <FormItem label="Scrum Master">
                    <Text>Michael Adams</Text>
                  </FormItem>
                  <FormItem label="Product Owner">
                    <Text>John Miller</Text>
                  </FormItem>
                </Form>
              </ObjectPageSubSection>
            </ObjectPageSection>
          </ObjectPage>
        </FlexBox>
      </div>
    </>
  );
};

export default UserInfo;
