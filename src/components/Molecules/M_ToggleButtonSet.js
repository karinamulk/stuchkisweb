import styled from "styled-components";
import ToggleButton from "../Atoms/A_ToggleButton";

const Wrapper = styled.div`
    display: flex;
`;

const ToggleButtonSet = ({tagname1, tagname2, tagname3, onClick1 = () => null, onClick2 = () => null, onClick3 = () => null, selectedSort }) => {
    return(
    <Wrapper>
        <ToggleButton selectedSort={selectedSort} tagname={tagname1} onClick={onClick1} ></ToggleButton>
        <ToggleButton selectedSort={selectedSort} tagname={tagname2} onClick={onClick2}></ToggleButton>
        <ToggleButton selectedSort={selectedSort} tagname={tagname3} onClick={onClick3}></ToggleButton>
    </Wrapper>
    );

};
export default ToggleButtonSet;