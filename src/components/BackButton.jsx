import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="btn btn-warning w-100 mt-3"
      type="button"
    >
      Volver
    </button>
  );
}
