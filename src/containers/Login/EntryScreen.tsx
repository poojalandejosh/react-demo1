import React, { useState } from "react";
import { styles } from "./LoginStyle";
import CustomerLogin from "./CustomerLogin";
import AdminLogin from "./AdminLogin";
import backgroundCust from "../../assets/images/bankBackground.jpg";
import backgroundAdmin from "../../assets/images/admin.jpg";
import TextComponent from "../../components/TextComponent";

function EntryScreen() {
  const [isCustomer, setIsCustomer] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [showAdminCustPart, setShowAdminCustPart] = useState<boolean>(true);

  const adminSectionClick = () => {
    setIsAdmin(true);
    setShowAdminCustPart(false);
  };
  const customerSectionClick = () => {
    setIsCustomer(true);
    setShowAdminCustPart(false);
  };

  return (
    <div
      role="entryView"
      style={{
        ...styles.container,
        backgroundImage: isAdmin
          ? `url(${backgroundAdmin})`
          : `url(${backgroundCust})`,
      }}
    >
      {showAdminCustPart && (
        <div
          style={{
            flexDirection: "row",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            width: "50%",
            height: "55%",
            padding: 50,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            borderRadius: 5,
            contain: "content",
            marginTop: 6,
          }}
        >
          <button
            onClick={adminSectionClick}
            style={{
              border: "none",
              backgroundColor: "rgba(255, 255, 226, 0.0)",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              marginRight: 60,
            }}
          >
            <img
              style={{ borderRadius: 100, width: 100, height: 100 }}
              src={require("../../assets/logo/admin.jpeg")}
              alt=""
            />
            <TextComponent
              fontFamily="fantasy"
              color="white"
              text="Admin"
              textAlign="center"
              fontSize={18}
              fontWeight="bolder"
            />
          </button>

          <button
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              border: "none",
              backgroundColor: "rgba(255, 255, 226, 0.0)",
            }}
            onClick={customerSectionClick}
          >
            <img
              style={{ borderRadius: 100, width: 100, height: 100 }}
              src={require("../../assets/logo/client.png")}
              alt=""
            />
            <TextComponent
              fontFamily="fantasy"
              color="white"
              text="Customers"
              textAlign="center"
              fontSize={18}
              fontWeight="bolder"
            />
          </button>
        </div>
      )}
      {isCustomer ? <CustomerLogin /> : isAdmin ? <AdminLogin /> : null}
    </div>
  );
}

export default EntryScreen;
