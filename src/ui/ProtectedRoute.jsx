/* eslint-disable react/prop-types */
import {useEffect} from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. load the authenticated user

  const { isAuthenticated, isLoading } = useUser()


  // 2. if there is NO authenticated user, redirect to the /login

  useEffect(function () {
    console.log(isAuthenticated)
    if (!isAuthenticated && !isLoading) navigate("/login")
    
  }, [isAuthenticated, isLoading, navigate])

  
  // 3. while loading, show a spinner

  if (isLoading) return (<FullPage>
    <Spinner />
  </FullPage>)

  // 4. if there IS a user, render the app;

  console.log(isAuthenticated)

  if (isAuthenticated) return children;
}

export default ProtectedRoute
