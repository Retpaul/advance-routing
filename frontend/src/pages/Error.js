import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function Error() {
  const error = useRouteError();

  let title = "An error occured";
  let message = "Something Went wrong";

  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 500) {
    title = "Not found";
    message = "could not find page";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
