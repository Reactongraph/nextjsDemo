import {
  RightGrid,
  LeftHeading,
  TopImage,
  BottomImage,
  SideImage,
} from "@/styles/loginstylecomponent";

export default function LoginSidebar() {
  return (
    <RightGrid>
      <SideImage src="./images/Looper.svg" />
      <TopImage src="./images/AlphaSearch.svg" />
      <LeftHeading>
        Using Data to bring <span style = {{color:"#FAFF14"}}>transparency</span> <br/>to the private markets.
      </LeftHeading>
      <BottomImage src="./images/Group.svg" />
    </RightGrid>
  );
}
