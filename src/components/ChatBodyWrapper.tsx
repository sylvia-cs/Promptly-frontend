import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ChatBodyWrapper.module.css";

export type ChatBodyWrapperType = {
  /** Style props */
  propMarginTop?: CSSProperties["marginTop"];
};

const ChatBodyWrapper: FunctionComponent<ChatBodyWrapperType> = ({
  propMarginTop,
}) => {
  const chatBodyWrapperStyle: CSSProperties = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  return (
    <div className={styles.chatBodyWrapper} style={chatBodyWrapperStyle}>
      <div className={styles.wrapperBackgroundChat}>
        <img
          className={styles.backgroundChatIcon}
          alt=""
          src="/background-chat.svg"
        />
      </div>
      <div className={styles.containerDefault}>
        <div className={styles.promptBox}>
          <div className={styles.tokensCounterWrapper}>
            <div className={styles.tokenCounter}>
              <img
                className={styles.lineRoundedlightningIcon}
                alt=""
                src="/line-roundedlightning.svg"
              />
              <div className={styles.buttonText}>250 tokens</div>
            </div>
          </div>
          <div className={styles.boxWrapper}>
            <div className={styles.placeholder}>How can I help you?</div>
            <div className={styles.divider} />
            <div className={styles.bottomActions}>
              <div className={styles.textMessageLeft}>
                <div className={styles.secondaryButton}>
                  <img
                    className={styles.lineRoundedbookIcon}
                    alt=""
                    src="/line-roundedbook.svg"
                  />
                  <div className={styles.buttonText1}>Library</div>
                  <img
                    className={styles.lineRoundedarrowRigth}
                    alt=""
                    src="/line-roundedarrow-rigth1.svg"
                  />
                </div>
                <div className={styles.leftActionIcons}>
                  <img
                    className={styles.lineRoundedpaperclipIcon}
                    alt=""
                    src="/line-roundedpaperclip.svg"
                  />
                  <img
                    className={styles.lineRoundedphotoIcon}
                    alt=""
                    src="/line-roundedphoto1.svg"
                  />
                  <img
                    className={styles.lineRoundedmicrophoneIcon}
                    alt=""
                    src="/line-roundedmicrophone.svg"
                  />
                  <img
                    className={styles.lineRoundedgridIcon}
                    alt=""
                    src="/line-roundedgrid.svg"
                  />
                </div>
              </div>
              <button className={styles.actions}>
                <div className={styles.buttonChat}>
                  <img
                    className={styles.filledsendIcon}
                    alt=""
                    src="/filledsend.svg"
                  />
                  <div className={styles.divider1} />
                  <img
                    className={styles.lineRoundedchevronDown}
                    alt=""
                    src="/line-roundedchevron-down-1.svg"
                  />
                </div>
                <div className={styles.primaryButton}>
                  <img
                    className={styles.filledsendIcon1}
                    alt=""
                    src="/filledsend-1.svg"
                  />
                  <div className={styles.buttonText2}>Send message</div>
                  <img
                    className={styles.lineRoundedarrowRigth1}
                    alt=""
                    src="/line-roundedarrow-rigth.svg"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBodyWrapper;
