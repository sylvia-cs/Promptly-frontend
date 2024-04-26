import { IonIcon } from "@ionic/react";
import { checkmarkOutline, createOutline } from "ionicons/icons";
import useChat, { useAuth, useSettings, useTheme } from "../../store/store";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "../modals/Modal";
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete";
import classNames from "classnames";
import { handleExportChats, handleImportChats } from "../../utils/importexport";
import { ImageSize } from "../../services/chatService";

const varinats = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function SettingsTab({ visible }: { visible: boolean }) {
  const [
    sendChatHistory,
    setSendChatHistory,
    dalleImageSize,
    setDalleImageSize,
  ] = useSettings((state) => [
    state.settings.sendChatHistory,
    state.setSendChatHistory,
    state.settings.dalleImageSize,
    state.setDalleImageSize,
  ]);

  const [theme, setTheme] = useTheme((state) => [state.theme, state.setTheme]);

  const clearAllChats = useChat((state) => state.clearAllChats);
  const [apikey, setApiKey] = useAuth((state) => [
    state.apikey,
    state.setApiKey,
  ]);
  const [newApiKey, setNewApiKey] = useState(apikey);
  const [editApiKey, setEditApiKey] = useState(false);
  const [confirmDeleteChats, setConfirmDeleteChats] = useState(false);
  const [importExportStatus, setImportExportStatus] = useState({
    importing: false,
    exporting: false,
  });

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSendChatHistory(e.target.checked);
  }

  function handleSetNewApiKey() {
    if (newApiKey.trim().length === 0) return;
    setApiKey(newApiKey);
    setEditApiKey(false);
  }
  function handleChatsFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImportExportStatus({ importing: true, exporting: false });
    handleImportChats(file)
      .then(() => alert("Chats imported successfully"))
      .catch((message) => alert(message))
      .finally(() =>
        setImportExportStatus({ importing: false, exporting: false })
      );
  }

  function exportChats() {
    setImportExportStatus({ importing: false, exporting: true });
    handleExportChats()
      .then(() => alert("Chats exported successfully"))
      .catch((err) => alert(err))
      .finally(() =>
        setImportExportStatus({ importing: false, exporting: false })
      );
  }
  console.log(dalleImageSize);

  return (
    <motion.div
      variants={varinats}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={classNames("settings", { hidden: !visible })}
    >
      <div className="p-2">
        <div className="flex items-center mb-4 justify-between border border-gray-200 rounded dark:border-gray-700 p-2">
          <label
            htmlFor="default-checkbox"
            className="ml-2  font-bold  dark:text-gray-300"
          >
            Dark mode
          </label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              checked={theme === "dark"}
              onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <div className="flex items-center mb-4 justify-between border border-gray-200 rounded dark:border-gray-700 p-2">
          <span className="ml-2  font-bold  dark:text-gray-300">
            Clear all chats
          </span>
          <button
            type="button"
            className=" bg-red-700 text-white p-1 px-2 rounded"
            onClick={() => setConfirmDeleteChats(true)}
          >
            Clear
          </button>
        </div>

        <div className="flex items-center mb-4 justify-between border border-gray-200 rounded dark:border-gray-700 p-2">
          <label
            htmlFor="default-checkbox"
            className="ml-2  font-bold  dark:text-gray-300"
          >
            Send chat history
          </label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              checked={sendChatHistory}
              className="sr-only peer"
              onChange={handleOnChange}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <div className="flex items-center mb-4 justify-between border border-gray-200 rounded dark:border-gray-700 p-2">
          <span className="ml-2  font-bold  dark:text-gray-300">
            Import & Export Chats
          </span>
          <div className="flex items-center">
            <input
              type="file"
              name="chats-file"
              id="chats-file"
              accept=".json"
              onChange={handleChatsFileChange}
              className=" hidden pointer-events-none"
            />
            <button
              type="button"
              className=" bg-teal-700 text-white p-1 px-2 rounded mr-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
              onClick={() => document.getElementById("chats-file")?.click()}
              disabled={importExportStatus.importing}
            >
              Import
            </button>
            <button
              type="button"
              className=" bg-red-700 text-white p-1 px-2 rounded disabled:cursor-not-allowed disabled:pointer-events-none"
              disabled={importExportStatus.exporting}
              onClick={exportChats}
            >
              Export
            </button>
          </div>
        </div>
        <div className="">
          <label
            htmlFor="apikey"
            className="font-bold  dark:text-gray-300 mb-2"
          >
            Edit Apikey
          </label>
          <div className="flex items-center mb-4 justify-between border border-gray-200 rounded dark:border-gray-700 p-2">
            <input
              type={editApiKey ? "text" : "password"}
              id="apikey"
              value={newApiKey}
              readOnly={!editApiKey}
              onChange={(e) => setNewApiKey(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="sk-•••••••••••••••••••••••••••"
              required
            />
            {editApiKey ? (
              <button
                type="button"
                className="w-11 text-xl"
                onClick={handleSetNewApiKey}
              >
                <IonIcon icon={checkmarkOutline} />
              </button>
            ) : (
              <button
                type="button"
                className="w-11 text-xl"
                onClick={() => setEditApiKey(true)}
              >
                <IonIcon icon={createOutline} />
              </button>
            )}
          </div>
        </div>
        <div className="">
          <label
            htmlFor="dall-e-2"
            className="block  text-sm capitalize  text-gray-900  font-bold  dark:text-gray-300 mb-2"
          >
            Select Dall-E-2 Image Size
          </label>
          <select
            id="dall-e-2"
            value={dalleImageSize["dall-e-2"]}
            onChange={(e) =>
              setDalleImageSize(e.target.value as ImageSize, "dall-e-2")
            }
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="256x256" >
              256x256
            </option>
            <option value="512x512">512x512</option>
            <option value="1024x1024">1024x1024</option>
          </select>
        </div>
        <div className="mt-4">
          <label
            htmlFor="dall-e-3"
            className="block  text-sm capitalize  text-gray-900  font-bold  dark:text-gray-300 mb-2"
          >
            Select Dall-E-3 Image Size
          </label>
          <select
            id="dall-e-3"
            value={dalleImageSize["dall-e-3"]}
            onChange={(e) =>
              setDalleImageSize(e.target.value as ImageSize, "dall-e-3")
            }
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="1024x1024" >
              1024x1024
            </option>
            <option value="1792x1024">1792x1024</option>
            <option value="1024x1792">1024x1792</option>
          </select>
        </div>
      </div>
      <Modal visible={confirmDeleteChats}>
        <ConfirmDelete
          onDelete={() => {
            clearAllChats();
            setConfirmDeleteChats(false);
          }}
          onCancel={() => setConfirmDeleteChats(false)}
        >
          <p className="text-gray-500 dark:text-gray-700">
            This will delete all your chats and messages. This action cannot be
            undone.
          </p>
        </ConfirmDelete>
      </Modal>
    </motion.div>
  );
}
