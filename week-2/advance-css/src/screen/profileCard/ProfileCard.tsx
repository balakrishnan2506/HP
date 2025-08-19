import React from "react";
import styles from "./profile.module.css";

function ProfileCard() {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profileCardHeader}>
        <img
          src={"https://randomuser.me/api/portraits/men/7.jpg"}
          alt={"profile"}
        />
        <h1>John Doe</h1>
        <p>Software Engineer</p>
      </div>
      <div className={styles.profileCardBody}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
      <div className={styles.profileCardFooter}>
        <button>Follow</button>
      </div>
    </div>
  );
}

export default ProfileCard;
