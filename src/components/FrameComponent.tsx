import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.topBarWrapperParent}>
      <header className={styles.topBarWrapper}>
        <div className={styles.topMenuLeft}>
          <div className={styles.titleBadge}>
            <div className={styles.topBarTitle}>Chats</div>
            <div className={styles.badge}>
              <img
                className={styles.lineRoundedcommandIcon}
                alt=""
                src="/line-roundedcommand.svg"
              />
              <div className={styles.buttonText}>GPT-4</div>
              <img
                className={styles.lineRoundedcommandIcon1}
                alt=""
                src="/line-roundedcommand.svg"
              />
            </div>
          </div>
          <div className={styles.inputText}>
            <div className={styles.placeholderWrapper}>
              <img
                className={styles.lineRoundedsearchIcon}
                alt=""
                src="/line-roundedsearch.svg"
              />
              <div className={styles.placeholder}>Search for chats...</div>
            </div>
            <img
              className={styles.lineRoundedsearchIcon1}
              alt=""
              src="/line-roundedsearch1.svg"
            />
            <div className={styles.primaryButton}>
              <img
                className={styles.lineRoundedsearchIcon2}
                alt=""
                src="/line-roundedsearch2.svg"
              />
              <div className={styles.buttonText1}>Default</div>
              <img
                className={styles.lineRoundedarrowRigth}
                alt=""
                src="/line-roundedarrow-rigth.svg"
              />
            </div>
            <div className={styles.badge1}>
              <img
                className={styles.lineRoundedcommandIcon2}
                alt=""
                src="/line-roundedcommand.svg"
              />
              <div className={styles.buttonText2}>K</div>
              <img
                className={styles.lineRoundedcommandIcon3}
                alt=""
                src="/line-roundedcommand.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.topMenuRight}>
          <div className={styles.secondaryButton}>
            <img
              className={styles.lineRoundedsettingsIcon}
              alt=""
              src="/line-roundedsettings1.svg"
            />
            <div className={styles.buttonText3}>Chat settings</div>
            <img
              className={styles.lineRoundedarrowRigth1}
              alt=""
              src="/line-roundedarrow-rigth1.svg"
            />
          </div>
          <div className={styles.primaryButton1}>
            <img
              className={styles.lineRoundedplusIcon}
              loading="lazy"
              alt=""
              src="/line-roundedplus.svg"
            />
            <div className={styles.buttonText4}>New chat</div>
            <img
              className={styles.lineRoundedarrowRigth2}
              alt=""
              src="/line-roundedarrow-rigth.svg"
            />
          </div>
          <div className={styles.accountWrapper}>
            <img
              className={styles.circleAvatarIcon}
              alt=""
              src="/circle-avatar.svg"
            />
            <div className={styles.accountName}>
              <div className={styles.placeholder1}>Name</div>
              <img
                className={styles.lineRoundedchevronDown}
                alt=""
                src="/line-roundedchevron-down.svg"
              />
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles.actionIcons}>
            <img
              className={styles.lineRoundedsettingsIcon1}
              alt=""
              src="/line-roundedsettings-1.svg"
            />
            <img
              className={styles.lineRoundedtrashIcon}
              alt=""
              src="/line-roundedtrash.svg"
            />
            <img
              className={styles.lineRoundedarchiveIcon}
              alt=""
              src="/line-roundedarchive.svg"
            />
            <img
              className={styles.lineRoundedsidebarRight}
              alt=""
              src="/line-roundedsidebar-right.svg"
            />
          </div>
        </div>
      </header>
      <div className={styles.chatBodyWrapper}>
        <div className={styles.wrapperBackgroundChat}>
          <img
            className={styles.backgroundChatIcon}
            alt=""
            src="/background-chat.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
