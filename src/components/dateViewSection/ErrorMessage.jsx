const ErrorMessage = ({ code }) => {
  return (
    <section className='ErrorMessage'>
      {code === 404 ? (
        <div>
          Not found.
          <div>
            <p>There is no data for dates listed below.</p>
            <ul>
              <li>1995-06-17</li>
              <li>1995-06-18</li>
              <li>1995-06-19</li>
            </ul>
          </div>
        </div>
      ) : (
        code === 400 && <div>Invalid Request - please check the date again.</div>
      )}
    </section>
  );
};

export default ErrorMessage;
