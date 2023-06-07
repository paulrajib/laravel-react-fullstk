import * as React from "react";
import { Outlet, useOutletContext } from "react-router-dom";

export default function GuestLayout() {
  return (
    <div>
        <Outlet/>
    </div>
  )
}
