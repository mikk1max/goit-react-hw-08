import React from "react";
import DocumentTitle from "../../components/DocumentTitle";
import { GiCheckedShield } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { BsTools } from "react-icons/bs";
import { MdDeviceHub } from "react-icons/md";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <main className={s.mainContainer}>
      <DocumentTitle>Welcome to Your Ultimate Phonebook!</DocumentTitle>
      <section className={s.allContactsSection}>
        <div>
          <h2>All Your Contacts in One Place</h2>
          <p>
            Managing your contacts has never been easier. With our intuitive,
            secure, and user-friendly phonebook, you can store, organize, and
            access your contacts from anywhere, anytime. <br />
            <br /> Say goodbye to cluttered lists, misplaced numbers, and
            forgotten details. Whether you're managing personal contacts,
            business partners, or family connections — our phonebook keeps
            everything neat and accessible.
          </p>
        </div>
        <div className={s.imgContainer}>
          <img src="/all-contacts.png" />
        </div>
      </section>

      <section className={s.whyUsSection}>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <GiCheckedShield />
            <p>
              <b>Secure Storage</b>
              <span>Your data stays private and protected.</span>
            </p>
          </li>
          <li>
            <BsSearch />
            <p>
              <b>Quick Search</b>
              <span>Find any contact instantly.</span>
            </p>
          </li>
          <li>
            <BsTools />
            <p>
              <b>Easy Management</b>
              <span>Add, edit, or delete contacts effortlessly.</span>
            </p>
          </li>
          <li>
            <MdDeviceHub />
            <p>
              <b>Accessible Anytime</b>
              <span>
                Whether on desktop or mobile, your contacts are just a click
                away.
              </span>
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default HomePage;
