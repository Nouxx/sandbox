import styles from "./dialog.module.css";

export default function DialogPage() {
  return (
    <div>
      <button
        type="button"
        command="show-modal"
        commandfor="my-dialog"
        className="dialog-btn"
      >
        Open dialog
      </button>

      <dialog id="my-dialog" className={styles.dialog_modal}>
        <p>This dialog was opened using an invoker command.</p>
        <button type="button" commandfor="my-dialog" command="close">
          Close
        </button>
      </dialog>
    </div>
  );
}
