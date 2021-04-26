import React from 'react';
import { Link } from 'react-router-dom';

function SecretPage() {
  return (
    <section>
      <pre style={{ fontSize: '2rem' }}>
        welcome to the SECRET PAGE, voyager...
        <Link to="/"> ← go back</Link>
      </pre>
      <iframe
        width="800"
        height="450"
        allowFullScreen
        frameBorder="0"
        title="rick roll"
        // src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      />
    </section>
  );
}

export default SecretPage;
