import {
  RightGrid,
  LeftHeading,
  TopImage,
  BottomImage,
  RightSideImage,
  LeftSideImage,
} from "@/styles/loginstylecomponent";

export default function LoginSidebar() {
  return (
    <RightGrid>
        <LeftSideImage src = "./images/Looper1.svg"/>
      <RightSideImage src="./images/Looper2.svg" />
      <TopImage src="./images/AlphaSearch.svg" />
      <LeftHeading>
        Using Data to bring <span style = {{color:"#FAFF14"}}>transparency</span> <br/>to the private markets.
      </LeftHeading>
      <BottomImage src="./images/Group.svg" />
    </RightGrid>
  );
}
