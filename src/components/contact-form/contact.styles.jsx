// contact.styles.jsx
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FormWrapper = styled.div`
  width: 568px;
  padding: 2rem;
  background-color: #f4f4f4;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 2rem 4rem 2rem 2rem;
  border-radius: 8px;
`;

export const Title = styled.h2`
  text-align: center;
  color: #333;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  color: #555;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
`;

export const SubmitButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: ${(props) => (props.disabled ? "#aaa" : "#007bff")};
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${(props) => (props.disabled ? "#aaa" : "#0056b3")};
  }
`;

export const Message = styled.p`
  text-align: center;
  color: ${(props) => (props.isSuccess ? "green" : "red")};
  font-weight: bold;
`;

export const ContactInfoWrapper = styled.div`
  max-width: 568px;
  margin-left: 30px;
  //margin: 2rem auto 0;
  display: flex;
  justify-content: space-between;
  background-color: #f4f4f4;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ContactInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #6a1b9a;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const InfoTitle = styled.h3`
  margin: 0;
  font-weight: normal;
  color: #6a1b9a;
`;

export const InfoSubtitle = styled.span`
  display: block;
  color: #6a1b9a;
`;
