
import { ContactForm } from "./TravelAddOn/Contact";
import { Form } from "./TravelAddOn/ContactForm";
import { Popup } from "./TravelAddOn/PopupReview";
import { TravelAndAddOnn } from "./TravelAddOn/TravelAndAddonn";


export const AfterBookingPage = () => {
  return (
    <div>
      <TravelAndAddOnn />
      <ContactForm />
      <Form/>
      <Popup/>
     {" "}
    </div>
  );
};
