// ContactForm.js
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FormWrapper,
  Title,
  StyledForm,
  Label,
  Input,
  TextArea,
  SubmitButton,
  Message,
  ContactInfoWrapper,
  ContactInfoBlock,
  Icon,
  InfoTitle,
  InfoSubtitle,
} from "./contact.styles";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY,
      )
      .then(
        (result) => {
          setStateMessage({ text: "Message sent!", isSuccess: true });
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        (error) => {
          setStateMessage({
            text: "Something went wrong, please try again later.",
            isSuccess: false,
          });
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
      );

    e.target.reset();
  };

  return (
    <>
      <FormWrapper>
        <Title>Contact Me</Title>
        <StyledForm onSubmit={sendEmail}>
          <Label>Name</Label>
          <Input type="text" name="user_name" required />

          <Label>Email</Label>
          <Input type="email" name="user_email" required />

          <Label>Message</Label>
          <TextArea name="message" rows="5" required />

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send"}
          </SubmitButton>

          {stateMessage && (
            <Message isSuccess={stateMessage.isSuccess}>
              {stateMessage.text}
            </Message>
          )}
        </StyledForm>
      </FormWrapper>
      <ContactInfoWrapper>
        <ContactInfoBlock>
          <Icon icon={faEnvelope} />
          <InfoTitle>E-mail</InfoTitle>
          <InfoSubtitle>jbreedlove@jasonbreedlove.dev</InfoSubtitle>
        </ContactInfoBlock>
        <ContactInfoBlock>
          <Icon icon={faMapMarkerAlt} />
          <InfoTitle>Address</InfoTitle>
          <InfoSubtitle>Auburn, California - United States</InfoSubtitle>
        </ContactInfoBlock>
      </ContactInfoWrapper>
    </>
  );
};

export default ContactForm;
