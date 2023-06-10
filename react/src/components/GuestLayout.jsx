import * as React from "react";
import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function GuestLayout() {
  const {token} = useStateContext();
  // debugger;
  if(token){
    return <Navigate to="/users" />
  }
  return (
    <div>
      Guest Layout
        <Outlet/>
    </div>
  )
}
