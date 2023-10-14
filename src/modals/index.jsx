import { useModal } from "../store/modal/hooks";
import modals from "../routes/modals";
import { removeModal } from "../store/modal/actions";

export default function Modal() {
  const modal = useModal();
  const currentModal = modals.find((m) => m.name == modal.name);

  return (
    <div className="z-50">
      {currentModal && <currentModal.element close={removeModal} />}
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-[#5b708366] z-40"
        onClick={removeModal}
      />
    </div>
  );
}
