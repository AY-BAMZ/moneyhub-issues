import React, { useEffect } from "react";

function Payment() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.eu-west-1.amazonaws.com/widgets.moneyhub.co.uk/widgets.bundle.js";
    script.async = true;
    script.onload = () => {
      if (window.moneyhub) {
        window.moneyhub.init({
          elementId: "root",
          type: "affordability",
          widgetId: "b309a3af-a32f-4099-a1cf-d4d809071390",
          params: {
            externalUserId: "external-user-id",
            email: "email@moneyhub.com",
            name: "Sarah Green",
            state: "random-unique-session-string",
          },
          logger: {
            info: (page, data) => console.info(page, data),
            error: (page, data) => console.error(page, data),
          },
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <div id="root"></div>;
}

export default Payment;
