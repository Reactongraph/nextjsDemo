import { TopImage,RightGrid } from "@/styles/loginstylecomponent";
// import {ImagePath} from '../../Assets/ALphaSearch.svg';
import ImagePath from '../../Assets/ALphaSearch.svg'

export default function LoginSidebar(){
    return(
        <RightGrid> 
            <TopImage  src = {ImagePath}></TopImage>
        </RightGrid>
    )
}