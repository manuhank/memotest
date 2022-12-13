import "./modal.scss";
type modalProps = {
  title: string;
  onAccept?: (v:any) => void;
  onCancel?: (v:any) => void;
  children?: React.ReactNode
};

function Modal({ title, onAccept, onCancel,children }: modalProps) {
  return (
    <div onClick={onAccept} className="Modal">
      <div className="content">
        {title && <p className="title">{title}</p>}
        <div className="children">
          {children}
        </div>
        <div className="actions">
          {onCancel && (
            <button className="cancel" type="button" onClick={onCancel}>
              Cancel
            </button>
          )}
          {onAccept && (
            <button className="accept" type="button" onClick={onAccept}>
              Accept
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
