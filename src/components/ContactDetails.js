import React, { useEffect, useState } from "react";
import { Descriptions } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import "../styles/ContactDetails.css";
function ContactDetails(props) {
   
  const { contact, contactList } = props;
  console.log(contact);
  console.log(contactList);
  const contactInfo = contactList.find((item) => {
    return item.id === contact;
  });
  console.log(contactInfo);

    return (
      <div className="contact-info-container">
        <Avatar
          className="avatar"
          size={64}
          icon={<UserOutlined />}
          style={{
            backgroundColor: "#fde3cf",
            color: "#f56a00",
          }}
        />

        <div className="contact-name">
          {contactInfo ? contactInfo.name : ""}
        </div>
        <Descriptions title="Contact Details" layout="vertical">
          <Descriptions.Item label="UserName">
            {contactInfo ? contactInfo.username : ""}
          </Descriptions.Item>
          <Descriptions.Item label="Telephone">
            {contactInfo ? contactInfo.phone : ""}
          </Descriptions.Item>
          <Descriptions.Item label="Email">
            {contactInfo ? contactInfo.email : ""}
          </Descriptions.Item>
          <Descriptions.Item label="Company">
            {contactInfo ? contactInfo.company.name : ""}
          </Descriptions.Item>
          <Descriptions.Item label="Website">
            {contactInfo ? contactInfo.website : ""}
          </Descriptions.Item>
          <Descriptions.Item label="Address">
            {contactInfo
              ? contactInfo.address.suite +
                " " +
                contactInfo.address.street +
                " " +
                contactInfo.address.city +
                " " +
                contactInfo.address.zipcode
              : ""}
          </Descriptions.Item>
        </Descriptions>
      </div>
    );
}

export default ContactDetails;
