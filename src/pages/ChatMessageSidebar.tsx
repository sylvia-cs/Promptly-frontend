import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import ChatBodyWrapper from "../components/ChatBodyWrapper";
import styles from "./ChatMessageSidebar.module.css";

const ChatMessageSidebar: FunctionComponent = () => {
  return (
    <div className={styles.chatMessageSidebar}>
      <div className={styles.messageSettings}>
        <div className={styles.topWrapper}>
          <img
            className={styles.userIcon}
            loading="lazy"
            alt=""
            src="/user.svg"
          />
          <div className={styles.textWrapper}>
            <div className={styles.modelName}>
              What can [NAME] help you with today?
            </div>
          </div>
        </div>
        <div className={styles.tabExample}>
          <button className={styles.tabBadge}>
            <div className={styles.badgeText}>
              <img
                className={styles.lineRoundedphotoIcon}
                alt=""
                src="/line-roundedphoto.svg"
              />
              <div className={styles.cardTitle}>Summary</div>
              <img
                className={styles.lineRoundedsettingsIcon}
                alt=""
                src="/line-roundedsettings.svg"
              />
            </div>
          </button>
          <div className={styles.tabBadge1}>
            <div className={styles.badgeText1}>
              <img
                className={styles.lineRoundedfileIcon}
                alt=""
                src="/line-roundedfile.svg"
              />
              <div className={styles.cardTitle1}>Translate</div>
              <img
                className={styles.lineRoundedsettingsIcon1}
                alt=""
                src="/line-roundedsettings.svg"
              />
            </div>
          </div>
          <div className={styles.tabBadge2}>
            <div className={styles.badgeText2}>
              <img
                className={styles.lineRoundedfileIcon1}
                alt=""
                src="/line-roundedfile.svg"
              />
              <div className={styles.cardTitle2}>Code</div>
              <img
                className={styles.lineRoundedsettingsIcon2}
                alt=""
                src="/line-roundedsettings.svg"
              />
            </div>
          </div>
          <div className={styles.tabBadge3}>
            <div className={styles.badgeText3}>
              <img className={styles.lineRoundedlinkIcon} alt="" />
              <div className={styles.cardTitle3}>Text</div>
              <img
                className={styles.lineRoundedsettingsIcon3}
                alt=""
                src="/line-roundedsettings.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <main className={styles.mainBodyWrapper}>
        <FrameComponent />
        <section className={styles.bottomActions}>
          <ChatBodyWrapper />
          <ChatBodyWrapper propMarginTop="-252px" />
        </section>
      </main>
    </div>
  );
};

export default ChatMessageSidebar;
