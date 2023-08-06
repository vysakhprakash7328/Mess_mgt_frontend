import React, { useState, useEffect } from "react";
import "../styles/stdntappaprov.css";
import { FaEnvelopeOpenText, FaRegAddressCard } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Stdntappaprov = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [admnNo, setAdmnNo] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  console.log(phoneNumber, message, fullname,admnNo,email,selectedOption,selectedFile);

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    // Limit the input to a maximum of 10 digits
    if (value.length <= 13) {
      // Add "+91" only when the user starts typing
      setPhoneNumber(value.startsWith("+91") ? value : "+91" + value);
    }
  };
  const capitalizeFirstLetter = (e) => {
    const value = e.target.value;
    setFullname(value.replace(/\b\w/g, (match) => match.toUpperCase()));
  };

  const handleMessageChange = (e) => {
    const value = e.target.value;
    // Capitalize the first letter of every sentence
    setMessage(value.replace(/(^\w|\.\s*\w)/g, (match) => match.toUpperCase()));
  };
  useEffect(() => {
    // Add event listener to the input field to disable Backspace, Delete, and Spacebar keys when the input is empty
    const handleKeyDown = (e) => {
      if (
        phoneNumber === "+91" &&
        (e.key === "Backspace" || e.key === "Delete" || e.key === " ")
      ) {
        e.preventDefault();
      }
    };
    const handleKeyDown1 = (e) => {
      if (
        e.target.classList.contains("stdntappaprov-input3") &&
        e.key === " "
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown1);

    // Cleanup the event listener when the component unmounts

    document
      .querySelector(".stdntappaprov-input3")
      .addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown1);
      document
        .querySelector(".stdntappaprov-input3")
        .removeEventListener("keydown", handleKeyDown);
    };
  }, [phoneNumber]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const convert2base64 = (e) => {
    const files = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedFile(reader.result.toString());
    };
    reader.readAsDataURL(files);
  };

  const handleChange=(e)=>{
    if(e.target.name === "email") setEmail(e.target.value);
    else setAdmnNo(e.target.value)
  }

  return (
    <div className="stdntappaprov-group2">
      <h1>Application Approval</h1>
      <div className="stdntappaprov-sidebarbox2">
        <div className="stdntappaprov-contents2">
          <div className="appaprov-navigation2">
            <ul className="appaprov-sidebar2">
              <li>
                <NavLink
                  to="/stdntqueries"
                  className={"appaprovactive1-111"}
                  exact
                  activeClassName="active"
                >
                  <FaEnvelopeOpenText className="appaprovicon1-111" />
                  <span className="appaprovmenu-text1-111">queries</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/stdntappaprov"
                  className={"appaprovactive2-222"}
                  activeClassName="active"
                >
                  <FaRegAddressCard className="appaprovicon2-222" />
                  <span className="appaprovmenu-text2-222">approvals</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <img
        src="./images/checkinnstudenthomelogo.png"
        alt="logopicstudenthome2824"
        className="stdntappaprov-logopic2"
      />
      <div className="appaprov-container2">
        <div className="appaprovtextinput12">
          <input
            type="text"
            required
            placeholder="Full Name"
            value={fullname}
            onChange={capitalizeFirstLetter}
            className="stdntappaprov-input1"
          />
          <input
            type="text"
            required
            name="admNo"
            placeholder="Admission No"
            value={admnNo}
            className="stdntappaprov-input2"
            onChange={handleChange}
          />
        </div>

        <div className="appaprovtextinput34">
          <input
            country="IN"
            pattern="^\+91[789]\d{9}$"
            defaultValue="+91"
            onChange={handlePhoneNumberChange}
            value={phoneNumber}
            maxLength="13"
            type="tel"
            placeholder="Phone"
            required
            className="stdntappaprov-input3"
          />
          <input
            type="email"
            required
            placeholder="Email"
            className="stdntappaprov-input4"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <span className="applicationtype">Application type:</span>
        <br></br>
        <select
          id="applicationtype"
          name="applicationtype"
          required
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value="">Select Category</option>
          <br></br>
          <option value="inventory">Scholarship</option>
          <option value="mess">Health and Medical</option>
          <option value="safety-security">Hostel Joining</option>
          <option value="health-medical">Hostel Vacating</option>
          <option value="administrative-management">Fee Payment</option>
          <option value="internet-technology">Internet and Technology</option>
          <option value="others">Others</option>
        </select>

        <span className="applicationfile1">
          Upload Application files / images:
        </span>
        <input
          type="file"
          id="applicationfile"
          name="applicationfile"
          accept=".pdf, .jpg, .png"
          required
          onChange={convert2base64}
        />

        <textarea
          type="text"
          required
          placeholder="Message"
          value={message}
          onChange={handleMessageChange}
          className="stdntappaprov-input5"
        />

        <button type="submit" className="submit-button2">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Stdntappaprov;
