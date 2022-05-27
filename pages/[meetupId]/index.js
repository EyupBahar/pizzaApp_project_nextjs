import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT2DaqEuWx43Jr3F4ok2JePyDMZDIgwarrMiDC5uyk_SvHs1IB6nwQzjixZxdRX"
      title="First Meetup"
      address="Some Street 5, Some Sity"
      description="This is a first meetup"
    />
  );
}

export default MeetupDetails;
