import React from 'react';
import { Link, Navigate, Outlet, useOutletContext } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';


export default function DefaultLayout() {
  const {user, token} = useStateContext();

  if(!token){
    return <Navigate to="/login" />
  }

  const onLogout = (ev) => {
    ev.preventdefault();
  }

  return (
    <div id='defaultLayout'>

      <aside>
        DefaultLayout
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Usera</Link>
      </aside>

      <div className="content">
        <header>
          <div>
            Header
          </div>
          <div>
            {user.name}
            <a className="btn-logout" onClick={onLogout} href="#">Logout</a>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
