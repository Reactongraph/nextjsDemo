import {
  RightGrid,
  LeftHeading,
  TopImage,
  BottomImage,
  RightSideImage,
  LeftSideImage,
  HeadingGrid,
} from "@/styles/loginsidebarstyle";
import Image from "next/image";

export default function LoginSidebar() {
  return (
    <RightGrid>
      <LeftSideImage src="./images/Looper1.svg" alt="looper image" />
      <RightSideImage src="./images/Looper2.svg" alt="looper image" />
      <HeadingGrid>
        <Image
          src="./images/AlphaSearch.svg"
          width={300}
          height={100}
          alt="Alphasearch"
        />
        <LeftHeading>
          Using Data to bring{" "}
          <span style={{ color: "#FAFF14" }}>transparency</span> <br />
          to the private markets.
        </LeftHeading>
      </HeadingGrid>
      <BottomImage src="./images/Group.svg" alt="image" />
    </RightGrid>
  );
}
