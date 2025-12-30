"use client";

import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button";

const FloatingWhatsapp = ({ product }) => {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="+2347063830062" // Required
        accountName="Vidi Limited" // Optional
        avatar="/images/logo/vidi.jpg" // Optional
        initialMessageByServer={`Hi There! Would you love to purchase a ${product}?`} // Optional
        initialMessageByClient={`Hello! I would Like To Chat With You About Purchasing A ${product}`} // Optional
        statusMessage="Available" // Optional
        startChatText="Start chat with us" // Optional
        tooltipText={`Want to place an order for ${product}?`} // Optional
        allowEsc={true} // Optional

        // Explore all available props below
      />
    </div>
  );
};

export default FloatingWhatsapp;
