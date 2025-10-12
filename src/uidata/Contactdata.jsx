import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PlaceIcon from "@mui/icons-material/Place";
import CallIcon from "@mui/icons-material/Call";
import TimerIcon from "@mui/icons-material/Timer";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

const phone1 = import.meta.env.VITE_PHONE_1;
const phone2 = import.meta.env.VITE_PHONE_2;
const email = import.meta.env.VITE_EMAIL;


export const cardData = [
  {
    id: 1,
    icon: <PlaceIcon />,
    heading: "Visit Us",
    description:
      " 1H/3, Nehruji Road (Police Station Road), Allah Pitchai Abubacker Complex (Near Jabbar Tea Kadai), Melapalayam,Tirunelveli-5",
    url: "https://www.google.com/maps/place/Abu+Digital+X-ray,ECG+and+Labs/@8.7031237,77.7062749,17z/data=!4m16!1m9!4m8!1m0!1m6!1m2!1s0x3b0413bb769c4d85:0x18df3548bcc42169!2sPP35%2B5JM,+Nehruji+Rd,+Puthumanai+Mohalla,+Melapalayam,+Tirunelveli,+Tamil+Nadu+627005!2m2!1d77.709035!2d8.7029704!3m5!1s0x3b0413bb769c4d85:0x18df3548bcc42169!8m2!3d8.702966!4d77.7090342!16s%2Fg%2F11qp0ynhm_?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 2,
    icon: <CallIcon />,
    heading: "Call Us",
    description: phone1 + "  " + "&" + "  " + phone2,
    url: `tel:${phone1}`,
  },
  {
    id: 3,
    icon: <EmailRoundedIcon />,
    heading: "Write Us to",
    description: email,
    url: `mailto:${email}`,
  },
  {
    id: 4,
    icon: <TimerIcon />,
    heading: "Our Timing",
    description:
      " Monday to Saturday 7:00AM to 8:30PM Sunday 7:00AM to 12PM and 7:00PM to 8:30PM",
  },
];

export const socialMedia = [
  {
    id: 1,
    icon: <InstagramIcon />,
    head: "abu_lab_medicals_official",
    url: "https://www.instagram.com/abu_lab_medicals_official?utm_source=qr&igsh=MWd3bzVyZThyM2ZmaA==",
  },
  {
    id: 2,
    icon: <FacebookIcon />,
    head: "Abu Lab Medicals",
    url: "https://www.facebook.com/people/Abu-Lab-Medicals/61566550533940",
  },
];
