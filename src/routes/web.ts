import AboutUs from "../views/web/aboutus/AboutUs";
import ContactUs from "../views/web/contactus/ContactUs";
import Home from "../views/web/home/Home";
import Services from "../views/web/services/Services";

interface routes_inter {
  path: string;
  exact: boolean;
  name: string;
  element: any;
}
const Web: routes_inter[] = [
  {
    path: "/",
    exact: true,
    name: "Home",
    element: Home,
  },
  {
    path: "/about-us",
    exact: true,
    name: "About us",
    element: AboutUs,
  },
  {
    path: "/services",
    exact: true,
    name: "Services",
    element: Services,
  },
  {
    path: "/contact-us",
    exact: true,
    name: "Contact us",
    element: ContactUs,
  },
];

export default Web;
