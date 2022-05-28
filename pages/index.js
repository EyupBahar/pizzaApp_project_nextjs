import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    tittle: "A First Mettup",
    image:
      "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT2DaqEuWx43Jr3F4ok2JePyDMZDIgwarrMiDC5uyk_SvHs1IB6nwQzjixZxdRX",
    address: "Some address 5, İstanbul",
  },
  {
    id: "m2",
    tittle: "A Second Mettup",
    image:
      "https://iasbh.tmgrup.com.tr/bbe9c0/650/344/0/0/887/467?u=https://isbh.tmgrup.com.tr/sbh/2019/09/18/bursada-gezilecek-yerler-bursada-gorulmesi-gereken-10-guzel-yer-1568810140805.jpg",
    address: "Some address 5, 12345 Bursa",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

/* export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
} */

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default HomePage;
