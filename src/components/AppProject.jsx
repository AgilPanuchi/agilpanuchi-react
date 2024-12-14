const AppProject = ({ title, description, features, summaries }) => {
  return (
    <div>
      <h4 className="alert alert-success alert-heading" role="alert">
        {title}
      </h4>
      <p>{description}</p>
      {features && features.length > 0 && (
        <>
          <p>Fitur utama dari aplikasi ini mencakup:</p>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>
                <strong>{feature.title}:</strong> {feature.detail}
              </li>
            ))}
          </ul>
        </>
      )}
      <hr />
      {summaries &&
        summaries.length > 0 &&
        summaries.map((summary, index) => (
          <div key={index} className="mb-3">
            {summary}
          </div>
        ))}
    </div>
  );
};

export default AppProject;
