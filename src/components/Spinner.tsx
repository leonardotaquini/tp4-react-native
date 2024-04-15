const Spinner = () => {
  return (
    <>
    <div className="w-100 d-flex">
      <div className="d-flex m-auto">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
    </>
  );
};

export default Spinner;
