import styled from "styled-components";

const BTN_TYPES = [
  {
    type: "circle",
  },
];

export default function Button({ children, type, onClick }) {
  return <Btn>{children}</Btn>;
}

const Btn = styled.button``;
