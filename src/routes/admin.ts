import AutoBatchedComponent from "../components/V18/AutoBatchedComponent";
import MyInput from "../components/V18/MyInput";
import Transition from "../components/V18/Transition";
import UseSyncExternalStoreComponent from "../components/V18/UseSyncExternalStoreComponent";
import useReducerComponent from "../components/V18/useReducerComponent";
import Dashboard from "../views/admin/Dashboard";
import InputField from "../views/admin/RV18/InputField";

interface routes_inter {
  path: string;
  exact: boolean;
  name: string;
  element: any;
}
const adminRoutes: routes_inter[] = [
  {
    path: "/admin/",
    exact: true,
    name: "Dashboard",
    element: Dashboard,
  },
  {
    path: "auto-batched-component",
    exact: true,
    name: "Auto Batched Component",
    element: AutoBatchedComponent,
  },
  {
    path: "input-field",
    exact: true,
    name: "Input Field",
    element: InputField,
  },
  {
    path: "use-sync-external-store-component",
    exact: true,
    name: "UseSyncExternalStoreComponent",
    element: UseSyncExternalStoreComponent,
  },

  {
    path: "transition",
    exact: true,
    name: "Transition",
    element: Transition,
  },
  {
    path: "use-reducer-component",
    exact: true,
    name: "useReducerComponent",
    element: useReducerComponent,
  },
];

export default adminRoutes;
