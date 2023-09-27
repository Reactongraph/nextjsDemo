import {
  RightGrid,
  LeftHeading,
  TopImage,
  BottomImage,
  RightSideImage,
  LeftSideImage,
  HeadingGrid,
} from "@/styles/loginsidebarstyle";

export default function LoginSidebar() {
  return (
    <RightGrid>
      <LeftSideImage src="./images/Looper1.svg" />
      <RightSideImage src="./images/Looper2.svg" />
      <HeadingGrid>
        <img src="./images/AlphaSearch.svg" />
        <LeftHeading>
          Using Data to bring{" "}
          <span style={{ color: "#FAFF14" }}>transparency</span> <br />
          to the private markets.
        </LeftHeading>
      </HeadingGrid>
      <BottomImage src="./images/Group.svg" />
    </RightGrid>
  );
}
