import {
  RightGrid,
  LeftHeading,
  TopImage,
  BottomImage,
  RightSideImage,
  LeftSideImage,
  HeadingGrid,
} from "@/styles/loginstylecomponent";

export default function LoginSidebar() {
  return (
    <RightGrid>
      <LeftSideImage src="./images/Looper1.svg" />
      <RightSideImage src="./images/Looper2.svg" />
      <HeadingGrid>
        <TopImage src="./images/AlphaSearch.svg" />
        <LeftHeading style={{marginTop:"20px"}}>
          Using Data to bring{" "}
          <span style={{ color: "#FAFF14" }}>transparency</span> <br />
          to the private markets.
        </LeftHeading>
      </HeadingGrid>
      <BottomImage src="./images/Group.svg" />
    </RightGrid>
  );
}
