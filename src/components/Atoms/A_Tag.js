import styled from "styled-components";

const Span = styled.span`
    color: var(--main-white);
    background-color: var(--main-lightblue);
    padding: 6.25px 16px;
    box-sizing: border-box;
    border-radius: 16px;
    margin-right: 8px;
`;

const Tag = ({id, tagname, onClick=() => null}) => {
    return (
        <Span onClick={onClick}>{tagname}</Span>
    )
}
export default Tag;