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

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log("meetupId", meetupId);

  return {
    props: {
      meetupData: {
        image:
          "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT2DaqEuWx43Jr3F4ok2JePyDMZDIgwarrMiDC5uyk_SvHs1IB6nwQzjixZxdRX",
        id: "m1",
        tittle: "First Meetup",
        address: "Some Street 5, Some Sity",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
