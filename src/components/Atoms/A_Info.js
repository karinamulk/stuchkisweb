import styled from "styled-components";

const Infoitem = styled.div``;
const Note = styled.p`
  margin: 0;
  color: var(--main-green);
  font-size: var(--text-cap-size);
  line-height: var(--text-cap-lineheight);
  margin-bottom: 8px;
`;
const Infotext = styled.p`
  margin: 0;
  color: var(--main-green);
  font-size: var(--text-h2-size);
  line-height: var(--text-h2-lineheight);
`;

const Info = ({text, title}) => {
    return (
        <Infoitem>
            <Note>{title}</Note>
            <Infotext>{text}</Infotext>
        </Infoitem>
    )
}
export default Info;