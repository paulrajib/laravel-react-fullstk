import React from 'react';
import { Navigate, Outlet, useOutletContext } from 'react-router-dom';


export default function DefaultLayout() {
  return (
    <div>
      DefaultLayout
      <Outlet />
    </div>
  )
}
