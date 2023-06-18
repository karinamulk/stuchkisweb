import styled from "styled-components";

const Span = styled.span`
    color: var(--main-white);
    background-color: var(--main-lightblue);
    padding: 6.25px 16px;
    box-sizing: border-box;
    border-radius: 16px;
    margin-right: 8px;
`;

const Tag = ({id, tagname, onClick=() => null, selectedSort}) => {
    return (
        <Span style={{backgroundColor: selectedSort === tagname ? "var(--main-lightblue)" : "var(--main-white)", color: selectedSort === tagname ? "var(--main-white)" : "var(--main-lightblue)"}} onClick={onClick}>{tagname}</Span>
    )
}
export default Tag;