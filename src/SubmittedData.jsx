import { useLocation, useNavigate } from 'react-router-dom';

function SubmittedData() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="submitted-data">
      <h2>Submitted Data</h2>
      {state ? (
        <div>
          <p><strong>Name:</strong> {state.name}</p>
          <p><strong>Email:</strong> {state.email}</p>
          <p><strong>Phone:</strong> {state.phone}</p>
          <p><strong>Date:</strong> {state.date}</p>
        </div>
      ) : (
        <p>No data submitted.</p>
      )}
      <button onClick={() => navigate('/')}>Back to Form</button>
    </div>
  );
}

export default SubmittedData;
