import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import UpdateItem from "./pages/Items/UpdateItem";
import ShowItem from "./pages/Items/ShowItem";
import CreateItem from "./pages/Items/CreateItem";
import ListItems from "./pages/Items/ListItems";
import ItemsLayout from "./pages/Items/ItemsLayout";

const router = createBrowserRouter([
  {
    path: "/<makeupStore>",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/<makeupStore>/items",
        element: <ItemsLayout />,
        children: [
          {
            index: true,
            element: <ListItems />,
          },
          {
            path: "/<makeupStore>/items/new",
            element: <CreateItem />,
          },
          {
            path: "/<makeupStore>/items/new/:id",
            element: <ShowItem />,
          },
          {
            path: "/<makeupStore>/items/new/:id/update",
            element: <UpdateItem />,
          },
        ],
      },
    ],
  },
]);

export default router;