const NoResultsDiv = () => {
  return (
    <div className="no-results">
        <img src="icons/no-result.png" alt="No results found" className="icon" />
        <h3 className="title">Something went wrong!</h3>
        <p className="message">We're unable to retrieve the weather details. Ensure you've entered a valid city or try again later.</p>
    </div>
  );
};

export default NoResultsDiv;