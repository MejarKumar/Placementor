import React, { useEffect } from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faWifi } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactForm() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className={styles.contact_section}>
      <div className={styles.card_section}>
        <div className={styles.first_card}>
          <div className={styles.row_items}>
            <div className={styles.icons}>
              <FontAwesomeIcon icon={faPhone} size={"lg"} />
            </div>
            <div>
              <p>9871276822</p>
            </div>
          </div>
          <div className={styles.row_items}>
            <div className={styles.icons}>
              <FontAwesomeIcon icon={faEnvelope} size={"lg"} />
            </div>
            <div>
              <p>
                placementor@gmail. <span>com</span>
              </p>
            </div>
          </div>
          <div className={styles.row_items}>
            <div className={styles.icons}>
              <FontAwesomeIcon icon={faWifi} size={"lg"} />
            </div>
            <div>
              <p>
                lorem Loremm abore et dolore magna aliquyam erat, sed diam
                voluptua. At vero
              </p>
            </div>
          </div>
        </div>
        <div className={styles.second_card}>
          <div className={styles.contact_form}>
            <div className={styles.name}>
              <input
                type="text"
                className={styles.input_items}
                name="first_name"
                placeholder="First Name"
              ></input>
              <input
                type="text"
                className={styles.input_items}
                name="last_name"
                placeholder="Last Name"
              ></input>
            </div>
            <div className={styles.info}>
              <input
                type="text"
                className={styles.input_items}
                name="email"
                placeholder="Email"
              ></input>
              <input
                type="text"
                className={styles.input_items}
                name="phone"
                placeholder="Phone Number"
              ></input>
            </div>
            <div className={styles.message}>
              <input
                type="text"
                className={styles.input_items}
                name="message"
                placeholder="Message for us"
              ></input>
            </div>
          </div>

          <div className={styles.submit_btn}>
            <button className={styles.submit}>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
